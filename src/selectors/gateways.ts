import { RootState } from '../reducers';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../dispatcher/gateways';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
