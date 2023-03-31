import { NitroFetchRequest } from "nitropack";
import { FetchOptions } from "ofetch";
import { ApiResponseError } from "./types";

export class Api {
  static async performRequest<ResponseT>(
    request: NitroFetchRequest,
    opts?: FetchOptions
  ) {
    return await useFetch<ResponseT, ApiResponseError>(request, {
      ...opts,
      credentials: "include",
    });
  }
}
