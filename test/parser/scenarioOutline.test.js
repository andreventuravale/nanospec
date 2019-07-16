const { expect } = require('chai')
const { parse } = require('./util')

suite('Parser / Scenario Outline', () => {
  test('Parses a scenario outline with some steps', () => {
    const metadata = parse(`

      Feature : Ut enim ad minima veniam

      Scenario Outline: Ut enim ad minima veniam

        Given Nemo enim ipsam voluptatem
        When Sed quia non numquam eius
        Then Ut enim ad minima veniam
        And Architecto beatae vitae
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'feature',
        title: 'Ut enim ad minima veniam',
        nodes: [
          {
            type: 'statement',
            statementType: 'scenario',
            modifier: 'outline',
            title: 'Ut enim ad minima veniam',
            nodes: [
              {
                type: 'step',
                stepType: 'given',
                text: 'Nemo enim ipsam voluptatem'
              },
              {
                type: 'step',
                stepType: 'when',
                text: 'Sed quia non numquam eius'
              },
              {
                type: 'step',
                stepType: 'then',
                text: 'Ut enim ad minima veniam'
              },
              {
                type: 'step',
                stepType: 'and',
                text: 'Architecto beatae vitae'
              }
            ]
          }
        ]
      }
    )
  })
})
