import { HeaderProps } from "../layouts/Header"
import { ContentProps } from "../layouts/Content"

const avatar = require('../assets/images/profile-picture.jpg');

const header: HeaderProps = {
    header: "Nice! Your Monthly parking is Confirmed.",
    subHeader: "Your reservation details are below."
}

const content: ContentProps = {
    location: {
        parkingLot: 'Fells Wargo’s Parking Lot',
        address: '15714 Melrose Ave, Beverly Hills, CA 90201',
        spot: 'SPOT 21'
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
    }
}

export {header, content}