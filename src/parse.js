
const FOUND = 0
const START = 1
const END = 2
const RESULT = 3

const optional = (parse) => {
  return (input, offset) => {
    const parseResult = parse(input, offset)

    if (parseResult[RESULT]) {
      return parseResult
    } else {
      return [true, offset, offset, {}]
    }
  }
}

const compose = function (...chain) {
  return (input, offset) => {
    let composedResult = {}
    let currentOffset = offset
    let firstParseResult = null
    let i = 0
    let lastParseResult = [true, 0, 0, {}]

    for (; lastParseResult[FOUND] && i < chain.length; i++) {
      const parse = chain[i]
      lastParseResult = parse(input, currentOffset)
      Object.assign(composedResult, lastParseResult[RESULT])
      currentOffset = lastParseResult[END]
      firstParseResult = firstParseResult || lastParseResult
    }

    return [
      i >= chain.length,
      firstParseResult[START],
      lastParseResult[END],
      composedResult
    ]
  }
}

function acceptLiteral (input, offset, keyword) {
  let i = offset
  let keywordLength = keyword.length / 2
  let j = 0
  let k = keywordLength

  while ((input[i] === keyword[j]) || (input[i] === keyword[k])) { i++; j++; k++ }

  return i === offset + keywordLength ? i : 0
}

const parseBackgroundKeyword = parseKeyword('background:BACKGROUND:', { type: 'statement', statementType: 'background' })

const parseScenarioKeyword = parseKeyword('scenario:SCENARIO:', { type: 'statement', statementType: 'scenario' })

const parseFeatureKeyword = parseKeyword('feature:FEATURE:', { type: 'feature' })

const parseBackground = compose(
  parseBackgroundKeyword,
  parseTitle,
  parseSteps
)

const parseScenario = compose(
  parseScenarioKeyword,
  parseTitle,
  optional(
    parseSummary
  ),
  parseSteps
)

const parseFeature = compose(
  parseFeatureKeyword,
  parseTitle,
  parseSummary
)

function ignore (input, offset, regex) {
  let i = offset

  while (input[i] && regex.test(input[i])) { i++ }

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

  if (feature[FOUND]) { return feature[RESULT] }

  const scenario = parseScenario(input, offset)

  if (scenario[FOUND]) { return scenario[RESULT] }

  const background = parseBackground(input, offset)

  if (background[FOUND]) { return background[RESULT] }

  return undefined
}

function parseKeyword (keyword, result) {
  return (input, offset) => {
    let start = offset

    let end = acceptLiteral(input, start, keyword)

    if (end) {
      return [true, start, end, result]
    }

    return [false]
  }
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

    return [true, left, right, firstWordEnd]
  }

  return [false]
}

function parseStep (input, offset) {
  const currentOffset = ignoreEmptyLines(input, offset)

  const range = parsePhrase(input, currentOffset)

  if (range[FOUND]) {
    const fullText = input.slice(range[START], range[END])

    if (/^(given|when|then|and|but)/i.test(fullText)) {
      const type = 'step'

      const stepType = input.slice(range[START], range[RESULT]).toLowerCase()

      const text = input.slice(range[RESULT], range[END]).trim()

      return [true, range[START], range[END], { type, stepType, text, fullText }]
    }
  }

  return [false]
}

function parseSteps (input, offset) {
  const nodes = []

  let parseResult = parseStep(input, offset)

  if (parseResult[FOUND]) {
    do {
      nodes.push(parseResult[RESULT])

      parseResult = parseStep(input, parseResult[END])
    } while (parseResult[FOUND])

    return [true, nodes[0][START], nodes[nodes.length - 1][END], { nodes }]
  }

  return [false]
}

function parseSummary (input, offset) {
  const currentOffset = ignoreEmptyLines(input, offset)

  const [found, start, end] = parseText(input, currentOffset)

  if (found) {
    const summary = input.slice(start, end)

    return [true, start, end, { summary }]
  }

  return [false]
}

function parseText (input, offset) {
  let parseResult = parsePhrase(input, offset)

  if (parseResult[FOUND]) {
    let firstWord = input.slice(parseResult[START], parseResult[RESULT])

    if (/^(given|when|then|and|but)$/i.test(firstWord)) {
      return [false]
    }

    let start = parseResult[START]
    let end = parseResult[END]

    do {
      parseResult = parsePhrase(input, ignoreEmptyLines(input, end))

      if (parseResult[FOUND]) {
        firstWord = input.slice(parseResult[START], parseResult[RESULT])

        if (!/^(given|when|then|and|but)$/i.test(firstWord)) {
          end = parseResult[END]
        }
      }
    } while (parseResult[FOUND] && !/^(given|when|then|and|but)$/i.test(firstWord))

    return [true, start, end]
  }

  return [false]
}

function parseTitle (input, offset) {
  const currentOffset = ignoreEmptyLines(input, offset)

  const [found, start, end] = parsePhrase(input, currentOffset)

  if (found) {
    const title = input.slice(start, end)

    return [true, start, end, { title }]
  }

  return [false]
}

function parseWord (input, offset) {
  let start = offset

  let end = ignore(input, start, /[^\s\r\n]/)

  return end > start ? end : 0
}

module.exports = {
  parse
}
