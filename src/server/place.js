import {faker} from "@faker-js/faker";

export function generatePlaceNearBy() {
  return {
    image: faker.image.urlLoremFlickr({ category: 'city' }),
    distance: faker.number.int({ min: 300, max: 1000 }),
    name: faker.lorem.words({ min: 2, max: 4 }),
  }
}

export function generatePlaceNearByList(num) {
  const result = []
  for (let i = 0; i < num; i++) {
    result.push(generatePlaceNearBy());
  }
  return result;
}
