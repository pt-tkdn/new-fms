type ActionSuccess<T> = {
  isSuccess: true;
  isFailure: false;
  data: T;
  error: null;
};

type ActionFailure<E> = {
  isSuccess: false;
  isFailure: true;
  data: null;
  error: E;
};

export type ActionResult<T, E> = ActionSuccess<T> | ActionFailure<E> | null;

export const actionSuccess = <T>(data: T): ActionSuccess<T> => ({
  isSuccess: true,
  isFailure: false,
  data,
  error: null,
});

export const actionFailure = <E>(error: E): ActionFailure<E> => ({
  isSuccess: false,
  isFailure: true,
  data: null,
  error,
});
