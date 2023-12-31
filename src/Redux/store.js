import { legacy_createStore as createstore, applyMiddleware} from 'redux'
import { reducer } from './reducer'

import {thunk} from 'redux-thunk'


const store = createstore(reducer, applyMiddleware(thunk))

export default store;