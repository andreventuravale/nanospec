const { expect } = require('chai')
const { parse } = require('./util')

suite('Parser / Steps', () => {
  test('Parses "given" steps with ands and a but', () => {
    const metadata = parse(`

      Scenario: Ex nisi eu aute ea reprehenderit proident et voluptate adipisicing nostrud et in id

        Given Tempor labore sit anim do anim
        And Veniam ex amet pariatur Lorem eu sint
        And Qui veniam id excepteur et non pariatur consequat occaecat mollit dolore sit mollit pariatur qui
        But Velit nostrud pariatur irure fugiat et occaecat excepteur voluptate commodo amet ullamco
        When Excepteur cupidatat laborum non est
        Then Quis cillum esse incididunt magna exercitation ex consectetur duis sint aute fugiat exercitation elit
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'statement',
        statementType: 'scenario',
        title: 'Ex nisi eu aute ea reprehenderit proident et voluptate adipisicing nostrud et in id',
        nodes: [
          { type: 'step', stepType: 'given', text: 'Tempor labore sit anim do anim', fullText: 'Given Tempor labore sit anim do anim' },
          { type: 'step', stepType: 'and', text: 'Veniam ex amet pariatur Lorem eu sint', fullText: 'And Veniam ex amet pariatur Lorem eu sint' },
          { type: 'step', stepType: 'and', text: 'Qui veniam id excepteur et non pariatur consequat occaecat mollit dolore sit mollit pariatur qui', fullText: 'And Qui veniam id excepteur et non pariatur consequat occaecat mollit dolore sit mollit pariatur qui' },
          { type: 'step', stepType: 'but', text: 'Velit nostrud pariatur irure fugiat et occaecat excepteur voluptate commodo amet ullamco', fullText: 'But Velit nostrud pariatur irure fugiat et occaecat excepteur voluptate commodo amet ullamco' },
          { type: 'step', stepType: 'when', text: 'Excepteur cupidatat laborum non est', fullText: 'When Excepteur cupidatat laborum non est' },
          { type: 'step', stepType: 'then', text: 'Quis cillum esse incididunt magna exercitation ex consectetur duis sint aute fugiat exercitation elit', fullText: 'Then Quis cillum esse incididunt magna exercitation ex consectetur duis sint aute fugiat exercitation elit' }
        ]
      }
    )
  })

  test('Parses "when" steps with ands and a but', () => {
    const metadata = parse(`

      Scenario: Nulla proident id deserunt aute pariatur esse id minim non pariatur laboris

        Given Minim exercitation sunt consequat cillum nostrud sit magna id
        When Sit cillum laboris amet aute officia amet qui voluptate nisi
        And Aliqua aliquip eu et anim Lorem tempor dolore incididunt aute anim aute minim
        And Magna cupidatat do pariatur minim Lorem consectetur
        But Consectetur sit aliquip sit laboris magna irure ullamco anim in id
        Then Ea minim do exercitation deserunt quis amet nostrud et
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'statement',
        statementType: 'scenario',
        title: 'Nulla proident id deserunt aute pariatur esse id minim non pariatur laboris',
        nodes: [
          { type: 'step', stepType: 'given', text: 'Minim exercitation sunt consequat cillum nostrud sit magna id', fullText: 'Given Minim exercitation sunt consequat cillum nostrud sit magna id' },
          { type: 'step', stepType: 'when', text: 'Sit cillum laboris amet aute officia amet qui voluptate nisi', fullText: 'When Sit cillum laboris amet aute officia amet qui voluptate nisi' },
          { type: 'step', stepType: 'and', text: 'Aliqua aliquip eu et anim Lorem tempor dolore incididunt aute anim aute minim', fullText: 'And Aliqua aliquip eu et anim Lorem tempor dolore incididunt aute anim aute minim' },
          { type: 'step', stepType: 'and', text: 'Magna cupidatat do pariatur minim Lorem consectetur', fullText: 'And Magna cupidatat do pariatur minim Lorem consectetur' },
          { type: 'step', stepType: 'but', text: 'Consectetur sit aliquip sit laboris magna irure ullamco anim in id', fullText: 'But Consectetur sit aliquip sit laboris magna irure ullamco anim in id' },
          { type: 'step', stepType: 'then', text: 'Ea minim do exercitation deserunt quis amet nostrud et', fullText: 'Then Ea minim do exercitation deserunt quis amet nostrud et' }
        ]
      }
    )
  })

  test('Parses "then" steps with ands and a but', () => {
    const metadata = parse(`

      Scenario: Ad Lorem cillum cupidatat deserunt nulla Lorem officia dolore dolore irure officia ex aliquip

        Given Cupidatat labore est ipsum nostrud
        When Irure sint sit id laboris incididunt do voluptate
        Then Enim enim sit labore ut veniam
        And Do laboris ullamco nostrud dolore officia
        And Non adipisicing id sunt do qui enim consequat officia mollit eu labore irure dolor
        But Do dolore amet in ut adipisicing proident
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'statement',
        statementType: 'scenario',
        title: 'Ad Lorem cillum cupidatat deserunt nulla Lorem officia dolore dolore irure officia ex aliquip',
        nodes: [
          { type: 'step', stepType: 'given', text: 'Cupidatat labore est ipsum nostrud', fullText: 'Given Cupidatat labore est ipsum nostrud' },
          { type: 'step', stepType: 'when', text: 'Irure sint sit id laboris incididunt do voluptate', fullText: 'When Irure sint sit id laboris incididunt do voluptate' },
          { type: 'step', stepType: 'then', text: 'Enim enim sit labore ut veniam', fullText: 'Then Enim enim sit labore ut veniam' },
          { type: 'step', stepType: 'and', text: 'Do laboris ullamco nostrud dolore officia', fullText: 'And Do laboris ullamco nostrud dolore officia' },
          { type: 'step', stepType: 'and', text: 'Non adipisicing id sunt do qui enim consequat officia mollit eu labore irure dolor', fullText: 'And Non adipisicing id sunt do qui enim consequat officia mollit eu labore irure dolor' },
          { type: 'step', stepType: 'but', text: 'Do dolore amet in ut adipisicing proident', fullText: 'But Do dolore amet in ut adipisicing proident' }
        ]
      }
    )
  })
})
