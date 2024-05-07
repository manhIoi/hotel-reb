import { faker } from "@faker-js/faker";
import { generatePlaceNearByList } from "src/server/place";
import { generateRoomBookingList } from "src/server/room-booking";
import { generateCommentList } from "src/server/comment";

export function generateHomeData() {
  return {
    title: "Our world is your playground",
    description:
      "Make yourself at home in our sophisticated guest rooms, take in the incredible views and enjoy fresh air from our beautiful sea city.",
    slideImageList: [1, 2, 3, 4, 5].map(() =>
      faker.image.urlLoremFlickr({ category: "city" })
    ),
    outstandingList: [
      {
        title: "VARIOUS SERVICES",
        value: faker.number.int({ min: 10, max: 90 }),
      },
      {
        title: "DIFFERENT ROOMS",
        value: faker.number.int({ min: 100, max: 999 }),
      },
      {
        title: "EXPERIENCE",
        value: faker.number.int({ min: 5, max: 10 }),
      },
    ],
    placeNearbyList: generatePlaceNearByList(5),
    roomBookingList: generateRoomBookingList(5),
    commentList: generateCommentList(5),
  };
}
