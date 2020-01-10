const { expect } = require('chai')
const { parse } = require('./util')

suite.only('Parser / Steps', () => {
  test('Parses "given" steps with ands and a but', () => {
    const metadata = parse(`

      Scenario : Ex nisi eu aute ea reprehenderit proident et voluptate adipisicing nostrud et in id

        Given Tempor labore sit anim do anim
        And Veniam ex amet pariatur Lorem eu sint
        And Qui veniam id excepteur et non pariatur consequat occaecat mollit dolore sit mollit pariatur qui
        But Velit nostrud pariatur irure fugiat et occaecat excepteur voluptate commodo amet ullamco
        When Excepteur cupidatat laborum non est
        Then Quis cillum esse incididunt magna exercitation ex consectetur duis sint aute fugiat exercitation elit
    `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'scenario',
      'nodes': [
        {
          'type': 'title',
          'text': 'Ex nisi eu aute ea reprehenderit proident et voluptate adipisicing nostrud et in id'
        },
        {
          'type': 'step',
          'subtype': 'given',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Tempor labore sit anim do anim'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'Given'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'and',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Veniam ex amet pariatur Lorem eu sint'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'And'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'and',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Qui veniam id excepteur et non pariatur consequat occaecat mollit dolore sit mollit pariatur qui'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'And'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'but',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Velit nostrud pariatur irure fugiat et occaecat excepteur voluptate commodo amet ullamco'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'But'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'when',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Excepteur cupidatat laborum non est'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'When'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'then',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Quis cillum esse incididunt magna exercitation ex consectetur duis sint aute fugiat exercitation elit'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'Then'
            }
          ]
        },
        {
          'subtype': 'keyword',
          'text': 'Scenario',
          'type': 'token'
        },
        {
          'subtype': 'colon',
          'text': ':',
          'type': 'token'
        }
      ]
    })
  })

  test('Parses "when" steps with ands and a but', () => {
    const metadata = parse(`

      Scenario : Nulla proident id deserunt aute pariatur esse id minim non pariatur laboris

        Given Minim exercitation sunt consequat cillum nostrud sit magna id
        When Sit cillum laboris amet aute officia amet qui voluptate nisi
        And Aliqua aliquip eu et anim Lorem tempor dolore incididunt aute anim aute minim
        And Magna cupidatat do pariatur minim Lorem consectetur
        But Consectetur sit aliquip sit laboris magna irure ullamco anim in id
        Then Ea minim do exercitation deserunt quis amet nostrud et
    `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'scenario',
      'nodes': [
        {
          'type': 'title',
          'text': 'Nulla proident id deserunt aute pariatur esse id minim non pariatur laboris'
        },
        {
          'type': 'step',
          'subtype': 'given',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Minim exercitation sunt consequat cillum nostrud sit magna id'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'Given'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'when',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Sit cillum laboris amet aute officia amet qui voluptate nisi'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'When'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'and',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Aliqua aliquip eu et anim Lorem tempor dolore incididunt aute anim aute minim'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'And'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'and',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Magna cupidatat do pariatur minim Lorem consectetur'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'And'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'but',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Consectetur sit aliquip sit laboris magna irure ullamco anim in id'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'But'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'then',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Ea minim do exercitation deserunt quis amet nostrud et'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'Then'
            }
          ]
        },
        {
          'subtype': 'keyword',
          'text': 'Scenario',
          'type': 'token'
        },
        {
          'subtype': 'colon',
          'text': ':',
          'type': 'token'
        }
      ]
    })
  })

  test('Parses "then" steps with ands and a but', () => {
    const metadata = parse(`

      Scenario : Ad Lorem cillum cupidatat deserunt nulla Lorem officia dolore dolore irure officia ex aliquip

        Given Cupidatat labore est ipsum nostrud
        When Irure sint sit id laboris incididunt do voluptate
        Then Enim enim sit labore ut veniam
        And Do laboris ullamco nostrud dolore officia
        And Non adipisicing id sunt do qui enim consequat officia mollit eu labore irure dolor
        But Do dolore amet in ut adipisicing proident
    `)

    expect(metadata).to.deep.eql({
      'type': 'statement',
      'subtype': 'scenario',
      'nodes': [
        {
          'type': 'title',
          'text': 'Ad Lorem cillum cupidatat deserunt nulla Lorem officia dolore dolore irure officia ex aliquip'
        },
        {
          'type': 'step',
          'subtype': 'given',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Cupidatat labore est ipsum nostrud'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'Given'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'when',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Irure sint sit id laboris incididunt do voluptate'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'When'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'then',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Enim enim sit labore ut veniam'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'Then'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'and',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Do laboris ullamco nostrud dolore officia'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'And'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'and',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Non adipisicing id sunt do qui enim consequat officia mollit eu labore irure dolor'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'And'
            }
          ]
        },
        {
          'type': 'step',
          'subtype': 'but',
          'nodes': [
            {
              'type': 'definition',
              'text': 'Do dolore amet in ut adipisicing proident'
            },
            {
              'type': 'token',
              'subtype': 'keyword',
              'text': 'But'
            }
          ]
        },
        {
          'subtype': 'keyword',
          'text': 'Scenario',
          'type': 'token'
        },
        {
          'subtype': 'colon',
          'text': ':',
          'type': 'token'
        }
      ]
    })
  })
})
