import { RiTimerFlashFill } from 'react-icons/ri';
import { MdDeliveryDining } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { RiBuilding2Fill } from 'react-icons/ri';

const service = [
  {
    title: '24 Hours',
    subtitle: 'Response time',
    text: 'Custom designs are handled promptly.',
    icon: <RiTimerFlashFill />,
  },
  {
    title: '7 Days',
    subtitle: 'Production plus Delivery',
    text: 'Orders below 50000 pieces will be at your door within 7 business days following payment',
    icon: <MdDeliveryDining />,
  },
  {
    title: '15 Years',
    subtitle: 'Experience in Customization',
    text: 'We have been the industry leader since the beginning of the rhinestone revolution.',
    icon: <RiBuilding2Fill />,
  },
  {
    title: '10k',
    subtitle: 'Customers World-wide',
    text: 'Over 10000 businesses choose CSTOWN as their permanent supplier. Almost 2000 new customers are added each year.',
    icon: <FaUsers />,
  },
];

export default service;
