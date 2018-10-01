const { expect } = require('chai')
const { parse } = require('./util')

describe('Parser / Scenario', () => {
  it('Parses scenario summary', () => {
    const metadata = parse(`

      Feature : Lorem ipsum
        Sed ut perspiciatis unde omnis
        At vero eos et accusamus

      Scenario : Quis autem vel eum
        Nam libero tempore
        Et harum quidem
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Lorem ipsum',
        summary: 'Sed ut perspiciatis unde omnis\n        At vero eos et accusamus',
        nodes: [
          {
            type: 'statement',
            statementType: 'scenario',
            title: 'Quis autem vel eum',
            summary: 'Nam libero tempore\n        Et harum quidem',
            nodes: [
            ]
          }
        ]
      }
    )
  })

  it('Parses a basic feature with a single scenario and some steps', () => {
    const metadata = parse(`

      Feature : Lorem ipsum

      Scenario : Quis autem vel eum

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
            statementType: 'scenario',
            title: 'Quis autem vel eum',
            nodes: [
              { type: 'step', stepType: 'given', text: 'taque earum rerum' },
              { type: 'step', stepType: 'when', text: 'minus id quod maxime' },
              { type: 'step', stepType: 'then', text: 'et expedita distinctio' }
            ]
          }
        ]
      }
    )
  })
})
