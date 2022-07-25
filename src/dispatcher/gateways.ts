import axios from 'axios';
import { API_GATEWAYS_URL } from '../constants/api';
import { Dispatch } from 'redux';
import { ActionType } from '../constants/gateways';
import { Action } from '../actions/gateways';

export const LoadAllGateways = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_ALL_REQUEST,
    });

    try {
      const { data } = await axios.get(API_GATEWAYS_URL);
      dispatch({
        type: ActionType.GET_ALL_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionType.GET_ALL_FAILURE,
          payload: error?.message,
        });
      } else {
        console.log('Unexpected error', error);
        dispatch({
          type: ActionType.GET_ALL_FAILURE,
          payload: 'Unexpected error',
        });
      }
    }
  };
};


export const SetSelectedGateway = (selectedItem: string) => {
  return {
    type: ActionType.SET_SELECTED_GATEWAY,
    payload: selectedItem,
  };
};
