import { ActionType, Project } from '../constants/projects';

interface LOAD_PROJECTS {
  type: ActionType.GET_ALL_REQUEST;
}
interface LOAD_PROJECTS_SUCCESS {
  type: ActionType.GET_ALL_SUCCESS;
  payload: Project[];
}
interface LOAD_PROJECTS_ERROR {
  type: ActionType.GET_ALL_FAILURE;
  payload: string;
}
interface SET_SELECTED_PROJECT {
  type: ActionType.SET_SELECTED_PROJECT;
  payload: string;
}

export type Action =
  | LOAD_PROJECTS
  | LOAD_PROJECTS_SUCCESS
  | LOAD_PROJECTS_ERROR
  | SET_SELECTED_PROJECT;
