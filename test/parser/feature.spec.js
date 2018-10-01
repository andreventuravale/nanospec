const { expect } = require('chai')
const { parse } = require('./util')

describe('Parser / Feature', () => {
  it('Parses feature with summary', () => {
    const metadata = parse(`

      Feature : Lorem ipsum
        Sed ut perspiciatis unde omnis
        At vero eos et accusamus
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        summary: 'Sed ut perspiciatis unde omnis\n        At vero eos et accusamus',
        nodes: []
      }
    )
  })

  // it('Feature description accepts any character', () => {
  // })
})
