import { SET_FILTER_SHOW, TOGGLE_MENU, TOGGLE_POPUP } from './types';

const appReducerInitialState = {
  isMenuOpen: false,
  popup: { isOpen: false, data: null },
  monthFilter: { showMonth: 0, showType: 0, showOne: false },
};

export const appReducer = (state = appReducerInitialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_MENU:
      return { ...appReducerInitialState, isMenuOpen: !state.isMenuOpen };
    case TOGGLE_POPUP:
      return {
        ...appReducerInitialState,
        popup: { isOpen: !state.popup.isOpen, data: payload },
      };
    case SET_FILTER_SHOW:
      return {
        ...appReducerInitialState,
        monthFilter: { showMonth: payload.showMonth, showType: payload.showType },
      };
    default:
      return state;
  }
};
