import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './plugins'
import './App.css'
import { DefaultGqlProvider } from './adapters'

ReactDOM.render(
  <DefaultGqlProvider>
    <App />
  </DefaultGqlProvider>,
  document.getElementById('root')
)
