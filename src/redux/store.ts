import { createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import mainReducer from "./reducers/mainReducer"

export interface IReduxStore {
  favouriteCities: {
    [key: string]: boolean
  }
}

export const initialState: IReduxStore = {
  favouriteCities: {},
}

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, mainReducer)

export const store = createStore(
  persistedReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
