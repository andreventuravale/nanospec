const { token, compose, list } = require('nanogram')

const empty = token('space', /\s+/)

const featureKeyword = token('feature-keyword', /feature/i)

const colon = token('colon', /:/)

const phrase = token('phrase', /[^\r\n]+/i)

function parse (input) {
  let offset = 0
  let r

  offset = empty(input, offset)[2]

  r = featureKeyword(input, offset)

  offset = r[2]

  offset = empty(input, offset)[2]

  r = colon(input, offset)

  offset = r[2]

  offset = empty(input, offset)[2]

  r = phrase(input, offset)

  const title = r[4][0]

  return {
    type: 'feature',
    title
  }
}

module.exports = {
  parse
}
