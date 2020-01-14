const {
  compose,
  list,
  noWhitespace,
  optional,
  token
} = require('nanogram')

const noWsChannel = token(noWhitespace)
const noWsVisibleChannel = noWsChannel()
const rawChannel = token()
const rawVisibleChannel = rawChannel()

const CELL = rawVisibleChannel('CELL', /[^|\n\r]*/y)(data => data.trim())
const NL = rawVisibleChannel('NL', /[\r\n]+/ym)()
const PHRASE = rawVisibleChannel('PHRASE', /[^\s]+(?:[ \t]+[^\s]+)*/yi)()
const PIPE = rawVisibleChannel('PIPE', /\|/y)()
const WS = rawVisibleChannel('WS', /[ \t]+/ym)()

const BACKGROUND = noWsVisibleChannel('BACKGROUND', /background/yi)()
const COLON = noWsVisibleChannel('COLON', /:/y)()
const FEATURE = noWsVisibleChannel('FEATURE', /feature/yi)()
const SCENARIO = noWsVisibleChannel('SCENARIO', /(?:scenario|example)/yi)()
const STEP_DEF = noWsVisibleChannel('STEP_DEF', /(?:(given|when|then|and|but) )([^\n]+)/yi)()
const TAG = noWsVisibleChannel('TAG', /@\w+/yi)()
const UNLIKE_STEP_PHRASE = noWsVisibleChannel('UNLIKE_STEP_PHRASE', /(?!(?:given|when|then|and|but) )[^\s]+(?:[ \t]+[^\s]+)*/yi)()

const rowContent = list('rowContent', CELL, PIPE)(
  list => list.map(
    CELL => {
      return {
        'type': 'cell',
        'text': CELL.data
      }
    }
  )
)

const row = compose('row',
  optional(WS),
  PIPE,
  rowContent
)(
  ({ rowContent }, { found }) => {
    return found && rowContent.slice(0, rowContent.length - 1)
  }
)

const tableBody = list('tableBody', row, NL)(
  list => list.map(
    ({ data }) => {
      return {
        'type': 'row',
        'nodes': data
      }
    }
  )
)

const table = compose('table',
  NL,
  tableBody
)(
  ({ tableBody }) => {
    return {
      'type': 'table',
      'nodes': tableBody
    }
  }
)

const step = compose('step',
  STEP_DEF,
  optional(table)
)()

const steps = list('steps', step, NL)(
  list => list.map(
    ({ data: { STEP_DEF: { $1, $2 }, table = false } }) => {
      return {
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
          },
          table
        ].filter(valid => valid)
      }
    }
  )
)

const tags = list('tags', TAG, WS)(
  list => list.map(
    ({ data }) => {
      return {
        'type': 'tag',
        'text': data
      }
    }
  )
)

const summary = list('summary', UNLIKE_STEP_PHRASE, NL)(
  list => list.map(
    ({ data }) => {
      return {
        'type': 'summary',
        'text': data
      }
    }
  )
)

const background = compose('background',
  BACKGROUND,
  COLON,
  optional(WS),
  optional(PHRASE),
  optional(summary),
  optional(steps)
)((data) => {
  const { BACKGROUND, COLON, PHRASE = false, summary = [], steps = [] } = data

  return {
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
  }
})

const scenario = compose('scenario',
  SCENARIO,
  COLON,
  optional(WS),
  PHRASE,
  optional(summary),
  optional(steps)
)((data) => {
  const { SCENARIO, COLON, PHRASE, summary = [], steps = [] } = data

  return {
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
  }
})

const feature = compose('feature',
  optional(tags),
  FEATURE,
  COLON,
  optional(WS),
  PHRASE,
  optional(summary)
)((data) => {
  const { tags = [], FEATURE, COLON, PHRASE, summary = [] } = data

  return {
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
  }
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
