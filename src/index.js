require('dotenv').config()

const { GraphQLClient } = require('graphql-request')

const getLicense = async () => {
  const client = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  })

  const query = `
  {
    licenses {
      name
      url
      body
      key
    }
  }`
  const res = await client.request(query)
  // If you put a thousand monkeys at a thousand typewriters, eventually you'll get a license worth reading.
  return res.licenses[Math.floor(Math.random()*res.licenses.length)]
}

module.exports = { getLicense }
