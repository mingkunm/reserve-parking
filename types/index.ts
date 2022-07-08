interface LocationInfo {
    parkingLot: string;
    address: string;
    spot: string;
    more: string;
  }

export interface ParkingDate {
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

interface ParkingLotPosition {
  latitude: number,
  longitude: number,
  latitudeDelta: number,
  longitudeDelta: number,
}
  
export enum Screens {
  Main = 'main',
  Camera ='camera'
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
    user: UserInfo,
    position: ParkingLotPosition
}

