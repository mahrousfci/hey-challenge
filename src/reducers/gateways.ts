import { Action } from '../actions/gateways';
import {
  ActionType,
  ALL_GATEWAYS_OPTION,
  Gateway,
} from '../constants/gateways';

interface ReducersState {
  loading: boolean;
  error: string | null;
  data: Gateway[];
  selectedGatewayId: string;
}

const initialState = {
  loading: false,
  error: null,
  data: [],
  selectedGatewayId: ALL_GATEWAYS_OPTION.value,
};

export default function gateways(
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
    case ActionType.SET_SELECTED_GATEWAY:
      return { ...state, selectedGatewayId: action.payload };
    default:
      return state;
  }
}
