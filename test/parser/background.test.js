const { expect } = require('chai')
const { parse } = require('./util')

suite('Parser / Background', () => {
  test('Parses a background with some steps', () => {
    const metadata = parse(`

      Background: In ipsum est id sit

        Given Voluptate consectetur irure pariatur laboris ex Lorem ipsum excepteur
        And Consectetur do anim velit sit nisi anim laboris officia culpa consequat ex ea
        And Occaecat aliquip nisi ex ipsum ullamco amet id eu nisi nulla sit id ea occaecat
    `)

    expect(metadata).to.deep.eql(
      {
        type: 'statement',
        statementType: 'background',
        title: 'In ipsum est id sit',
        nodes: [
          {
            type: 'step',
            stepType: 'given',
            text: 'Voluptate consectetur irure pariatur laboris ex Lorem ipsum excepteur',
            fullText: 'Given Voluptate consectetur irure pariatur laboris ex Lorem ipsum excepteur'
          },
          {
            type: 'step',
            stepType: 'and',
            text: 'Consectetur do anim velit sit nisi anim laboris officia culpa consequat ex ea',
            fullText: 'And Consectetur do anim velit sit nisi anim laboris officia culpa consequat ex ea'
          },
          {
            type: 'step',
            stepType: 'and',
            text: 'Occaecat aliquip nisi ex ipsum ullamco amet id eu nisi nulla sit id ea occaecat',
            fullText: 'And Occaecat aliquip nisi ex ipsum ullamco amet id eu nisi nulla sit id ea occaecat'
          }
        ]
      }
    )
  })
})
