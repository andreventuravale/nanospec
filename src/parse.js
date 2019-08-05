const {
  compose,
  list,
  optional,
  token
} = require('nanogram')

const empty = token('space', /\s+/m)

const featureKeyword = token('feature-keyword', /feature/i)

const colon = token('colon', /:/)

const phrase = token('phrase', /[^\r\n]+/i)

const text = list('text', phrase, empty)

const feature = compose('feature',
  empty,
  featureKeyword,
  empty,
  colon,
  empty,
  phrase,
  empty,
  optional(text)
)

function parse (input) {
  let offset = 0

  let $feature = feature(input, offset)

  let result = {
    type: 'feature',
    title: $feature.phrase[0][4][0],
    summary: $feature.text[0][4].map(i => ({
      type: 'text',
      text: i[4][0]
    }))
  }

  return result
}

module.exports = {
  parse
}
