import { faker } from '@faker-js/faker';

export function generateRoomBooking() {
  const images = [1,2,3,4,5].map(() => faker.image.urlLoremFlickr({ category: 'city' }));

  return {
    id: faker.string.uuid(),
    images,
    amount: faker.number.int({ min: 50, max: 2000 }),
    name: faker.lorem.words({ min: 2, max: 4 }),
    description: faker.lorem.paragraph({ min: 5, max: 10 }),
    information: {
      adultNumber: faker.number.int({ min: 1, max: 10 }),
      childrenNumber: faker.number.int({ min: 1, max: 10 }),
      acreage: faker.number.int({ min: 100, max: 200 }),
    },
  }
}

export function generateRoomBookingList(num) {
  const result = []
  for (let i = 0; i < num; i++) {
    result.push(generateRoomBooking());
  }
  return result;
}
