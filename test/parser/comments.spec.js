const { expect } = require('chai')
const { parse } = require('./util')

describe('Parser / Comments', () => {
  it('Ignores comment at begin of file - before feature definition', () => {
    const metadata = parse(`
      
      # comment

      Feature : Lorem ipsum
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        nodes: [
        ]
      }
    )
  })
})
