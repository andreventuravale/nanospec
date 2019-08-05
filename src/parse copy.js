const {
  VALID, START, END, DATA,

  compose,

  ignoreComment,
  ignoreEmptyLines,
  packet,
  parseLine,
  parseLiteral,
  parseNonSpace,
  parseWord,
  recognizeSpace
} = require('./util')

const parseColon = parseLiteral(':')

const parseBackgroundWord = parseWord(
  'background', 'BACKGROUND',
  {
    type: 'statement',
    subtype: 'background'
  }
)

const parseScenarioWord = parseWord(
  'scenario', 'SCENARIO',
  {
    type: 'statement',
    subtype: 'scenario'
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
    subtype: 'example'
  }
)

const parseFeatureWord = parseWord(
  'feature', 'FEATURE',
  {
    type: 'feature'
  }
)

// function _parseStep (input, offset) {
//   const start = ignoreEmptyLines(input, offset)

//   const parseLineResult = parseLine(input, start)

//   if (parseLineResult[VALID]) {
//     const firstToken = input.slice(parseLineResult[START], parseLineResult[DATA])

//     if (/^(given|when|then|and|but)/i.test(firstToken)) {
//       const type = 'step'
//       const subtype = input.slice(parseLineResult[START], parseLineResult[DATA]).toLowerCase()
//       const text = input.slice(parseLineResult[DATA], parseLineResult[END]).trim()
//       const fullText = input.slice(parseLineResult[START], parseLineResult[END])

//       return packet(
//         true,
//         parseLineResult[START],
//         parseLineResult[END],
//         {
//           type, subtype, text, fullText
//         }
//       )
//     }
//   }

//   return packet(false)
// }

const parseStep = compose(
  ({ emit, many, reduce, spaces }) => {
    emit(
      reduce(
        many(parseNonSpace, spaces),
        (result, word) => `${result} ${word.fullText}`.trim(),
        ''
      )
    )
  }
)

const parseSteps = compose(
  ({ emit, many, newLines, reduce }) => {
    emit(
      reduce(
        many(parseStep, newLines),
        (result, node) => {
          result.nodes.push({
            fullText: node
          })
          return result
        },
        { nodes: [] }
      )
    )
  }
)

const parseBackground = compose(({ emit, standard }) => {
  emit(standard(parseBackgroundWord))
  emit(standard(parseColon))
  emit(standard(parseTitle))
  emit(standard(parseSteps))
})

const parseScenario = compose(({ emit, optional, standard }) => {
  emit(standard(parseScenarioWord))
  emit(standard(parseColon))
  emit(standard(parseTitle))
  emit(standard(optional(parseSummary)))
  emit(standard(parseSteps))
})

// function _parseSteps (input, offset) {
//   const nodes = []

//   let parseStepResult = parseStep(input, offset)

//   if (parseStepResult[VALID]) {
//     const first = parseStepResult
//     let last = first

//     do {
//       last = parseStepResult

//       nodes.push(last[DATA])

//       parseStepResult = parseStep(input, parseStepResult[END])
//     } while (parseStepResult[VALID])

//     return packet(true, first[START], last[END], { nodes })
//   }

//   return packet(false)
// }

const parseScenarioOutline = compose(({ emit, passthrough, standard }) => {
  emit(standard(parseScenarioWord))
  emit(passthrough(parseSpace))
  emit(standard(parseOutlineWord))
  emit(standard(parseColon))
  emit(standard(parseTitle))
  emit(standard(parseSteps))
})

const parseExample = compose(({ emit, optional, standard }) => {
  emit(standard(parseExampleWord))
  emit(standard(parseColon))
  emit(standard(parseTitle))
  emit(standard(optional(parseSummary)))
  emit(standard(parseSteps))
})

const parseFeature = compose(({ emit, optional, standard }) => {
  emit(standard(parseFeatureWord))
  emit(standard(parseColon))
  emit(standard(parseTitle))
  emit(standard(optional(parseSummary)))
})

function parse (input) {
  let offset = ignoreEmptyLines(input, 0)

  offset = ignoreComment(input, offset)

  offset = ignoreEmptyLines(input, offset)

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

function parseSpace (input, offset) {
  const nextOffset = recognizeSpace(input, offset)

  return packet(nextOffset > offset, offset, nextOffset)
}

function parseSummary (input, offset) {
  const data = []
  let start = offset
  let end = start
  let parseLineResult = parseLine(input, start)

  if (parseLineResult[VALID]) {
    let firstToken = input.slice(parseLineResult[START], parseLineResult[DATA])

    if (/^(given|when|then|and|but)$/i.test(firstToken)) { return packet(false) }

    start = parseLineResult[START]
    end = parseLineResult[END]

    do {
      data.push(input.slice(parseLineResult[START], parseLineResult[END]))

      parseLineResult = parseLine(input, end)

      if (parseLineResult[VALID]) {
        firstToken = input.slice(parseLineResult[START], parseLineResult[DATA])

        if (!/^(given|when|then|and|but)$/i.test(firstToken)) {
          end = parseLineResult[END]
        }
      }
    } while (parseLineResult[VALID] && !/^(given|when|then|and|but)$/i.test(firstToken))

    const summary = data.map(text => ({ type: 'text', text }))

    return packet(true, start, end, { summary })
  }

  return packet(false)
}

function parseTitle (input, offset) {
  const parseLineResult = parseLine(input, offset)

  if (parseLineResult[VALID]) {
    const title = input.slice(parseLineResult[START], parseLineResult[END])

    return packet(true, parseLineResult[START], parseLineResult[END], { title })
  }

  return packet(false)
}

module.exports = {
  parse
}
