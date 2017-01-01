import { createStore } from 'redux'
import { userReducer } from './reducers'

const store = createStore(userReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())

export default store
