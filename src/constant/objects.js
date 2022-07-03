import { faLink } from '@fortawesome/free-solid-svg-icons';
import Gauzy from '../img/gauzy.jpg';
import Qhare from '../img/qhare.jpg';
import TradeHq from '../img/trade-hq.jpg';

const objects = [
  {
    title: 'Ever Gauzy',
    details: 'Ever Gauzy Platform is an Enterprise Resource Planning (ERP), Customer Relationship Management (CRM) and Human Resource Management (HRM) software for modern On-Demand businesses.',
    tech: ['TypeScript', 'NextJS', 'Chakra-ui', 'SCSS'],
    demo: [
      {
        link: 'https://web.gauzy.co/',
        icon: faLink,
      },
    ],
    image: {
      src: Gauzy,
      imageTitle: 'Ever Gauzy',
    },
  },
  {
    title: 'Trade HQ',
    details: 'A video tutorial for the TradeHQ platform.',
    tech: ['TypeScript', 'NextJS', 'NestJS', 'GraphQL', 'Chakra-ui', 'SCSS'],
    demo: [
      {
        link: 'https://tradehq.io/',
        icon: faLink,
      },
    ],
    image: {
      src: TradeHq,
      imageTitle: 'Trade HQ',
    },
  },
  {
    title: 'Qhare',
    details: 'A CRM for Companies specializing in the activity sector of installation of thermal and air conditioning equipment',
    tech: ['Ruby on Rails', 'Bootsrap 4', 'AWS', 'JQuery'],
    demo: [
      {
        link: 'https://qhare.fr/',
        icon: faLink,
      },
    ],
    image: {
      src: Qhare,
      imageTitle: 'Qhare',
    },
  },
];

export default objects;
