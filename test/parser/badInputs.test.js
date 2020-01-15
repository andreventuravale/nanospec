const { expect } = require('chai')
const parse = require('../../src/parse')

const EMPTY_INPUTS = ['', null, undefined, ' ', 'foo bar']

suite('Parser / Bad inputs', () => {
  EMPTY_INPUTS.forEach((input) => {
    test('Unrecognizable input', () => {
      expect(() => parse(input)).to.throw(`Sorry I could not understand the gherkin:\n\n\`\`\`\n${input}\n\`\`\`\n\nI was specting a feature, background, scenario, scenario outline, example, etc.\n`)
    })
  })
})
