import { combineReducers } from 'redux';
import projects from './projects';
import gateways from './gateways';
import reports from './reports';

const rootReducer = combineReducers({
  projects,
  gateways,
  reports,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
