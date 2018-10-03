const { expect } = require('chai')
const { parse } = require('./util')

const EMPTY_INPUTS = ['', null, undefined, ' ']

describe('Parser / Feature', () => {
  it('Parses feature with title only', () => {
    const metadata = parse(`Feature : Lorem ipsum`)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        nodes: []
      }
    )
  })

  it('Parses feature with title only and surrounded by white spaces', () => {
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

  it(`Parses feature with summary
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
    it(`Returns undefined for "${input}" input`, () => {
      const metadata = parse(input)

      expect(metadata).to.deep.eql(undefined)
    })
  })

  // it('Feature description accepts any character', () => {
  // })
})
