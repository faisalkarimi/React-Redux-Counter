import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import counterReducer from './redux/counterReducer'

// const initialState = {
//   counter: "0",
// }
const reducer = combineReducers({
  counter: counterReducer
})

const store = createStore(
  reducer,
  // initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store