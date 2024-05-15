import { faker } from "@faker-js/faker";

export function generateBranch() {
  return {
    id: faker.string.uuid(),
    name: faker.location.country(),
  };
}

export function generateBranchList(num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(generateBranch());
  }
  return result;
}
