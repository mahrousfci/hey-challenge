import axios from 'axios';
import { API_REPORT_URL } from '../constants/api';
import { Dispatch } from 'redux';
import { ActionType, REPORTS_FILTER_PERIOD } from '../constants/reports';
import { Action } from '../actions/reports';

type ReportFilterProps = {
  from: string;
  to: string;
  projectId?: string;
  gatewayId?: string;
}

export const LoadReports = (
  projectId: string | null,
  gatewayId: string | null
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_ALL_REQUEST,
    });

    try {
      const filterProps: ReportFilterProps = {
        from: REPORTS_FILTER_PERIOD.from,
        to: REPORTS_FILTER_PERIOD.to,
      };
      if (projectId) filterProps['projectId'] = projectId;
      if (gatewayId) filterProps['gatewayId'] = gatewayId;
      const { data } = await axios.post(API_REPORT_URL, filterProps);
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
