const { expect } = require('chai')
const { parse } = require('./util')

suite('Parser / Example', () => {
  test('Parses a example with some steps', () => {
    const metadata = parse(`

      Feature : Lorem ipsum

      Example : Quis autem vel eum

        Given taque earum rerum
        When minus id quod maxime
        Then et expedita distinctio
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        nodes: [
          {
            type: 'statement',
            statementType: 'example',
            title: 'Quis autem vel eum',
            nodes: [
              {
                type: 'step',
                stepType: 'given',
                text: 'taque earum rerum'
              },
              {
                type: 'step',
                stepType: 'when',
                text: 'minus id quod maxime'
              },
              {
                type: 'step',
                stepType: 'then',
                text: 'et expedita distinctio'
              }
            ]
          }
        ]
      }
    )
  })
})
