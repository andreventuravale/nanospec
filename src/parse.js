const {
  compose,
  list,
  optional,
  token
} = require('nanogram')

const COLON = token('colon', /:/)
const WS = token('ws', /\s+/m)
const FEATURE = token('feature', /feature/i)
const PHRASE = token('phrase', /[^\r\n]+/i)

const text = list('text', PHRASE, WS)

const feature = compose('feature',
  WS,
  FEATURE,
  WS,
  COLON,
  WS,
  PHRASE,
  WS,
  optional(
    text
  )
)

function parse (input) {
  let offset = 0

  let $feature = feature(input, offset)

  let result = {
    type: 'feature',
    title: $feature.$phrase[0].data[0],
    summary: $feature.$text[0].data.map(i => ({
      type: 'text',
      text: i.data[0]
    }))
  }

  return result
}

module.exports = {
  parse
}
