import { useAppDispatch, useAppSelector, mutateLogin } from "/src/redux/index.ts.js";
export function useLogout() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((s) => s.login.isLoading);
  const mutate = () => {
    dispatch(mutateLogin({ isLogged: false }));
  };
  return { mutate, isLoading };
}
