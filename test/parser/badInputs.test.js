const { expect } = require('chai')
const parse = require('../../src/parse')

const EMPTY_INPUTS = ['', null, undefined, ' ', 'foo bar']

suite('Parser / Bad inputs', () => {
  EMPTY_INPUTS.forEach((input) => {
    test('Unrecognizable input', () => {
      expect(() => parse(input)).to.throw(`Unrecognizable input: ${input}`)
    })
  })
})
