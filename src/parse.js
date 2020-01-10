const {
  compose,
  list,
  optional,
  token
} = require('nanogram')

global.inspect = x => console.log(require('util').inspect(x, false, 100, true))

const BACKGROUND = token(Symbol.for('background'), /background/i)
const COLON = token(Symbol.for('colon'), /:/)
const FEATURE = token('feature', /feature/i)
const PHRASE = token(Symbol.for('phrase'), /(?!(?:given|when|then|and|but)[ \t])[^\s]+([ \t]+[^\s]+)*/yi)
const SCENARIO = token(Symbol.for('scenario'), /scenario/i)
const STEP = token(Symbol.for('phrase'), /(?:(given|when|then|and|but)[ \t]+)([^\r\n]+)/i)
const WS = token('ws', /\s+/ym)

const text = list(Symbol.for('text'), PHRASE, WS)

const steps = list(Symbol.for('steps'), STEP, WS)

const feature = compose('feature',
  WS,
  FEATURE,
  optional(WS),
  COLON,
  WS,
  PHRASE,
  WS,
  optional(text)
)

const scenario = compose('scenario',
  optional(WS),
  SCENARIO,
  optional(WS),
  COLON,
  optional(WS),
  PHRASE,
  optional(WS),
  /* TODO GROUP
  [choose|group|or|single](
    optional(text),
    optional(steps)
  )
  */
  optional(text),
  optional(steps)
)

const background = compose('background',
  optional(WS),
  BACKGROUND,
  optional(WS),
  COLON,
  optional(WS),
  optional(steps)
)

function transformScenario ($scenario) {
  return {
    type: 'statement',
    subtype: 'scenario',
    nodes: [
      {
        type: 'title',
        text: $scenario[Symbol.for('phrase')][0].data[0]
      },
      ...$scenario[Symbol.for('text')][0].data.map(i => ({
        type: 'summary',
        text: i.data[0]
      })),
      ...$scenario[Symbol.for('steps')][0].data.map(i => ({
        type: 'step',
        subtype: i.data[1].toLowerCase(),
        nodes: [
          { type: 'definition', text: i.data[2] },
          { type: 'token', subtype: 'keyword', text: i.data[1] }
        ]
      })),
      {
        subtype: 'keyword',
        text: $scenario[Symbol.for('scenario')][0].data[0],
        type: 'token'
      },
      {
        subtype: 'colon',
        text: $scenario[Symbol.for('colon')][0].data[0],
        type: 'token'
      }
    ]
  }
}

function transformBackground ($background) {
  return {
    type: 'statement',
    subtype: 'background',
    nodes: [
      ...$background[Symbol.for('steps')][0].data.map(i => ({
        type: 'step',
        subtype: i.data[1].toLowerCase(),
        nodes: [
          { type: 'definition', text: i.data[2] },
          { type: 'token', subtype: 'keyword', text: i.data[1] }
        ]
      })),
      {
        subtype: 'keyword',
        text: $background[Symbol.for('background')][0].data[0],
        type: 'token'
      },
      {
        subtype: 'colon',
        text: $background[Symbol.for('colon')][0].data[0],
        type: 'token'
      }
    ]
  }
}

function stripComments (input) {
  return input
    .split('\n')
    .filter(w => w.trim()[0] !== '#')
    .join('\n')
}

function parse (rawInput) {
  const input = stripComments(rawInput)

  let offset = 0

  let $feature = feature(input, offset)

  if ($feature.found) {
    return {
      type: 'feature',
      title: $feature[Symbol.for('phrase')][0].data[0],
      summary: $feature[Symbol.for('text')][0].data.map(i => ({
        type: 'text',
        text: i.data[0]
      }))
    }
  }

  let $background = background(input, offset)

  if ($background.found) {
    return transformBackground($background)
  }

  let $scenario = scenario(input, offset)

  if ($scenario.found) {
    return transformScenario($scenario)
  }
}

module.exports = {
  parse
}
