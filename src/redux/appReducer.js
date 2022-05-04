import { SET_FILTER_SHOW, TOGGLE_MENU, TOGGLE_POPUP } from './types';
import moment from 'moment';

const appReducerInitialState = {
  isMenuOpen: false,
  popup: { isOpen: false, data: null, callBack: null },
  monthFilter: { showMonth: moment().month(), showType: 0, showOne: false },
};

export const appReducer = (state = appReducerInitialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case TOGGLE_POPUP:
      return {
        ...state,
        popup: {
          isOpen: !state.popup.isOpen,
          data: payload.data,
          callBack: payload.callBack,
          callBackTwo: payload.callBackTwo,
        },
      };
    case SET_FILTER_SHOW:
      return {
        ...state,
        monthFilter: { showMonth: payload.showMonth, showType: payload.showType },
      };
    default:
      return state;
  }
};
