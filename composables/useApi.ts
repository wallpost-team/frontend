import { NitroFetchRequest } from "nitropack";
import { FetchOptions } from "ofetch";
import type { ApiResponseError } from "utils/api/types";

export default <ResponseT>(request: NitroFetchRequest, opts?: FetchOptions) => {
  return useFetch<ResponseT, ApiResponseError>(request, {
    ...opts,
    credentials: "include",
    baseURL: "http://localhost:3000/api",
  });
};
