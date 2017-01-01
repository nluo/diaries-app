import { createStore } from 'redux'
import { userReducer } from './reducers'

console.log('user reducer is ', userReducer)
const store = createStore(userReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())

export default store
