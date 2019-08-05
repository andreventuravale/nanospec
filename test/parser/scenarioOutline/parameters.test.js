const { expect } = require('chai')
const { parse } = require('../util')

suite('Parser / Parameters', () => {
  test('Parses a scenario having parameters', () => {
    const metadata = parse(`

      Scenario Outline : Eating

        Given there are <start> cucumbers
        When I eat <eat> cucumbers
        Then I should have <left> cucumbers

        Examples :
          | start | eat | left |
          |    12 |   5 |    7 |
          |    20 |   5 |   15 |
    `)

    inspect(metadata)

    expect(metadata).to.deep.eql({
      type: 'statement',
      subtype: 'scenario',
      modifier: 'outline',
      title: 'Eating',
      nodes: [
        {
          type: 'step',
          subtype: 'given',
          text: 'there are <start> cucumbers',
          fullText: 'Given there are <start> cucumbers',
          nodes: [
            { type: 'parameter', name: 'start' }
          ]
        },
        {
          type: 'step',
          subtype: 'when',
          text: 'I eat <eat> cucumbers',
          fullText: 'When I eat <eat> cucumbers',
          nodes: [
            { type: 'parameter', name: 'eat' }
          ]
        },
        {
          type: 'step',
          subtype: 'then',
          text: 'I should have <left> cucumbers',
          fullText: 'Then I should have <left> cucumbers',
          nodes: [
            { type: 'parameter', name: 'left' }
          ]
        }
      ]
    })
  })
})
