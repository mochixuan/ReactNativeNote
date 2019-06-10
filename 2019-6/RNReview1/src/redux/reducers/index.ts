import storage from '@react-native-community/async-storage'
import { persistCombineReducers, persistReducer } from 'redux-persist'
import { user } from './user'

const userConfig = {
  key: 'user',
  storage
}

const routeConfig = {
  key: 'root',
  version: 1,
  storage
}

const allReducers = persistCombineReducers(routeConfig, {
  user: persistReducer(userConfig, user)
})                   

export { allReducers }
