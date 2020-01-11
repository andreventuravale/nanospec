const { compose, list, optional, token } = require('nanogram')

const sbackground = Symbol.for('background')
const scolon = Symbol.for('colon')
const sfeature = Symbol.for('feature')
const sfrom = Symbol.for('from')
const sphrase = Symbol.for('phrase')
const sscenario = Symbol.for('scenario')
const sstep = Symbol.for('step')
const ssteps = Symbol.for('steps')
const stags = Symbol.for('tags')
const stext = Symbol.for('text')
const sto = Symbol.for('to')
const sutils = Symbol.for('utils')

const BACKGROUND = token(sbackground, /background/i)
const COLON = token(scolon, /:/)
const FEATURE = token(sfeature, /feature/i)
const PHRASE = token(sphrase, /(?!(?:given|when|then|and|but)[ \t])[^\s]+([ \t]+[^\s]+)*/yi)
const SCENARIO = token(sscenario, /(scenario|example)/i)
const STEP = token('step', /(?:(given|when|then|and|but)[ \t]+)([^\r\n]+)/i)
const TAG = token('tag', /@\w+/i)
const WS = token('ws', /\s+/ym)

const step = compose(sstep, STEP)
const steps = list(ssteps, step, WS)
const tags = list(stags, TAG, WS)
const text = list(stext, PHRASE, WS)

const background = compose('background',
  optional(WS),
  BACKGROUND,
  optional(WS),
  COLON,
  optional(WS),
  optional(steps)
)

const scenario = compose('scenario',
  optional(WS),
  SCENARIO,
  optional(WS),
  COLON,
  optional(WS),
  PHRASE,
  optional(WS),
  optional(text),
  optional(steps)
)

const feature = compose('feature',
  WS,
  optional(tags),
  FEATURE,
  optional(WS),
  COLON,
  WS,
  PHRASE,
  WS,
  optional(text)
)

function transformBackground ($background) {
  return {
    type: 'statement',
    subtype: 'background',
    nodes: [
      ...$background[ssteps][0].data.map(i => ({
        type: 'step',
        subtype: i.data[1].toLowerCase(),
        nodes: [
          { type: 'definition', text: i.data[2] },
          { type: 'token', subtype: 'keyword', text: i.data[1] }
        ]
      })),
      {
        subtype: 'keyword',
        text: $background[sbackground][0].data[0],
        type: 'token'
      },
      {
        subtype: 'colon',
        text: $background[scolon][0].data[0],
        type: 'token'
      }
    ]
  }
}

function transformScenario ($scenario) {
  const metadata = {
    type: 'statement',
    subtype: 'scenario',
    nodes: [
      {
        type: 'title',
        text: $scenario[sphrase][0].data[0]
      },
      ...$scenario[stext][0].data.map(i => ({
        type: 'summary',
        text: i.data[0]
      })),
      ...$scenario[ssteps][0][sstep].map(i => {
        return {
          ...{
            type: 'step',
            subtype: i.data[0].data[1].toLowerCase(),
            nodes: [
              { type: 'definition', text: i.data[0].data[2] },
              { type: 'token', subtype: 'keyword', text: i.data[0].data[1] }
            ]
          },
          ...(() => {
            const hash = {}
            hash[sfrom] = i.from
            hash[sto] = i.to
            return hash
          })()
        }
      }),
      {
        subtype: 'keyword',
        text: $scenario[sscenario][0].data[0],
        type: 'token'
      },
      {
        subtype: 'colon',
        text: $scenario[scolon][0].data[0],
        type: 'token'
      }
    ]
  }

  metadata[sutils] = {
    locationOf: node => [node[sfrom], node[sto]]
  }

  return metadata
}

function transformFeature ($feature) {
  return {
    type: 'statement',
    subtype: 'feature',
    nodes: [
      {
        type: 'title',
        text: $feature[sphrase][0].data[0]
      },
      ...$feature[stext][0].data.map(i => ({
        type: 'summary',
        text: i.data[0]
      })),
      ...$feature[stags][0].data.map(i => ({
        type: 'tag',
        text: i.data[0]
      })),
      {
        subtype: 'keyword',
        text: $feature[sfeature][0].data[0],
        type: 'token'
      },
      {
        subtype: 'colon',
        text: $feature[scolon][0].data[0],
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

  const offset = 0

  const $background = background(input, offset)

  if ($background.found) {
    return transformBackground($background)
  }

  const $scenario = scenario(input, offset)

  if ($scenario.found) {
    return transformScenario($scenario)
  }

  const $feature = feature(input, offset)

  if ($feature.found) {
    return transformFeature($feature)
  }
}

module.exports = parse
