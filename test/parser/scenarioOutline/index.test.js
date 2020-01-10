const { expect } = require('chai')
const { parse } = require('../util')

suite.skip('Parser / Scenario Outline', () => {
  test('Parses a scenario outline with some steps', () => {
    const metadata = parse(`

      Scenario Outline : Magna ut irure id pariatur est esse in magna adipisicing est labore in quis

        Given Sit minim culpa laboris fugiat irure qui
        When Do in incididunt pariatur sint ad occaecat pariatur
        Then Non in laboris eiusmod veniam incididunt ullamco reprehenderit reprehenderit ad ut adipisicing deserunt
        And Laborum sint fugiat ad sit exercitation
    `)

    expect(metadata).to.deep.eql({
      type: 'statement',
      subtype: 'scenario',
      modifier: 'outline',
      title: 'Magna ut irure id pariatur est esse in magna adipisicing est labore in quis',
      nodes: [
        {
          type: 'step',
          subtype: 'given',
          text: 'Sit minim culpa laboris fugiat irure qui',
          fullText: 'Given Sit minim culpa laboris fugiat irure qui'
        },
        {
          type: 'step',
          subtype: 'when',
          text: 'Do in incididunt pariatur sint ad occaecat pariatur',
          fullText: 'When Do in incididunt pariatur sint ad occaecat pariatur'
        },
        {
          type: 'step',
          subtype: 'then',
          text: 'Non in laboris eiusmod veniam incididunt ullamco reprehenderit reprehenderit ad ut adipisicing deserunt',
          fullText: 'Then Non in laboris eiusmod veniam incididunt ullamco reprehenderit reprehenderit ad ut adipisicing deserunt'
        },
        {
          type: 'step',
          subtype: 'and',
          text: 'Laborum sint fugiat ad sit exercitation',
          fullText: 'And Laborum sint fugiat ad sit exercitation'
        }
      ]
    })
  })
})
