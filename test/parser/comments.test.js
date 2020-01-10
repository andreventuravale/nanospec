const { expect } = require('chai')
const { parse } = require('./util')

suite('Parser / Comments', () => {
  suite('Comments are ignored', () => {
    test.only('For features', () => {
      const metadata = parse(`
        # Lorem quis anim adipisicing aliquip aliqua culpa tempor ex cillum aute.
        # Tempor consectetur eiusmod exercitation esse deserunt aliquip voluptate.
        
        Feature : Culpa pariatur ipsum cillum laboris consequat sint ipsum
          
          # Consequat do ullamco qui cillum aliquip fugiat aliqua qui labore pariatur incididunt.
          # Occaecat voluptate labore ullamco deserunt velit duis cupidatat eu sunt enim mollit.
          Anim ex qui pariatur magna aliquip.

          # Dolor officia duis esse enim consequat sint est commodo.
          # Do eiusmod in eiusmod dolor exercitation qui cillum Lorem tempor do dolor nulla excepteur Lorem.
          Lorem ut velit velit voluptate dolore ea laboris culpa.
          
          # Consectetur culpa esse sit ex Lorem deserunt.
          # Nostrud do veniam ut irure ipsum pariatur Lorem ex nulla irure irure cupidatat labore magna.
          Nulla anim culpa consequat elit tempor in esse aute nostrud consequat laborum.
          
          # Velit duis ullamco exercitation minim in ad.
          # Aliqua adipisicing cupidatat sint elit enim consequat non eiusmod consequat irure ex ipsum velit laboris.
      `)

      expect(metadata).to.deep.eql({
        'type': 'feature',
        'title': 'Culpa pariatur ipsum cillum laboris consequat sint ipsum',
        'summary': [
          {
            'type': 'text',
            'text': 'Anim ex qui pariatur magna aliquip.'
          },
          {
            'type': 'text',
            'text': 'Lorem ut velit velit voluptate dolore ea laboris culpa.'
          },
          {
            'type': 'text',
            'text': 'Nulla anim culpa consequat elit tempor in esse aute nostrud consequat laborum.'
          }
        ]
      })
    })
  })
})
