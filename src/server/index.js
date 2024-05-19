import { faker } from "@faker-js/faker";
import { generateBranchList } from "src/server/branch";
import { generateRoomBookingList } from "src/server/room-booking";
import { generatePlaceNearByList } from "src/server/place";
import { generateHomeData } from "src/server/home-data";
import { generateCommentList } from "src/server/comment";
import { delay } from "lodash";
import { generateUser } from "src/server/user";
import {
  createRoomBookingHistory,
  generateRoomBookingHistory,
  generateRoomBookingHistoryList,
} from "src/server/room-booking-history";
import {
  generatePaymentCard,
  generatePaymentCardList,
} from "src/server/payment-card";

class MockApi {
  constructor() {
    const KEYS = {
      branchList: "api_branch_list",
      roomList: "api_room_list",
      placeNearbyList: "api_place_nearby_list",
      historyBookingList: "api_history_booking_list",
      user: "api_user",
    };

    const getDataByKey = (key, defaultData) => {
      const result = localStorage.getItem(key);
      if (!result) {
        localStorage.setItem(key, JSON.stringify(defaultData));
        return defaultData;
      }
      return JSON.parse(result);
    };

    this.branchList = getDataByKey(KEYS.branchList, generateBranchList(5));
    this.roomList = getDataByKey(
      KEYS.roomList,
      generateRoomBookingList(150, this.branchList)
    );
    this.placeNearbyList = getDataByKey(
      KEYS.placeNearbyList,
      generatePlaceNearByList(20)
    );
    this.historyBookingList = getDataByKey(
      KEYS.historyBookingList,
      generateRoomBookingHistoryList(20, this.roomList)
    );
    this.user = getDataByKey(
      KEYS.user,
      generateUser("admin@gmail.com", "admin", "123456")
    );
  }

  formatResponse(data) {
    return {
      statusCode: 200,
      data,
      message: "Success",
    };
  }

  formatFailureResponse(message) {
    return {
      status: 200,
      message: message,
      data: null,
    };
  }

  getBranchList() {
    return new Promise((resolve) => {
      delay(() => {
        resolve(this.formatResponse(this.branchList));
      }, 500);
    });
  }

  getRoomListBySearchParams(params) {
    const currentPage = parseInt(params.currentPage) || 1;
    const adultNumber = parseInt(params.adultNumber);
    const childrenNumber = parseInt(params.childrenNumber);
    const bedNumber = parseInt(params.bedNumber);
    const offset = 10;
    return new Promise((resolve) => {
      delay(() => {
        const result = this.roomList.filter((item) => {
          const { branch } = params || {};
          if (branch && item.branch?.id !== branch) return false;
          if (adultNumber && item?.information?.adultNumber < adultNumber)
            return false;
          if (
            childrenNumber &&
            item?.information?.childrenNumber < childrenNumber
          )
            return false;
          if (bedNumber && item?.information?.bedNumber < bedNumber)
            return false;
          return true;
        });
        const start = (currentPage - 1) * offset;
        const end = Math.min(currentPage * offset, result?.length);
        const resultWithPage = result.slice(start, end);
        resolve(
          this.formatResponse({
            roomList: resultWithPage,
            totalPage: Math.max(result?.length / offset, 1),
          })
        );
      }, 700);
    });
  }

  getHomeData() {
    return new Promise((resolve) => {
      delay(() => {
        const result = generateHomeData(this.branchList, this.roomList);
        resolve(this.formatResponse(result));
      }, 2000);
    });
  }

  getDetailBranchData() {
    return new Promise((resolve) => {
      delay(() => {
        const roomBookingList = faker.helpers.arrayElements(this.roomList, 6);
        const placeNearbyList = generatePlaceNearByList(4);
        const commentList = generateCommentList(5);
        resolve(
          this.formatResponse({ roomBookingList, placeNearbyList, commentList })
        );
      }, 500);
    });
  }

  signIn(username, password) {
    return new Promise((resolve) => {
      delay(() => {
        if (
          username === this.user?.username &&
          password === this.user?.password
        ) {
          resolve(this.formatResponse(this.user));
        } else {
          resolve(this.formatFailureResponse("Invalid username or password"));
        }
      }, 1000);
    });
  }

  signUp(username, fullName, password) {
    return new Promise((resolve) => {
      delay(() => {
        this.user = generateUser(username, fullName, password);
        this.user.password = password;
        resolve(this.formatResponse(this.user));
      }, 1000);
    });
  }

  postBookRoom(room) {
    return new Promise((resolve) => {
      delay(() => {
        const data = createRoomBookingHistory(room);
        resolve(this.formatResponse(data));
      }, 1000);
    });
  }

  getRoomBookingHistoryNew() {
    return new Promise((resolve) => {
      delay(() => {
        const result = this.historyBookingList.filter(
          (item) => item.status === 0
        );
        resolve(this.formatResponse(result));
      }, 1000);
    });
  }

  getRoomBookingHistory(params) {
    const adultNumber = parseInt(params?.adultNumber || 0);
    const childrenNumber = parseInt(params?.childrenNumber || 0);
    const bedNumber = parseInt(params?.bedNumber || 0);
    const type = params?.type ? parseInt(params?.type) : null;
    return new Promise((resolve) => {
      delay(() => {
        const result = this.historyBookingList.filter((item) => {
          if (typeof type === "number" && item.status !== type) return false;
          if (adultNumber && item.extraInformation?.adultNumber !== adultNumber)
            return false;
          if (
            childrenNumber &&
            item.extraInformation?.childrenNumber !== childrenNumber
          )
            return false;
          if (bedNumber && item.extraInformation?.bedNumber !== bedNumber)
            return false;
          return true;
        });
        resolve(this.formatResponse(result));
      }, 1000);
    });
  }

  createBookingRoomHistory(params) {
    return new Promise((resolve) => {
      delay(() => {
        const { roomId, ...extraInformation } = params || {};
        const roomSelected = this.roomList.find(
          (item) => item.id === params?.roomId
        );
        const newHistory = generateRoomBookingHistory(roomSelected, true);
        this.historyBookingList = [
          { ...newHistory, extraInformation },
          ...this.historyBookingList,
        ];
        resolve(this.formatResponse(newHistory));
      }, 1000);
    });
  }

  getRoomBookingDetail(roomId) {
    return new Promise((resolve) => {
      delay(() => {
        const currentRoom = this.roomList.find((item) => item.id === roomId);
        const suggestRoomList = faker.helpers.arrayElements(this.roomList, 6);
        resolve(this.formatResponse({ ...currentRoom, suggestRoomList }));
      }, 1000);
    });
  }

  updateProfile(params) {
    return new Promise((resolve) => {
      delay(() => {
        if (params?.fullName) {
          this.user.fullName = params.fullName;
        }
        if (params?.password) {
          this.user.password = params.password;
        }
        resolve(this.formatResponse(this.user));
      }, 500);
    });
  }

  getPaymentCardList() {
    return new Promise((resolve) => {
      delay(() => {
        resolve(this.formatResponse(generatePaymentCardList(3)))
      }, 1000);
    });
  }
}
export default new MockApi();
export * from "./room-booking";
export * from "./place";
export * from "./branch";
