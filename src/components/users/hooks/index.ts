import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../store';
import { createUser, deleteUserById, resetList } from '../store/slice';
import { UnregisteredUser, UserId } from '../users.interface';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const createNewUser = ({ name, email, phone, website, status }: UnregisteredUser) =>
    dispatch(createUser({ name, email, phone, website, status }));
  const removeUser = (id: UserId) => dispatch(deleteUserById(id));
  const resetListUser = () => dispatch(resetList());

  return { createNewUser, removeUser, resetListUser };
};
