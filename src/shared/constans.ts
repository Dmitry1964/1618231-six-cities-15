export enum AutorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unkhown = 'ANKHNOWN'
}

export enum AppRoutes {
  Main = '/',
  Offer = '/offer',
  Favorites = '/favorites',
  Login = '/login'
}

export enum FetchRoutes {
  Offers = 'offers',
  Nearby = 'nearby',
  Favorite = 'favorite',
  Comments = 'comments',
  Login = 'login',
  Logout = 'logout',
}

export enum FetchStatus {
  Idle = 'idle',
  Pending = 'loading',
  Fulfilled = 'succes',
  Rejected = 'error'
}

export enum ApiActions {
  DataFetchOffers = 'data/fetchOffers',
  DataFetchDetailedOffer = 'data/fetchDetailedOffer',
  DataFetchFavorites = 'data/fetchFavoritesOffers',
  DataFetchReviews = 'data/fetchReviews',
  DataFetchNearbyOffers = 'data/fetchNearbyOffers',
  AuthFetchStatus = 'auth/fetchStatus',
  UserFetchLogin = 'user/fetchLogin',
  UserFetchLogout = 'user/fetchLogout',
}

export const RATING_STARS = [5,4,3,2,1];

export const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
export const TIME_OUT = 10000;
export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
