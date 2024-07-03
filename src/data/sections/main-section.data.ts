import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { imdb, linkedin, telegram, youtube } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true
  },
  image: import('@/assets/marina-hitt-headshot.jpg'),
  fullName: 'Marina Hitt',
  role: 'Award-winning director, producer.',
  details: [
    {
      label: 'Email',
      value: 'marina@hittpr.com',
      url: 'mailto:marina@hittpr.com'
    },
    { label: 'HITTPR', value: 'hittpr.com', url: 'https://hittpr.com' },
    { label: 'From', value: 'New York, NY' },
    {
      label: 'HHNY',
      value: 'hothitnewyork.com',
      url: 'https://hothitnewyork.com'
    }
  ],
  pdfDetails: [
    { label: 'Phone', value: '605 475 6961' },
    { label: 'Email', value: 'marina@hittpr.com' },
    {
      label: 'LinkedIn',
      value: '/in/mark-freeman',
      url: 'https://linkedin.com'
    },
    { label: 'GitHub', value: '/mark-freeman', url: 'https://github.com' },
    {
      label: 'Website',
      value: 'mark-freeman-personal-website.com',
      url: '/',
      fullRow: true
    }
  ],
  description:
    'An award-winning documentary filmmaker and founder of HITTPR and Hot Hit New York, Marina brings a distinctive blend of expertise in public relations, media production, and investigative journalism. Based in New York, Marina has spent nearly a decade enhancing brands and driving impactful PR campaigns for high-profile clients.',
  tags: [
    { name: 'Film direction', url: 'https://greg.hittpr.com' },
    { name: 'Documentary production', url: 'https://greg.hittpr.com' },
    { name: 'Public relations', url: 'https://hittpr.com' },
    { name: 'Journalism', url: 'https://hittpr.com' }
  ],
  action: {
    label: 'Download Resume',
    url: '/marina-hitt-resume.pdf',
    downloadedFileName: 'marina_hitt_resume.pdf'
  },
  links: [
    imdb({ url: 'https://www.imdb.com/name/nm16016535/' }),
    linkedin({ url: 'https://www.linkedin.com/in/marina-hitt-17440b305/' }),
    youtube({
      url: 'https://www.youtube.com/channel/UC5Y7mWK-FtD3nh_AG367y-g'
    }),
    telegram({ url: 'https://t.me/hitt_pr_nyc' })
  ]
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
