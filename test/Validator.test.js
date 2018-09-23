const _ = require('lodash')
const { expect } = require('chai')
const Parser = require('../src/Parser')

function parse (text) {
  const parser = new Parser(text)

  const metadata = parser.parse(text)

  // console.log(JSON.stringify(metadata, 0, 2))

  return metadata
}

function findStep (scenario, stepType) {
  const step = _.find(scenario.nodes, {
    type: 'step',
    stepType
  })

  const found = !_.isUndefined(step)

  return { found, step }
}

function validateHasStep (scenario, stepType, errors) {
  const { found } = findStep(scenario, stepType)

  if (!found) {
    errors.push(`The scenario "${scenario.title}" does not have a "${stepType}" step.`)
  }
}

function validate (metadata) {
  const scenario = _.find(metadata.nodes, {
    type: 'statement',
    statementType: 'scenario'
  })

  const errors = []

  validateHasStep(scenario, 'given', errors)
  validateHasStep(scenario, 'when', errors)
  validateHasStep(scenario, 'then', errors)

  return errors
}

describe('Validator', () => {
  it('No "given" step found', () => {
    const metadata = parse(`
      Feature : A
      Scenario : B
      When C
      Then D
    `)

    const errors = validate(metadata)

    expect(errors).to.deep.eql([
      'The scenario "B" does not have a "given" step.'
    ])
  })

  it('No "when" step found', () => {
    const metadata = parse(`
      Feature : A
      Scenario : B
      Given C
      Then D
    `)

    const errors = validate(metadata)

    expect(errors).to.deep.eql([
      'The scenario "B" does not have a "when" step.'
    ])
  })

  it('No "then" step found', () => {
    const metadata = parse(`
      Feature : A
      Scenario : B
      Given C
      When D
    `)

    const errors = validate(metadata)

    expect(errors).to.deep.eql([
      'The scenario "B" does not have a "then" step.'
    ])
  })
})
