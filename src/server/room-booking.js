import { faker } from "@faker-js/faker";
import { isEmpty } from "lodash";
import hotels from "./database/hotels.json";

export const roomImages = [
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/luxe-room.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/gallery-product-room-06.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/gallery-product-room-03.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/gallery-product-room-04.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/gallery-product-room-02.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/gallery-product-room-01.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/premium-room.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/room-03.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/gallery-product-room-05.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/gallery-product-room-07.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/room-01.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/standard-room.jpg",
  "https://demo.ovatheme.com/hotelft/wp-content/uploads/2022/02/deluxe-room.jpg",
];

export function generateRoomBooking(branchList) {
  const _hotels = hotels.map((item) => {
    const { overview, rates_from } = item || {};
    return {
      name: item?.hotel_name,
      overview,
      amount: rates_from,
    };
  });
  const branch = isEmpty(branchList)
    ? null
    : branchList[faker.number.int({ min: 0, max: branchList.length - 1 })];
  const images = [1, 2, 3, 4, 5].map(() =>
    faker.image.urlLoremFlickr({ category: "city" })
  );

  const hotel = faker.helpers.arrayElement(_hotels);

  return {
    id: faker.string.uuid(),
    images: faker.helpers.arrayElements(roomImages, 5),
    amount: hotel.amount,
    name: hotel.name,
    description: hotel.overview,
    information: {
      adultNumber: faker.number.int({ min: 1, max: 10 }),
      childrenNumber: faker.number.int({ min: 1, max: 10 }),
      acreage: faker.number.int({ min: 100, max: 200 }),
    },
    branch,
  };
}

export function generateRoomBookingList(num, branchList) {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(generateRoomBooking(branchList));
  }
  return result;
}
