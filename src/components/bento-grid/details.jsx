import { GalleryBento, SponsorsBento, CentralEventsBento, ClubEventsBento, ContactUsBento, ScheduleBento, GetPassesBento } from '@/components/bento-grid/bentos';
import Pattern from '@/components/bento-grid/pattern';

export default [
  {
    name: 'gallery',
    width: 425,
    height: 221,
    top: 60,
    left: 107,
    mobile: {
      width: 160,
      height: 138,
      top: 45,
      left: 30,
    },
    color: '#0C5AB9',
    component: GalleryBento,
    link: '#gallery_section'
  },
  {
    name: 'sponsors',
    width: 333,
    height: 221,
    top: 60,
    left: 542,
    mobile: {
      width: 160,
      height: 132,
      top: 45,
      left: 200,
    },
    color: '#9DD764',
    component: SponsorsBento,
    link: 'sponsors',
  },
  {
    name: 'central_events',
    width: 289,
    height: 399,
    top: 142,
    left: 885,
    mobile: {
      width: 160,
      height: 223,
      top: 187,
      left: 200,
    },
    color: '#05B163',
    component: CentralEventsBento,
    link: 'central-events',
  },
  {
    name: 'club_events',
    width: 289,
    height: 481,
    top: 291,
    left: 106,
    mobile: {
      width: 160,
      height: 241,
      top: 193,
      left: 30,
    },
    color: '#FEDE88',
    component: ClubEventsBento,
    link: 'events',
  },
  {
    name: 'contact_us',
    width: 407,
    height: 221,
    top: 551,
    left: 405,
    mobile: {
      width: 160,
      height: 184,
      top: 420,
      left: 200,
    },
    color: '#B0E9F9',
    component: ContactUsBento,
    link: 'contact-us',
  },
  {
    name: 'schedule',
    width: 352,
    height: 221,
    top: 551,
    left: 822,
    mobile: {
      width: 159,
      height: 160,
      top: 444,
      left: 31,
    },
    color: '#FC6655',
    component: ScheduleBento,
    link: 'coming-soon'
  },
  {
    name: 'getpasses',
    width: 470,
    height: 248,
    top: 292,
    left: 405,
    mobile: {
      width: 329,
      height: 173.6,
      top: 614,
      left: 31,
    },
    color: 'linear-gradient(180deg, #F6DA26 0%, #F69626 100%)',
    component: GetPassesBento,
    link: 'get-passes',
  },
  {
    name: 'pattern',
    width: 289,
    height: 70,
    top: 62,
    left: 885,
    mobile: {
      width: 329,
      height: 173.6,
      top: 614,
      left: 31,
    },
    component: Pattern,
  }
]