import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../reducer';
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
