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

class MockApi {
  constructor() {
    this.branchList = generateBranchList(5);
    this.roomList = generateRoomBookingList(150, this.branchList);
    this.placeNearbyList = generatePlaceNearByList(20);
    this.historyBookingList = generateRoomBookingHistoryList(10, this.roomList);
    this.user = generateUser("admin@gmail.com", "admin", "123456");
    this.user.password = "123456";
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

  getHomeRoomList() {
    return new Promise((resolve) => {
      delay(() => {
        resolve(this.roomList.slice(0, 6));
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
        console.info(
          "LOG_IT:: this.historyBookingList",
          this.historyBookingList
        );
        resolve(this.formatResponse(newHistory));
      }, 1000);
    });
  }

  getRoomBookingDetail(roomId) {
    return new Promise((resolve) => {
      delay(() => {
        const currentRoom = this.roomList.find((item) => item.id === roomId);
        resolve(this.formatResponse(currentRoom));
      }, 1000);
    });
  }
}
export default new MockApi();
export * from "./room-booking";
export * from "./place";
export * from "./branch";
