const { expect } = require('chai')
const { parse } = require('./util')

suite('Parser / Scenario', () => {
  test('Parses a basic scenario', () => {
    const metadata = parse(`

      Scenario: Quis autem vel eum

        Given taque earum rerum
        When minus id quod maxime
        Then et expedita distinctio
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'statement',
        statementType: 'scenario',
        title: 'Quis autem vel eum',
        nodes: [
          { type: 'step', stepType: 'given', text: 'taque earum rerum', fullText: 'Given taque earum rerum' },
          { type: 'step', stepType: 'when', text: 'minus id quod maxime', fullText: 'When minus id quod maxime' },
          { type: 'step', stepType: 'then', text: 'et expedita distinctio', fullText: 'Then et expedita distinctio' }
        ]
      }
    )
  })

  test('Parses a scenario with a summary', () => {
    const metadata = parse(`

      Scenario: Quis autem vel eum

        Qui occaecat excepteur sit minim dolor
        ipsum pariatur cupidatat officia aute nisi.

        Given taque earum rerum
        When minus id quod maxime
        Then et expedita distinctio
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'statement',
        statementType: 'scenario',
        title: 'Quis autem vel eum',
        summary: `Qui occaecat excepteur sit minim dolor
        ipsum pariatur cupidatat officia aute nisi.`,
        nodes: [
          { type: 'step', stepType: 'given', text: 'taque earum rerum', fullText: 'Given taque earum rerum' },
          { type: 'step', stepType: 'when', text: 'minus id quod maxime', fullText: 'When minus id quod maxime' },
          { type: 'step', stepType: 'then', text: 'et expedita distinctio', fullText: 'Then et expedita distinctio' }
        ]
      }
    )
  })
})
