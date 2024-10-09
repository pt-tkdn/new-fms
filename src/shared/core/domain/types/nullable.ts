export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export type NullValue<T> = T | null;

export const stringFromNullable = (value: string | null): string => {
  return value ?? "";
};
