const { expect } = require('chai')
const { parse } = require('./util')

describe('Parser / Background', () => {
  it('Parses a background with some steps', () => {
    const metadata = parse(`

      Feature : Lorem ipsum

      Background : Quis autem vel eum

        Given taque earum rerum
        And minus id quod maxime
        And et expedita distinctio
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        nodes: [
          {
            type: 'statement',
            statementType: 'background',
            title: 'Quis autem vel eum',
            nodes: [
              {
                type: 'step',
                stepType: 'given',
                text: 'taque earum rerum'
              },
              {
                type: 'step',
                stepType: 'and',
                text: 'minus id quod maxime'
              },
              {
                type: 'step',
                stepType: 'and',
                text: 'et expedita distinctio'
              }
            ]
          }
        ]
      }
    )
  })
})
