import { CreateApiData } from "../types/api";

export async function createApiKey() {
  const res = await fetch("/api/api-key/create");
  const data = (await res.json()) as CreateApiData;

  if (data.error || !data.createdApiKey) {
    if (data.error instanceof Array) {
      throw new Error(data.error.join(""));
    }

    throw new Error(data.error ?? "something went wrong");
  }

  return data.createdApiKey.key;
}
