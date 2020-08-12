import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
}


type ApplicationState = {
  result: Object
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


// export default () => {
const store: Store<ApplicationState> = createStore(
  persistedReducer,
  compose<any>(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (functional: any) => functional
  )
);
export let persistor = persistStore(store)

export default store
