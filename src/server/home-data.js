import { faker } from "@faker-js/faker";
import { generatePlaceNearByList } from "src/server/place";
import { roomImages } from "src/server/room-booking";
import { generateCommentList } from "src/server/comment";

export function generateHomeData(branchList, roomBookingList) {
  return {
    title: "Our world is your playground",
    description:
      "Make yourself at home in our sophisticated guest rooms, take in the incredible views and enjoy fresh air from our beautiful sea city.",
    slideImageList: faker.helpers.arrayElements(roomImages, 3),
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
    roomBookingList: faker.helpers.arrayElements(roomBookingList, 5),
    commentList: generateCommentList(5),
  };
}
