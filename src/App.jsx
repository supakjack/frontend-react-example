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
import {
  AboutProvider,
  PostsProvider,
  PostProvider,
  AppProvider
} from './contexts'
import 'bootstrap/dist/css/bootstrap.min.css'
import './plugins'
import './App.css'
import { DefaultGqlProvider } from './adapters/index'

const App = () => {
  return (
    <AppProvider>
      <Router>
        <DefaultGqlProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <AboutProvider>
                  <About />
                </AboutProvider>
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
        </DefaultGqlProvider>
      </Router>
    </AppProvider>
  )
}

export default App
