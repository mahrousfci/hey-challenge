export enum ActionType {
  GET_ALL_REQUEST = 'gateways/GET_ALL_REQUEST',
  GET_ALL_SUCCESS = 'gateways/GET_ALL_SUCCESS',
  GET_ALL_FAILURE = 'gateways/GET_ALL_FAILURE',

  SET_SELECTED_GATEWAY = 'gateways/SET_SELECTED_GATEWAY',
}

export type Gateway = {
  gatewayId: string;
  name: string;
  userIds: string[];
  type: string;
  apiKey: string;
};

export const ALL_GATEWAYS_OPTION = {
  value: 'all_gateways',
  text: 'All gateways'
}