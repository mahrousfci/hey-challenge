import { Action } from '../actions/projects';
import { ActionType, ALL_PROJECTS_OPTION, Project } from '../constants/projects';

interface ReducersState {
  loading: boolean;
  error: string | null;
  data: Project[];
  selectedProjectId: string;
}

const initialState = {
  loading: false,
  error: null,
  data: [],
  selectedProjectId: ALL_PROJECTS_OPTION.value,
};

export default function projects(
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
    case ActionType.SET_SELECTED_PROJECT:
      return { ...state, selectedProjectId: action.payload };
    default:
      return state;
  }
}
