import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://jonathan-wilke.prismic.io/api/v2'
export const accessToken = process.env.PRISMA_API_TOKEN

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export const prismicClient = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
