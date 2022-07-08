import React, { createContext, useState, useContext } from 'react';

import ParkingInfo from '../types';

const defaultParkingInfo: ParkingInfo = {
  location: {
    parkingLot: '',
    address: '',
    spot: '',
    more: '',
  },
  date: {
    startDate: {
      date: '',
      year: '',
      time: '',
    },
    endDate: {
      date: '',
      year: '',
      time: '',
    },
  },
  instructions: '',
  purchaseAdditionalMonth: '',
  amount: '',
  user: {
    avatar: '',
    name: '',
    owner: '',
    message: '',
  },
  position: {
    latitude: 0,
    latitudeDelta: 0,
    longitude: 0,
    longitudeDelta: 0,
  },
};

export interface ParkingContextProps {
  parkingInfo: ParkingInfo;
  setParkingInfo: React.Dispatch<React.SetStateAction<ParkingInfo>>;
}

export const ParkingContext = createContext<ParkingContextProps | null>(null);

export const useParkingContext = () => {
  const context = useContext(ParkingContext);

  if (!context) {
    throw Error('No Parking Info context');
  }

  return context;
};

const ParkingContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [parkingInfo, setParkingInfo] = useState<ParkingInfo>(defaultParkingInfo);

  return (
    <ParkingContext.Provider value={{ parkingInfo, setParkingInfo }}>
      {children}
    </ParkingContext.Provider>
  );
};
export default ParkingContextProvider;
