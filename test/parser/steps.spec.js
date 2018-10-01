const { expect } = require('chai')
const { parse } = require('./util')

describe('Parser / Steps', () => {
  it('Parses "given" steps with ands and a but', () => {
    const metadata = parse(`

      Feature : Lorem ipsum

      Scenario : Quis autem vel eum

        Given taque earum rerum
        And taque
        And earum
        But rerum
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
              { type: 'step', stepType: 'and', text: 'taque' },
              { type: 'step', stepType: 'and', text: 'earum' },
              { type: 'step', stepType: 'but', text: 'rerum' },
              { type: 'step', stepType: 'when', text: 'minus id quod maxime' },
              { type: 'step', stepType: 'then', text: 'et expedita distinctio' }
            ]
          }
        ]
      }
    )
  })

  it('Parses "when" steps with ands and a but', () => {
    const metadata = parse(`

      Feature : Lorem ipsum

      Scenario : Quis autem vel eum

        Given taque earum rerum
        When minus id quod maxime
        And taque
        And earum
        But rerum
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
              { type: 'step', stepType: 'and', text: 'taque' },
              { type: 'step', stepType: 'and', text: 'earum' },
              { type: 'step', stepType: 'but', text: 'rerum' },
              { type: 'step', stepType: 'then', text: 'et expedita distinctio' }
            ]
          }
        ]
      }
    )
  })

  it('Parses "then" steps with ands and a but', () => {
    const metadata = parse(`

      Feature : Lorem ipsum

      Scenario : Quis autem vel eum

        Given taque earum rerum
        When minus id quod maxime
        Then et expedita distinctio
        And taque
        And earum
        But rerum
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
              { type: 'step', stepType: 'then', text: 'et expedita distinctio' },
              { type: 'step', stepType: 'and', text: 'taque' },
              { type: 'step', stepType: 'and', text: 'earum' },
              { type: 'step', stepType: 'but', text: 'rerum' }
            ]
          }
        ]
      }
    )
  })
})
