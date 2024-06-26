import { combineReducers, configureStore } from '@reduxjs/toolkit';
import offersList from 'src/app/reducers/offers-list/offers-list-slice';
import reviewsList from 'src/app/reducers/reviews-list/reviews-list-slice';
import detailedOffer from 'src/app/reducers/detailed-offer/detailed-offer-slice';
import nearbyOffers from 'src/app/reducers/nearby-list/nearby-list-slice';
import userState from 'src/app/reducers/user/user-slice';
import favoritesOffers from 'src/app/reducers/favorites-list/favorites-list-slice';
import { createAPI } from 'src/shared/api/apiRequest';

export const api = createAPI();

const rootReducer = combineReducers({
  offersList,
  reviewsList,
  detailedOffer,
  nearbyOffers,
  userState,
  favoritesOffers,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    })
});


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
