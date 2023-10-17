import {createStore , combineReducers, applyMiddleware } from 'redux'
import {dataReducer,useReducer,loaderReducer} from '../reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    myProducts:dataReducer,
    user: useReducer,
    isLoading:loaderReducer,
})

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)


