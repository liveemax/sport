import {sport} from "../module/module";
import { getToken } from "../api/authApi";
import { getJogs, setJog } from "../api/dataApi";

jest.mock('../state/reducers/jogsFilterReducer', () => {
  return {
  };
});

describe("test api request", () => {
  beforeAll(() => {
    localStorage.setItem(sport.tokenStorage, sport.fakeToken);
  });
  it(`${sport.url}/auth/user should return new token`, async () => {
    const api = await getToken();
    expect(api.length).toBe(64);
    expect(typeof api).toBe("string");
  });
  it(`${sport.url}/data/sync should return new jogs with unique id and same user_id.
    Type of values time,date and distance is numeric. All items is object. If jogs list is empty this test dont checked`, async () => {
    const api = await getJogs();
    if (api.length === 0) return null;
    //initial buff func
    const user_id_buf = api[0]["user_id"];
    expect(typeof user_id_buf).toBe("string");
    api.forEach((el) => {
      const { id, user_id, distance, time, date } = el;
      expect(typeof id).toBe("number");
      expect(user_id).toBe(user_id_buf);
      expect(typeof distance).toBe("number");
      expect(typeof time).toBe("number");
      expect(typeof date).toBe("number");
    });
  });
  it(`${sport.url}/data/jog should return new jog item={date,distance,id,time,user_id}`, async () => {
    const api = await setJog("12.12.2012", 12, 12);
    const { id, user_id, distance, time, date } = api;
    expect(typeof id).toBe("number");
    expect(typeof user_id).toBe("string");
    expect(typeof distance).toBe("number");
    expect(typeof time).toBe("number");
    expect(typeof date).toBe("string");
  });
});
