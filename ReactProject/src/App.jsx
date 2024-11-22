
import './App.css'
import store from './Store/store'
import Router from './components/Router'
import { Provider } from 'react-redux'
function App() {

  return (
    <>
    <Provider store={store}>
    <Router></Router>
    </Provider>
    </>
  )
}

export default App
