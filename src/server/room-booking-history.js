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

export function generateRoomBookingHistory(room) {
  return {
    room,
    status: faker.helpers.arrayElement(
      Object.values(ROOM_BOOKING_HISTORY_STATUS)
    ),
    createdAt: faker.date.past(),
  };
}

export function generateRoomBookingHistoryList(num, roomList) {
  const randomArray = faker.helpers.arrayElements(roomList, num);
  return randomArray.map(generateRoomBookingHistory);
}
