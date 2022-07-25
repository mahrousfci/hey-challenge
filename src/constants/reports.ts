export enum ActionType {
  GET_ALL_REQUEST = 'reports/GET_ALL_REQUEST',
  GET_ALL_SUCCESS = 'reports/GET_ALL_SUCCESS',
  GET_ALL_FAILURE = 'reports/GET_ALL_FAILURE',

  SET_SELECTED_REPORT = 'reports/SET_SELECTED_REPORT',
}

export type Report = {
  paymentId: string;
  projectId: string;
  gatewayId: string;
  amount: number;
  userIds: string[];
  created: string;
  modified: string;
};

export const REPORTS_FILTER_PERIOD = {
  from: '2021-01-01',
  to: '2021-12-31',
};
