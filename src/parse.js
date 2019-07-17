const {
  VALID, START, END, DATA,

  compose,
  optional,

  ignoreEmptyLines,
  ignoreSpace,
  packet,
  parseLine,
  parseLiteral,
  parseWord
} = require('./util')

const parseColon = parseLiteral(':')

const parseBackgroundWord = parseWord(
  'background', 'BACKGROUND',
  {
    type: 'statement',
    statementType: 'background'
  }
)

const parseScenarioWord = parseWord(
  'scenario', 'SCENARIO',
  {
    type: 'statement',
    statementType: 'scenario'
  }
)

const parseOutlineWord = parseWord(
  'outline', 'OUTLINE',
  {
    modifier: 'outline'
  }
)

const parseExampleWord = parseWord(
  'example', 'EXAMPLE',
  {
    type: 'statement',
    statementType: 'example'
  }
)

const parseFeatureWord = parseWord(
  'feature', 'FEATURE',
  {
    type: 'feature'
  }
)

const parseBackground = compose(
  parseBackgroundWord,
  parseColon,
  parseTitle,
  parseSteps
)

const parseScenario = compose(
  parseScenarioWord,
  parseColon,
  parseTitle,
  optional(
    parseSummary
  ),
  parseSteps
)

function parse (input) {
  const offset = ignoreEmptyLines(input, 0)

  const parseFeatureResult = parseFeature(input, offset)
  if (parseFeatureResult[VALID]) { return parseFeatureResult[DATA] }

  const parseScenarioResult = parseScenario(input, offset)
  if (parseScenarioResult[VALID]) { return parseScenarioResult[DATA] }

  const parseScenarioOutlineResult = parseScenarioOutline(input, offset)
  if (parseScenarioOutlineResult[VALID]) { return parseScenarioOutlineResult[DATA] }

  const parseExampleResult = parseExample(input, offset)
  if (parseExampleResult[VALID]) { return parseExampleResult[DATA] }

  const parseBackgroundResult = parseBackground(input, offset)
  if (parseBackgroundResult[VALID]) { return parseBackgroundResult[DATA] }

  return undefined
}

const parseScenarioOutline = compose(
  parseScenarioWord,
  parseSpace,
  parseOutlineWord,
  parseColon,
  parseTitle,
  optional(
    parseSummary
  ),
  parseSteps
)

const parseExample = compose(
  parseExampleWord,
  parseColon,
  parseTitle,
  optional(
    parseSummary
  ),
  parseSteps
)

const parseFeature = compose(
  parseFeatureWord,
  parseColon,
  parseTitle,
  parseSummary
)

function parseSpace (input, offset) {
  const nextOffset = ignoreSpace(input, offset)

  return packet(nextOffset > offset, offset, nextOffset)
}

function parseStep (input, offset) {
  const start = ignoreEmptyLines(input, offset)

  const parseLineResult = parseLine(input, start)

  if (parseLineResult[VALID]) {
    const firstToken = input.slice(parseLineResult[START], parseLineResult[DATA])

    if (/^(given|when|then|and|but)/i.test(firstToken)) {
      const type = 'step'
      const stepType = input.slice(parseLineResult[START], parseLineResult[DATA]).toLowerCase()
      const text = input.slice(parseLineResult[DATA], parseLineResult[END]).trim()
      const fullText = input.slice(parseLineResult[START], parseLineResult[END])

      return packet(
        true,
        parseLineResult[START],
        parseLineResult[END],
        { type, stepType, text, fullText }
      )
    }
  }

  return packet(false)
}

function parseSteps (input, offset) {
  const nodes = []

  let parseStepResult = parseStep(input, offset)

  if (parseStepResult[VALID]) {
    let first = parseStepResult[DATA]
    let last = first

    do {
      last = parseStepResult[DATA]

      nodes.push(parseStepResult[DATA])

      parseStepResult = parseStep(input, parseStepResult[END])
    } while (parseStepResult[VALID])

    return packet(true, first[START], last[END], { nodes })
  }

  return packet(false)
}

function parseSummary (input, offset) {
  let start = ignoreEmptyLines(input, offset)
  let end = start
  let parseLineResult = parseLine(input, start)

  if (parseLineResult[VALID]) {
    let firstToken = input.slice(parseLineResult[START], parseLineResult[DATA])

    if (/^(given|when|then|and|but)$/i.test(firstToken)) { return packet(false) }

    start = parseLineResult[START]
    end = parseLineResult[END]

    do {
      parseLineResult = parseLine(input, ignoreEmptyLines(input, end))

      if (parseLineResult[VALID]) {
        firstToken = input.slice(parseLineResult[START], parseLineResult[DATA])

        if (!/^(given|when|then|and|but)$/i.test(firstToken)) { end = parseLineResult[END] }
      }
    } while (parseLineResult[VALID] && !/^(given|when|then|and|but)$/i.test(firstToken))

    const summary = input.slice(start, end)

    return packet(true, start, end, { summary })
  }

  return packet(false)
}

function parseTitle (input, offset) {
  const start = ignoreEmptyLines(input, offset)

  const parseLineResult = parseLine(input, start)

  if (parseLineResult[VALID]) {
    const title = input.slice(parseLineResult[START], parseLineResult[END])

    return packet(true, parseLineResult[START], parseLineResult[END], { title })
  }

  return packet(false)
}

module.exports = {
  parse
}
