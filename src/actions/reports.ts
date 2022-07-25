import { ActionType, Report } from '../constants/reports';

interface LOAD_REPORTS {
  type: ActionType.GET_ALL_REQUEST;
}
interface LOAD_REPORTS_SUCCESS {
  type: ActionType.GET_ALL_SUCCESS;
  payload: Report[];
}
interface LOAD_REPORTS_ERROR {
  type: ActionType.GET_ALL_FAILURE;
  payload: string;
}

export type Action =
  | LOAD_REPORTS
  | LOAD_REPORTS_SUCCESS
  | LOAD_REPORTS_ERROR;
