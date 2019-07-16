const {
  FOUND, START, END, RESULT,
  acceptLiteral, compose, ignoreEmptyLines, optional, parseLine
} = require('./util')

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

function parseStep (input, offset) {
  const currentOffset = ignoreEmptyLines(input, offset)

  const range = parseLine(input, currentOffset)

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

  let parseResult = parseLine(input, currentOffset)

  if (parseResult[FOUND]) {
    let firstWord = input.slice(parseResult[START], parseResult[RESULT])

    if (/^(given|when|then|and|but)$/i.test(firstWord)) {
      return [false]
    }

    let start = parseResult[START]
    let end = parseResult[END]

    do {
      parseResult = parseLine(input, ignoreEmptyLines(input, end))

      if (parseResult[FOUND]) {
        firstWord = input.slice(parseResult[START], parseResult[RESULT])

        if (!/^(given|when|then|and|but)$/i.test(firstWord)) {
          end = parseResult[END]
        }
      }
    } while (parseResult[FOUND] && !/^(given|when|then|and|but)$/i.test(firstWord))

    const summary = input.slice(start, end)

    return [true, start, end, { summary }]
  }

  return [false]
}

function parseTitle (input, offset) {
  const currentOffset = ignoreEmptyLines(input, offset)

  const [found, start, end] = parseLine(input, currentOffset)

  if (found) {
    const title = input.slice(start, end)

    return [true, start, end, { title }]
  }

  return [false]
}

module.exports = {
  parse
}
