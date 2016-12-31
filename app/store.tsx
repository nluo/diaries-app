import { createStore } from 'redux'
import { userReducer } from './reducers'

console.log('user reducer is ', userReducer)
const store = createStore(userReducer)

export default store
