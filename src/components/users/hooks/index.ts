import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../store';
import { deleteUserById } from '../store/slice';
import { UserId } from '../users.interface';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useUserActions = () => {
  const dispatch = useAppDispatch();
  const removeUser = (id: UserId) => dispatch(deleteUserById(id));

  return { removeUser };
};
