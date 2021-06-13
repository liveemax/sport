import { sport } from "../module/module";

export const getJogs = async () =>
  await sport.apiReuse(`${sport.url}/data/sync`, "jogs", "GET", {
    ...sport.authHeader(localStorage.getItem(sport.tokenStorage)),
  });

export const setJog = async (date, time, distance) =>
  await sport.apiReuse(
    `${sport.url}/data/jog`,
    null,
    "POST",
    { ...sport.authHeader(localStorage.getItem(sport.tokenStorage)) },
    JSON.stringify({
      date,
      time: parseInt(time, 10),
      distance: parseFloat(distance),
    })
  );
