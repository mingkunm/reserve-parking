
import ParkingInfo from "../types";

const avatar = require('../assets/images/profile-picture.jpg');

const parkingInfo: ParkingInfo = {
    location: {
        parkingLot: 'Fells Wargo’s Parking Lot',
        address: '15714 Melrose Ave, Beverly Hills, CA 90201',
        spot: 'SPOT 21',
        more: 'some info',
    },
    date: {
        startDate: {
            date: 'FEB 20',
            year: '2019',
            time: '12:00 AM'
        },
        endDate: {
            date: 'MAY 20',
            year: '2019',
            time: '12:00 AM'
        }
    },
    instructions: 'some info',
    purchaseAdditionalMonth: 'some info',
    amount: '272.95',
    user: {
        avatar: avatar,
        name: 'Annie W.',
        owner: 'Owner',
        message: 'some info'
    },
    position: {
        latitude: 34.08215,
        longitude: -118.37625,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
    }
}

export { parkingInfo}