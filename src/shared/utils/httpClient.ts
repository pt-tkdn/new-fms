import ky from "ky";

export interface BaseHttpResponse<T> {
  error: BaseHttpError | null;
  data: T;
}

export interface BaseHttpError {
  error_code: string;
  error_message: string;
  error_case: string;
}

const createHttpClient = () => {
  return ky.create({
    prefixUrl: process.env.API_URL || "https://apifms.dev.tkdn.co.id",
    hooks: {
      beforeRequest: [
        (request) => {
          console.log("request", request);
        },
      ],
    },
  });
};

export default createHttpClient();
