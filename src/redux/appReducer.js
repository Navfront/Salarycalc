import { TOGGLE_MENU } from './types';

const appReducerInitialState = { isMenuOpen: false };

export const appReducer = (state = appReducerInitialState, action) => {
  // eslint-disable-next-line no-console
  console.log('action>> ', action);
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
};
