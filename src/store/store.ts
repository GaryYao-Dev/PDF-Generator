import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './dataSlice'
import footerSlice from './footerSlice'

const store = configureStore({
  reducer: {
    data: dataReducer,
    footer: footerSlice.reducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
