const { expect } = require('chai')
const { parse } = require('./util')

suite('Parser / Comments', () => {
  suite('Comments are ignored', () => {
    test('Before a feature', () => {
      const metadata = parse(`
      
        # Sit ad voluptate aute aute eiusmod sint tempor voluptate eu sint quis magna ipsum.

        Feature : Culpa pariatur ipsum cillum laboris consequat sint ipsum
      `)

      expect(metadata).to.deep.eql({
        type: 'feature',
        title: 'Culpa pariatur ipsum cillum laboris consequat sint ipsum'
      })
    })

    test('Right after a feature title', () => {
      const metadata = parse(`

        Feature : Culpa pariatur ipsum cillum laboris consequat sint ipsum

          # Sit ad voluptate aute aute eiusmod sint tempor voluptate eu sint quis magna ipsum.

          Anim ex qui pariatur magna aliquip.
          Lorem ut velit velit voluptate dolore ea laboris culpa.
          Nulla anim culpa consequat elit tempor in esse aute nostrud consequat laborum.
      `)

      expect(metadata).to.deep.eql({
        type: 'feature',
        title: 'Culpa pariatur ipsum cillum laboris consequat sint ipsum',
        summary: [
          { type: 'text', text: 'Anim ex qui pariatur magna aliquip.' },
          { type: 'text', text: 'Lorem ut velit velit voluptate dolore ea laboris culpa.' },
          { type: 'text', text: 'Nulla anim culpa consequat elit tempor in esse aute nostrud consequat laborum.' }
        ]
      })
    })

    test('Between feature summary lines', () => {
      const metadata = parse(`

        Feature : Culpa pariatur ipsum cillum laboris consequat sint ipsum

          # Proident nostrud exercitation velit aliqua commodo ipsum consectetur eiusmod.
          # Tempor ut sit qui voluptate cillum occaecat excepteur ut amet do exercitation pariatur.

          Adipisicing ut nulla ex officia incididunt.

          # Consequat magna dolore magna elit laboris proident minim excepteur pariatur eiusmod.

          Adipisicing minim adipisicing ea tempor ad quis est ad do.
          Enim proident laborum voluptate magna dolor minim incididunt sunt.
          Exercitation est do eiusmod eu mollit dolor culpa ea nisi qui.

          # Incididunt adipisicing ex exercitation do.

          Laboris laborum occaecat enim qui officia ullamco esse.
          Fugiat ad ad id magna sint ipsum sint est eu amet.
      `)

      expect(metadata).to.deep.eql({
        type: 'feature',
        title: 'Culpa pariatur ipsum cillum laboris consequat sint ipsum',
        summary: [
          { type: 'text', text: 'Adipisicing ut nulla ex officia incididunt.' },
          { type: 'text', text: 'Adipisicing minim adipisicing ea tempor ad quis est ad do.' },
          { type: 'text', text: 'Enim proident laborum voluptate magna dolor minim incididunt sunt.' },
          { type: 'text', text: 'Exercitation est do eiusmod eu mollit dolor culpa ea nisi qui.' },
          { type: 'text', text: 'Laboris laborum occaecat enim qui officia ullamco esse.' },
          { type: 'text', text: 'Fugiat ad ad id magna sint ipsum sint est eu amet.' }
        ]
      })
    })
  })
})
