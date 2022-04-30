import { TOGGLE_MENU, TOGGLE_POPUP } from './types';

const appReducerInitialState = { isMenuOpen: false, popup: { isOpen: false, data: null } };

export const appReducer = (state = appReducerInitialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_MENU:
      return { ...appReducerInitialState, isMenuOpen: !state.isMenuOpen };
    case TOGGLE_POPUP:
      return {
        ...appReducerInitialState,
        popup: { isOpen: !state.popup.isOpen, data: payload },
      };
    default:
      return state;
  }
};
