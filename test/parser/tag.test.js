const { expect } = require('chai')
const { parse } = require('./util')

suite('Parser / Tag', () => {
  test('Parses feature level tag', () => {
    const metadata = parse(`
      @tag
      Feature : Lorem ipsum
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        tag: '@tag',
        nodes: [
        ]
      }
    )
  })
})
