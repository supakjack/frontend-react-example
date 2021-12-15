import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
  NotFound,
  Translate
} from './pages'
import { Footer, Navigation } from './components'
import { AboutProvider, PostsProvider, PostProvider } from './contexts'
import 'bootstrap/dist/css/bootstrap.min.css'
import './plugins'
import './App.css'

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:8055/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <ApolloProvider client={client}>
              <AboutProvider>
                <About />
              </AboutProvider>
            </ApolloProvider>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/blog" element={<Blog />}>
          <Route
            path=""
            element={
              <PostsProvider>
                <Posts />
              </PostsProvider>
            }
          />
          <Route
            path=":postSlug"
            element={
              <PostProvider>
                <Post />
              </PostProvider>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
