import { faker } from "@faker-js/faker";

export function generateUser(username, fullName, password) {
  return {
    token: faker.string.uuid(),
    username,
    fullName,
  };
}
