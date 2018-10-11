
const { expect } = require('chai')
const nock = require('nock')

nock.disableNetConnect()

const {getLicense} = require('..')

describe('getLicense', function(){

  it('rejects when GITHUB_TOKEN isnt set', async function(){
    const orig = process.env.GITHUB_TOKEN
    process.env.GITHUB_TOKEN = ''

    try {
      await getLicense()
    } catch (err) {
      expect(err.message).to.have.string('GITHUB_TOKEN')
      process.env.GITHUB_TOKEN = orig
      return;
    }
    throw new Error('Unexpected lack of errors.')

  })

  it('uses Github API v4 to retrieve licenses', async function(){
    // Intercept and fake a reply to an expected GraphQL request
    nock('https://api.github.com/').post(/graphql/).reply(200, {
      data: {
        licenses: [{
          name: 'Hello Kitty License',
          url: 'https://localhost/',
          body: 'Lorem ipsum',
          key: 'hell-kitt'
        }]
      }
    })
    const license = await getLicense()
    expect(Object.keys(license)).to.include.members(['name','body'])
  })

  it('resolves with a single license')
})

describe('CLI', function(){
  it('allows --token to override ENV')

  it('writes to LICENSE file')
})
