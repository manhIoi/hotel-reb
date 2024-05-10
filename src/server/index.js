import { generateBranchList } from "src/server/branch";
import { generateRoomBookingList } from "src/server/room-booking";
import { generatePlaceNearByList } from "src/server/place";
import { generateHomeData } from "src/server/home-data";
import { generateCommentList } from "src/server/comment";
import { delay } from "lodash";
import { generateUser } from "src/server/user";

class MockApi {
  constructor() {
    this.branchList = generateBranchList(5);
    this.roomList = generateRoomBookingList(150, this.branchList);
    this.placeNearbyList = generatePlaceNearByList(20);
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
      data: null
    }
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
        const result = generateHomeData(this.branchList);
        resolve(this.formatResponse(result));
      }, 2000);
    });
  }

  getDetailBranchData() {
    return new Promise((resolve) => {
      delay(() => {
        const roomBookingList = generateRoomBookingList(6, this.branchList);
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
        if (username === this.user?.username && password === this.user?.password) {
          resolve(this.formatResponse(this.user))
        } else {
          resolve(this.formatFailureResponse("Invalid username or password"));
        }
      }, 1000)
    })
  }

  signUp(username, fullName, password) {
    return new Promise((resolve) => {
      delay(() => {
        this.user = generateUser(username, fullName, password)
        this.user.password = password
        resolve(this.formatResponse(this.user))
      }, 1000)
    })
  }
}
export default new MockApi();
export * from "./room-booking";
export * from "./place";
export * from "./branch";
