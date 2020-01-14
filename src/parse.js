const { compose, list, optional, token } = require('nanogram')

const BACKGROUND = token('BACKGROUND', /background/yi)()
const CELL = token('CELL', / *[^|\n]+ */y)()
const COLON = token('COLON', /:/y)()
const FEATURE = token('FEATURE', /feature/yi)()
const NL = token('NL', /\n/ym)()
const PHRASE = token('PHRASE', /(?!(?:given|when|then|and|but) )[^\s]+(?:[ \t]+[^\s]+)*/yi)()
const PIPE = token('PIPE', / *(\|) */y)()
const SCENARIO = token('SCENARIO', /(?:scenario|example)/yi)()
const STEP = token('STEP', /(?:(given|when|then|and|but) )([^\n]+)/yi)()
const TAG = token('TAG', /@\w+/yi)()
const WS = token('WS', /\s+/ym)()

const row = compose('row',
  PIPE,
  list('rowcontent', CELL, PIPE),
  PIPE
)()

const table = compose('table',
  NL,
  list('tablecontent', row, NL)
)()

const step = compose('step',
  STEP,
  optional(table)
)()

const steps = list('steps', step, WS)(
  list => list.map(
    ({ data: { STEP: { $1, $2 } } }) => ({
      'type': 'step',
      'subtype': $1.toLowerCase(),
      'nodes': [
        {
          'type': 'definition',
          'text': $2
        },
        {
          'type': 'token',
          'subtype': 'keyword',
          'text': $1
        }
      ]
    })
  )
)

const tags = list('tags', TAG, WS)(
  list => list.map(
    ({ data }) => ({
      'type': 'tag',
      'text': data
    })
  )
)

const summary = list('summary', PHRASE, WS)(
  list => list.map(
    ({ data }) => ({
      'type': 'summary',
      'text': data
    })
  )
)

const background = compose('background',
  optional(WS),
  BACKGROUND,
  optional(WS),
  COLON,
  optional(WS),
  optional(PHRASE),
  optional(WS),
  optional(summary),
  optional(WS),
  optional(steps)
)((data) => {
  const { PHRASE = false, BACKGROUND, COLON, summary = [], steps = [] } = data

  return ({
    'type': 'statement',
    'subtype': 'background',
    'nodes': [
      PHRASE && {
        'type': 'title',
        'text': PHRASE
      },
      ...summary,
      ...steps,
      {
        'type': 'token',
        'subtype': 'keyword',
        'text': BACKGROUND
      },
      {
        'type': 'token',
        'subtype': 'colon',
        'text': COLON
      }
    ].filter(valid => valid)
  })
})

const scenario = compose('scenario',
  optional(WS),
  SCENARIO,
  optional(WS),
  COLON,
  optional(WS),
  PHRASE,
  optional(WS),
  optional(summary),
  optional(WS),
  optional(steps)
)((data) => {
  const { PHRASE, SCENARIO, COLON, summary = [], steps = [] } = data

  return ({
    'type': 'statement',
    'subtype': 'scenario',
    'nodes': [
      {
        'type': 'title',
        'text': PHRASE
      },
      ...summary,
      ...steps,
      {
        'type': 'token',
        'subtype': 'keyword',
        'text': SCENARIO
      },
      {
        'type': 'token',
        'subtype': 'colon',
        'text': COLON
      }
    ]
  })
})

const feature = compose('feature',
  optional(WS),
  optional(tags),
  optional(WS),
  FEATURE,
  optional(WS),
  COLON,
  WS,
  PHRASE,
  WS,
  optional(summary)
)((data) => {
  const { tags = [], PHRASE, FEATURE, COLON, summary = [] } = data

  return ({
    'type': 'statement',
    'subtype': 'feature',
    'nodes': [
      ...tags,
      {
        'type': 'title',
        'text': PHRASE
      },
      ...summary,
      {
        'type': 'token',
        'subtype': 'keyword',
        'text': FEATURE
      },
      {
        'type': 'token',
        'subtype': 'colon',
        'text': COLON
      }
    ]
  })
})

function stripComments (input) {
  return input
    .split('\n')
    .filter(w => w.trim()[0] !== '#')
    .join('\n')
}

function parse (rawInput) {
  const input = stripComments(rawInput)

  const offset = 0

  const $background = background(input, offset)

  if ($background.found) {
    return $background.data
  }

  const $scenario = scenario(input, offset)

  if ($scenario.found) {
    return $scenario.data
  }

  const $feature = feature(input, offset)

  if ($feature.found) {
    return $feature.data
  }
}

module.exports = parse
