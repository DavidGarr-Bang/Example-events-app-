import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favorites";
import datesReducer from "../reducers/dates";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    date: datesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
