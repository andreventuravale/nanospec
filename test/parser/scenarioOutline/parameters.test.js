const { expect } = require('chai')
const { parse } = require('../util')

suite.skip('Parser / Parameters', () => {
  test('Parses many parameters having same name', () => {
    const metadata = parse(`

      Feature : Ut enim ad minima veniam

      Scenario Outline : Ut enim ad minima veniam

        Given Nemo enim <ipsam> voluptatem
        When Sed quia <non> <non> <non> numquam eius
        Then Ut enim ad <minima> veniam
        And Architecto beatae vitae
    `)

    expect(metadata).to.deep.eql({
      type: 'feature',
      title: 'Ut enim ad minima veniam',
      nodes: [
        {
          type: 'statement',
          subtype: 'scenario',
          modifier: 'outline',
          title: 'Ut enim ad minima veniam',
          nodes: [
            {
              type: 'step',
              subtype: 'given',
              text: 'Nemo enim <ipsam> voluptatem',
              nodes: [
                { type: 'parameter', name: 'ipsam' }
              ]
            },
            {
              type: 'step',
              subtype: 'when',
              text: 'Sed quia <non> <non> <non> numquam eius',
              nodes: [
                { type: 'parameter', name: 'non' },
                { type: 'parameter', name: 'non' },
                { type: 'parameter', name: 'non' }
              ]
            },
            {
              type: 'step',
              subtype: 'then',
              text: 'Ut enim ad <minima> veniam',
              nodes: [
                { type: 'parameter', name: 'minima' }
              ]
            },
            {
              type: 'step',
              subtype: 'and',
              text: 'Architecto beatae vitae'
            }
          ]
        }
      ]
    })
  })
})
