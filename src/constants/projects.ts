export enum ActionType {
  GET_ALL_REQUEST = 'projects/GET_ALL_REQUEST',
  GET_ALL_SUCCESS = 'projects/GET_ALL_SUCCESS',
  GET_ALL_FAILURE = 'projects/GET_ALL_FAILURE',

  SET_SELECTED_PROJECT = 'projects/SET_SELECTED_PROJECT',
}

export type Project = {
  projectId: string;
  name: string;
  userIds: string[];
  rule: string;
  gatewayIds: string[];
  structure: string;
};

export const ALL_PROJECTS_OPTION = {
    value: 'all_projects',
    text: 'All projects'
}