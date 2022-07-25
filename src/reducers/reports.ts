import { Action } from '../actions/reports';
import { ActionType,  Report } from '../constants/reports';

interface ReducersState {
  loading: boolean;
  error: string | null;
  data: Report[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export default function reports(
  state: ReducersState = initialState,
  action: Action
) {
  switch (action.type) {
    case ActionType.GET_ALL_REQUEST:
      return { ...state, loading: true, error: null, data: [] };
    case ActionType.GET_ALL_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case ActionType.GET_ALL_FAILURE:
      return { ...state, loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
}
