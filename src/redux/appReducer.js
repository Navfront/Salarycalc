import { TOGGLE_MENU } from './types';

const appReducerInitialState = { isMenuOpen: false };

export const appReducer = (state = appReducerInitialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
};
