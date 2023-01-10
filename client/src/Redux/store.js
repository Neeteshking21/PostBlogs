import { configureStore } from '@reduxjs/toolkit'
import Auth from './Reducers/Auth/authenticated'

const store = configureStore({
  reducer : {
    Auth : Auth
  },
})

export default store;