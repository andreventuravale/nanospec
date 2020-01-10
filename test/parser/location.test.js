const { expect } = require('chai')
const { filter } = require('lodash')
const { parse } = require('./util')

suite('Parser / Location', () => {
  suite('Give access to location opaque data by means of symbols', () => {
    test('For senarios', () => {
      const metadata = parse(`
  
        Scenario : Ex nisi eu aute ea reprehenderit proident et voluptate adipisicing nostrud et in id
  
          Given Tempor labore sit anim do anim
          And Veniam ex amet pariatur Lorem eu sint
          And Qui veniam id excepteur et non pariatur consequat occaecat mollit dolore sit mollit pariatur qui
          But Velit nostrud pariatur irure fugiat et occaecat excepteur voluptate commodo amet ullamco
          When Excepteur cupidatat laborum non est
          Then Quis cillum esse incididunt magna exercitation ex consectetur duis sint aute fugiat exercitation elit
      `)

      const steps = filter(metadata.nodes, { type: 'step' })

      const { locationOf } = metadata[Symbol.for('utils')]

      expect(locationOf(steps[0])).to.eql([120, 156])
    })
  })
})
