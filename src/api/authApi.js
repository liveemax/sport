import { sport } from "../module/module";

export const getToken = async () =>
  await sport.apiReuse(
    `${sport.url}/auth/uuidLogin`,
    "access_token",
    "POST",
    { ...sport.tokenHeader() },
    "uuid=hello"
  );
