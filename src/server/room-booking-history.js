import { faker } from "@faker-js/faker";

export const ROOM_BOOKING_HISTORY_STATUS = {
  NEW: 0,
  CHECK_IN: 1,
  CHECK_OUT: 2,
};

export function createRoomBookingHistory(roomBooking) {
  return {
    room: roomBooking,
    status: ROOM_BOOKING_HISTORY_STATUS.NEW,
    createdAt: new Date(),
  };
}

export function generateRoomBookingHistory(room, customTime = false) {
  return {
    room,
    status: faker.helpers.arrayElement(
      Object.values(ROOM_BOOKING_HISTORY_STATUS)
    ),
    createdAt: !!customTime ? new Date() : faker.date.past(),
    extraInformation: {
      dateCheckIn: faker.date.past(),
      dateCheckOut: faker.date.past(),
      adultNumber: faker.number.int({ min: 2, max: 4 }),
      childrenNumber: faker.number.int({ min: 2, max: 4 }),
      bedNumber: faker.number.int({ min: 2, max: 4 }),
      message: faker.lorem.words({ min: 2, max: 4 }),
      roomNumber: faker.number.int({ min: 2, max: 4 }),
    },
  };
}

export function generateRoomBookingHistoryList(num, roomList) {
  const randomArray = faker.helpers.arrayElements(roomList, num);
  return randomArray.map(generateRoomBookingHistory);
}
