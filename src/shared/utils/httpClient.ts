import { useUserStore } from "#/modules/user/application/hooks/useUserStore";
import xior from "xior";
export interface BaseHttpResponse<T> {
  error: BaseHttpError | null;
  data: T;
}

export interface BaseHttpError {
  error_code: string;
  error_message: string;
  error_case: string;
}

const mapError = (error: BaseHttpError) => {
  return {
    code: error.error_code,
    message: error.error_message,
    case: error.error_case,
  };
};

export type HttpError = ReturnType<typeof mapError>;

const httpClient = xior.create({
  baseURL: process.env.API_URL ?? "https://apifms.dev.tkdn.co.id",
});

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      return Promise.reject(error);
    }

    const data = error.response.data as BaseHttpResponse<BaseHttpError>;

    if (data.error) {
      console.log("catched an error ", data.error);
      const err = mapError(data.error);
      error.response.data = err;
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

httpClient.interceptors.request.use((config) => {
  const accessToken = useUserStore.getState().data?.accessToken;
  console.log("ACCESS TOKEN", accessToken);
  if (accessToken) {
    config.headers.Authorization = accessToken;
  }
  console.log("REQUEST", config);
  console.log("REQUEST", config.data);
  return config;
});

export default httpClient;
