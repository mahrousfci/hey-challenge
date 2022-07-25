import axios from 'axios';
import { API_PROJECTS_URL } from '../constants/api';
import { Dispatch } from 'redux';
import { ActionType } from '../constants/projects';
import { Action } from '../actions/projects';

export const LoadAllProjects = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_ALL_REQUEST,
    });

    try {
      const { data } = await axios.get(API_PROJECTS_URL);
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

export const SetSelectedProject = (selectedItem: string) => {
  return {
    type: ActionType.SET_SELECTED_PROJECT,
    payload: selectedItem,
  };
};
