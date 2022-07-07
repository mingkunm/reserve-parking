interface LocationInfo {
    parkingLot: string;
    address: string;
    spot: string;
    more: string;
  }

interface ParkingDate {
    date: string;
    year: string;
    time: string;
  }

interface UserInfo {
    avatar: string;
    name: string;
    owner: string;
    message: string;
}
  
export default interface ParkingInfo {
    location: LocationInfo;
    date: {
        startDate: ParkingDate;
        endDate: ParkingDate;
    };
    instructions: string;
    purchaseAdditionalMonth: string;
    amount: string;
    user: UserInfo
}