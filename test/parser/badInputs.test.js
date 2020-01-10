const { expect } = require('chai')
const { parse } = require('./util')

const EMPTY_INPUTS = ['', null, undefined, ' ']

suite('Parser / Bad inputs', () => {
  EMPTY_INPUTS.forEach((input) => {
    test(`Returns undefined for "${input}" input`, () => {
      const metadata = parse(input)

      expect(metadata).to.be.eql(undefined)
    })
  })
})
