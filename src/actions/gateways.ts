import { ActionType, Gateway } from '../constants/gateways';

interface LOAD_GATEWAYS {
  type: ActionType.GET_ALL_REQUEST;
}
interface LOAD_GATEWAYS_SUCCESS {
  type: ActionType.GET_ALL_SUCCESS;
  payload: Gateway[];
}
interface LOAD_GATEWAYS_ERROR {
  type: ActionType.GET_ALL_FAILURE;
  payload: string;
}
interface SET_SELECTED_GATEWAY {
  type: ActionType.SET_SELECTED_GATEWAY;
  payload: string;
}

export type Action =
  | LOAD_GATEWAYS
  | LOAD_GATEWAYS_SUCCESS
  | LOAD_GATEWAYS_ERROR
  | SET_SELECTED_GATEWAY;
