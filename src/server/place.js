import { faker } from "@faker-js/faker";

const placeImageList = [
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/place-slide-03.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/place-slide-04.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/place-slide-02.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/place-slide-01.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/place-01.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/mount.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/place-02.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/01/place-03.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/place-07.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/blog-content-01.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/blog-content-02.jpg",
];

export function generatePlaceNearBy() {
  return {
    image: faker.helpers.arrayElement(placeImageList),
    distance: faker.number.int({ min: 300, max: 1000 }),
    name: faker.lorem.words({ min: 2, max: 4 }),
  };
}

export function generatePlaceNearByList(num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(generatePlaceNearBy());
  }
  return result;
}
