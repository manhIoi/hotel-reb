import { generateBranchList } from "src/server/branch";
import { generateRoomBookingList } from "src/server/room-booking";
import { generatePlaceNearByList } from "src/server/place";
import { generateHomeData } from "src/server/home-data";
import { generateCommentList } from "src/server/comment";

class MockApi {
  constructor() {
    this.branchList = generateBranchList(5);
    this.roomList = generateRoomBookingList(150, this.branchList);
    this.placeNearbyList = generatePlaceNearByList(20);
  }

  formatResponse(data) {
    return {
      statusCode: 200,
      data,
      message: "Success",
    };
  }

  getBranchList() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.formatResponse(this.branchList));
      }, 500);
    });
  }

  getHomeRoomList() {
    return new Promise((resolve) => {
      setTimeout(() => {
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
      setTimeout(() => {
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
      }, 1000);
    });
  }

  getHomeData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = generateHomeData(this.branchList);
        resolve(this.formatResponse(result));
      }, 3000);
    });
  }

  getDetailBranchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const roomBookingList = generateRoomBookingList(6, this.branchList);
        const placeNearbyList = generatePlaceNearByList(4);
        const commentList = generateCommentList(5);
        resolve(
          this.formatResponse({ roomBookingList, placeNearbyList, commentList })
        );
      }, 500);
    });
  }
}
export default new MockApi();
export * from "./room-booking";
export * from "./place";
export * from "./branch";
