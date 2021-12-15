import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:8055/graphql',
  cache: new InMemoryCache()
})

export const DefaultProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
