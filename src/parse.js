
function accept (input, offset, regex) {
  let i = offset

  while (input[i] && regex.test(input[i])) {
    i++
  }

  return i > offset ? i : 0
}

function acceptLiteral (input, offset, lower, upper) {
  let i = offset
  let j = 0

  while ((input[i] === lower[j]) || (input[i] === upper[j])) {
    i++
    j++
  }

  return i === offset + lower.length ? i : 0
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

  if (feature[0]) {
    return feature[1]
  }

  const scenario = parseScenario(input, offset)

  if (scenario[0]) {
    return scenario[1]
  }

  return undefined
}

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

function parseScenario (input, offset) {
  let start = offset

  let end = acceptLiteral(input, start, 'scenario:', 'SCENARIO:')

  if (end) {
    start = ignoreEmptyLines(input, end)

    let [titleStart, titleEnd] = parsePhrase(input, start)

    if (titleEnd > titleStart) {
      start = ignoreEmptyLines(input, titleEnd)

      let [summaryStart, summaryEnd] = parseText(input, start)

      if (summaryEnd > summaryStart) {
        start = ignoreEmptyLines(input, summaryEnd)
      }

      let nodes = parseSteps(input, start)

      return [
        true,
        {
          type: 'statement',
          statementType: 'scenario',
          title: input.slice(titleStart, titleEnd),
          summary: input.slice(summaryStart, summaryEnd),
          nodes
        }
      ]
    }
  }

  return [false]
}

function parseFeature (input, offset) {
  let start = offset

  let end = acceptLiteral(input, start, 'feature:', 'FEATURE:')

  if (end) {
    start = ignoreEmptyLines(input, end)

    let [titleStart, titleEnd] = parsePhrase(input, start)

    if (titleEnd > titleStart) {
      start = ignoreEmptyLines(input, titleEnd)

      let [summaryStart, summaryEnd] = parseText(input, start)

      if (summaryEnd > summaryStart) {
        start = ignoreEmptyLines(input, summaryEnd)
      }

      let nodes = parseStatements(input, start)

      return [
        true,
        {
          type: 'feature',
          title: input.slice(titleStart, titleEnd),
          summary: input.slice(summaryStart, summaryEnd),
          nodes
        }
      ]
    }
  }

  return [false]
}

function parseStatements (input, offset) {
  return []
}

function parseSteps (input, offset) {
  let result = []

  let range = parsePhrase(input, offset)

  if (range[0] && range[1]) {
    let rangeText = input.slice(range[0], range[1])

    if (!/^(given|when|then|and|but)/i.test(rangeText)) {
      return [0, 0]
    }

    let stepType = input.slice(range[0], range[2]).toLowerCase()

    result.push({
      stepType,
      text: rangeText,
      type: 'step'
    })

    do {
      offset = ignoreEmptyLines(input, range[1])

      range = parsePhrase(input, offset)

      rangeText = input.slice(range[0], range[1])

      if (range[0] && range[1] && /^(given|when|then|and|but)/i.test(rangeText)) {
        stepType = input.slice(range[0], range[2]).toLowerCase()

        result.push({
          stepType,
          text: rangeText,
          type: 'step'
        })
      }
    } while (range[0] && range[1] && /^(given|when|then|and|but)/i.test(rangeText))

    return result
  }

  return []
}

function parseText (input, offset) {
  let range = parsePhrase(input, offset)

  if (range[0] && range[1]) {
    let rangeText = input.slice(range[0], range[1])

    if (/^(given|when|then|and|but)/i.test(rangeText)) {
      return [0, 0]
    }

    let start = range[0]

    let end = range[1]

    let newLine = accept(input, end, /[\n\r]+/)

    if (newLine) {
      do {
        offset = ignoreEmptyLines(input, end)

        range = parsePhrase(input, offset)

        rangeText = input.slice(range[0], range[1])

        if (range[0] && range[1] && !/^(given|when|then|and|but)/i.test(rangeText)) {
          end = range[1]
        }
      } while (range[0] && range[1] && !/^(given|when|then|and|but)/i.test(rangeText))
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
