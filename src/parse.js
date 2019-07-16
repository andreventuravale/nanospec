
const FOUND = 0
const START = 1
const END = 2
const RESULT = 3

function _parseSummary () {
  return (input, offset) => {
    let start = ignoreEmptyLines(input, offset)

    let [summaryStart, summaryEnd] = parseText(input, start)

    if (summaryEnd > summaryStart) {
      start = ignoreEmptyLines(input, summaryEnd)

      return [
        true,
        summaryStart,
        summaryEnd,
        {
          summary: input.slice(summaryStart, summaryEnd)
        }
      ]
    }

    return [false]
  }
}

function _parseTitle () {
  return (input, offset) => {
    let start = ignoreEmptyLines(input, offset)

    let [titleStart, titleEnd] = parsePhrase(input, start)

    if (titleEnd > titleStart) {
      return [
        true,
        titleStart,
        titleEnd,
        {
          title: input.slice(titleStart, titleEnd)
        }
      ]
    }
    return [false]
  }
}

function _parseSteps () {
  return (input, offset) => {
    let start = ignoreEmptyLines(input, offset)

    let nodes = parseSteps(input, start)

    if (nodes[FOUND]) {
      return [
        true,
        0, // TBD
        0, // TBD
        {
          nodes: nodes[START]
        }
      ]
    }

    return [false]
  }
}

function _parseKeyword (keyword, result) {
  return (input, offset) => {
    let start = offset

    let end = acceptLiteral(input, start, keyword)

    if (end) {
      return [
        true,
        start,
        end,
        result
      ]
    }

    return [false]
  }
}

function accept (input, offset, regex) {
  let i = offset

  while (input[i] && regex.test(input[i])) {
    i++
  }

  return i > offset ? i : 0
}

function acceptLiteral (input, offset, keyword) {
  let i = offset
  let keywordLength = keyword.length / 2
  let j = 0
  let k = keywordLength

  while ((input[i] === keyword[j]) || (input[i] === keyword[k])) {
    i++
    j++
    k++
  }

  return i === offset + keywordLength ? i : 0
}

function ignore (input, offset, regex) {
  let i = offset

  while (input[i] && regex.test(input[i])) {
    i++
  }

  return i
}

function ignoreEmptyLines (input, offset) {
  return ignore(input, offset, /\s+/)
}

function ignoreSpaces (input, offset) {
  return ignore(input, offset, /[ \t]/)
}

function parse (input) {
  let offset = 0

  offset = ignoreEmptyLines(input, offset)

  const feature = parseFeature(input, offset)

  if (feature[FOUND]) {
    return feature[RESULT]
  }

  const scenario = parseScenario(input, offset)

  if (scenario[FOUND]) {
    return scenario[RESULT]
  }

  const background = parseBackground(input, offset)

  if (background[FOUND]) {
    return background[RESULT]
  }

  return undefined
}

const parseFeature = (() => {
  const _keyword = _parseKeyword('feature:FEATURE:', { type: 'feature' })
  const _title = _parseTitle()
  const _summary = _parseSummary()

  return (input, offset) => {
    const keyword = _keyword(input, offset)
    const title = keyword[FOUND] && _title(input, keyword[END])
    const summary = title[FOUND] && _summary(input, title[END])

    if (keyword[FOUND] && title[FOUND]) {
      return [
        true,
        keyword[START],
        summary[END] || title[END],
        {
          ...keyword[RESULT],
          ...title[RESULT],
          ...summary[RESULT]
        }
      ]
    } else {
      return [false]
    }
  }
})()

const parseScenario = (() => {
  const _keyword = _parseKeyword('scenario:SCENARIO:', { type: 'statement', statementType: 'scenario' })
  const _title = _parseTitle()
  const _summary = _parseSummary()
  const _steps = _parseSteps()

  return (input, offset) => {
    const keyword = _keyword(input, offset)
    const title = keyword[FOUND] && _title(input, keyword[END])
    const summary = title[FOUND] && _summary(input, title[END])
    const steps = title[FOUND] && _steps(input, summary[END] || title[END])

    if (keyword[FOUND] && title[FOUND] && steps[FOUND]) {
      return [
        true,
        keyword[START],
        steps[END],
        {
          ...keyword[RESULT],
          ...title[RESULT],
          ...summary[RESULT],
          ...steps[RESULT]
        }
      ]
    } else {
      return [false]
    }
  }
})()

const parseBackground = (() => {
  const _keyword = _parseKeyword('background:BACKGROUND:', { type: 'statement', statementType: 'background' })
  const _title = _parseTitle()
  const _steps = _parseSteps()

  return (input, offset) => {
    const keyword = _keyword(input, offset)
    const title = keyword[FOUND] && _title(input, keyword[END])
    const steps = title[FOUND] && _steps(input, title[END])

    if (keyword[FOUND] && title[FOUND] && steps[FOUND]) {
      return [
        true,
        keyword[START],
        steps[END],
        {
          ...keyword[RESULT],
          ...title[RESULT],
          ...steps[RESULT]
        }
      ]
    } else {
      return [false]
    }
  }
})()

function parsePhrase (input, offset) {
  let start = offset

  let end = parseWord(input, start)

  if (end) {
    let firstWordEnd = end

    let left = start

    let right = end

    while (end) {
      start = ignoreSpaces(input, end)

      end = parseWord(input, start)

      if (end) {
        right = end
      }
    }

    return [left, right, firstWordEnd]
  }

  return [0, 0]
}

function parseSteps (input, offset) {
  let result = []

  let range = parsePhrase(input, offset)

  if (range[FOUND] && range[START]) {
    let fullText = input.slice(range[FOUND], range[START])

    if (!/^(given|when|then|and|but)/i.test(fullText)) {
      return [false]
    }

    let stepType = input.slice(range[FOUND], range[END]).toLowerCase()

    let text = input.slice(range[END], range[START]).trim()

    result.push({
      type: 'step',
      stepType,
      text,
      fullText
    })

    do {
      offset = ignoreEmptyLines(input, range[START])

      range = parsePhrase(input, offset)

      fullText = input.slice(range[FOUND], range[START])

      if (range[FOUND] && range[START] && /^(given|when|then|and|but)/i.test(fullText)) {
        stepType = input.slice(range[FOUND], range[END]).toLowerCase()

        text = input.slice(range[END], range[START]).trim()

        result.push({
          type: 'step',
          stepType,
          text,
          fullText
        })
      }
    } while (range[FOUND] && range[START] && /^(given|when|then|and|but)/i.test(fullText))

    return [
      true,
      result
    ]
  }

  return [false]
}

function parseText (input, offset) {
  let range = parsePhrase(input, offset)

  if (range[FOUND] && range[START]) {
    let rangeText = input.slice(range[FOUND], range[START])

    if (/^(given|when|then|and|but)/i.test(rangeText)) {
      return [0, 0]
    }

    let start = range[FOUND]

    let end = range[START]

    let newLine = accept(input, end, /[\n\r]+/)

    if (newLine) {
      do {
        offset = ignoreEmptyLines(input, end)

        range = parsePhrase(input, offset)

        rangeText = input.slice(range[FOUND], range[START])

        if (range[FOUND] && range[START] && !/^(given|when|then|and|but)/i.test(rangeText)) {
          end = range[START]
        }
      } while (range[FOUND] && range[START] && !/^(given|when|then|and|but)/i.test(rangeText))
    }

    return [start, end]
  }

  return [0, 0]
}

function parseWord (input, offset) {
  let start = offset

  let end = ignore(input, start, /[^\s\r\n]/)

  return end > start ? end : 0
}

module.exports = {
  parse
}
