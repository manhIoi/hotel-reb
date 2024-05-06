import {faker} from "@faker-js/faker";

export function generateComment() {
  return {
    content: faker.lorem.sentence(10),
    user: {
      avatar: faker.image.avatar(),
      name: faker.person.fullName(),
      country: faker.location.country(),
    }
  }
}

export function generateCommentList(num) {
  const result = []
  for (let i = 0; i < num; i++) {
    result.push(generateComment());
  }
  return result;
}
