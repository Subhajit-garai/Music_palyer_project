import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

const AppRedux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRedux />
  </React.StrictMode>,
)
