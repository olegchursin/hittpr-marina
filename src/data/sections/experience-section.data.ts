import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, website } from '../helpers/links';
import {
  businessEthics,
  businessOwnership,
  contentDeveloping,
  investigativeReporting,
  leadership,
  mediaRelations,
  networking,
  strategicPlanning
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true
  },
  jobs: [
    {
      role: 'Founder',
      company: 'HITTPR',
      image: import('@/assets/logos/hittpr.jpeg'),
      dates: [new Date('2017-09'), null],
      description: `
        - Established HITTPR (hittpr.com), known for exceptional PR results and client satisfaction.
        - Lead the company's strategic vision and growth.
        - Develop and implement successful PR strategies.
        - Forge strong client relationships and achieve notable media coverage.
        - Establish a valuable industry network, enhancing service delivery.
        - Prioritize ethical and transparent business practices.
      `,
      tagsList: {
        title: 'Skills',
        tags: [strategicPlanning(), leadership(), mediaRelations()]
      },
      links: [website({ url: 'https://hittpr.com' })]
    },
    {
      role: 'Founder',
      company: 'Hot Hit New York',
      image: import('@/assets/logos/hhny.jpeg'),
      dates: [new Date('2017-09'), null],
      description: `
        - Found and lead HotHitNewYork.com, a popular NYC lifestyle blog.
        - Curate engaging content, driving traffic and user engagement.
        - Manage web design, content, and social media, ensuring a user-friendly experience.
        - Foster contributor relationships to diversify content and reach.
        - Forge local partnerships, enhancing credibility and revenue.
        - Keep content current, reflecting NYC's latest trends and events.
      `,
      tagsList: {
        title: 'Skills',
        tags: [businessOwnership(), networking(), businessEthics()]
      },
      links: [website({ url: 'https://hothitnewyork.com' })]
    },
    {
      role: 'Investigative Journalist',
      company: 'Self-employed',
      image: import('@/assets/logos/invest-j.png'),
      dates: [new Date('2010-02'), new Date('2018-05')],
      description: `
        - Created the investigative documentary film "8 Years for Self-Defense." 2010-2011
        - Produced the creation of the investigative documentary film "Anti-Corruption Epidemic." 2011-2012
        - Produced a video showcasing the "Berendeevo Kingdom" project 2013
        - Created and led a project: "Let's Help Varechka: The Story of a Girl Who Has Been Living with a Tube in Her Throat for Four Years." 2018
      `,
      tagsList: {
        title: 'Skills',
        tags: [investigativeReporting()]
      },
      links: [
        linkedin({ url: 'https://www.linkedin.com/in/marina-hitt-17440b305/' })
      ]
    },
    {
      role: 'Reporter / Producer',
      company: 'MTV Russia',
      image: import('@/assets/logos/mtv.jpeg'),
      dates: [new Date('2010-02'), new Date('2018-05')],
      description: `
        - Edited and contributed regularly to the talk show "Tell Me, Girls." 2012
        - Created and produced special projects for MTV, including "Athletes: The Country's Enviable Suitors," "Behind the Scenes of TV Project: Vacations in Mexico," "Mario Casas: Three Meters Above the Sky," and "Staying Alive: The Whole Truth About the End of the World." 2013 
        - Reported for Tain.net on "No More Mysteries." 2013
      `,
      tagsList: {
        title: 'Skills',
        tags: [contentDeveloping()]
      },
      links: [
        linkedin({ url: 'https://www.linkedin.com/in/marina-hitt-17440b305/' })
      ]
    }
  ]
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
