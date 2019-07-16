const { expect } = require('chai')
const { parse } = require('./util')

const EMPTY_INPUTS = ['', null, undefined, ' ']

suite('Parser / Feature', () => {
  test('Parses feature with title only', () => {
    const metadata = parse(`Feature : Lorem ipsum`)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        nodes: []
      }
    )
  })

  test('Parses feature with title only and surrounded by white spaces', () => {
    const metadata = parse(`
      Feature : Lorem ipsum
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        nodes: []
      }
    )
  })

  test(`Parses feature with summary
      - The summary is trimmed;`, () => {
    const metadata = parse(`

      Feature : Lorem ipsum

        Sed ut perspiciatis unde omnis

        At vero eos et accusamus

    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        summary: `Sed ut perspiciatis unde omnis

        At vero eos et accusamus`,
        nodes: []
      }
    )
  })

  EMPTY_INPUTS.forEach(input => {
    test(`Returns undefined for "${input}" input`, () => {
      const metadata = parse(input)

      expect(metadata).to.deep.eql(undefined)
    })
  })

  // test('Feature description accepts any character', () => {
  // })
})
