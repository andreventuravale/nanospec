const { token, compose, list } = require('nanogram')

const empty = token('space', /\s+/)

const featureKeyword = token('feature-keyword', /feature/i)

const colon = token('colon', /:/)

const phrase = token('phrase', /[^\r\n]+/i)

function parse (input) {
  let offset = 0
  let temp

  offset = empty(input, offset)[2]

  temp = featureKeyword(input, offset)
  offset = temp[2]
  offset = empty(input, offset)[2]

  temp = colon(input, offset)
  offset = temp[2]
  offset = empty(input, offset)[2]

  temp = phrase(input, offset)
  offset = temp[2]
  offset = empty(input, offset)[2]

  const title = temp[4][0]

  const summary = []

  temp = phrase(input, offset)

  while (temp[0]) {
    summary.push({ type: 'text', text: temp[4][0] })
    offset = temp[2]
    offset = empty(input, offset)[2]
    temp = phrase(input, offset)
  }

  const result = {
    type: 'feature',
    title
  }

  if (summary.length) {
    result.summary = summary
  }

  return result
}

module.exports = {
  parse
}
