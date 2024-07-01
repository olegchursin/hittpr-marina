import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  businessEthics,
  businessOwnership,
  contentDeveloping,
  documentaryProduction,
  filmDirection,
  investigativeReporting,
  leadership,
  mediaRelations,
  networking,
  strategicPlanning
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true
  },
  skillSets: [
    {
      title: 'PR & Journalism',
      skills: [
        strategicPlanning(),
        investigativeReporting(),
        leadership(),
        businessEthics(),
        mediaRelations(),
        businessOwnership(),
        contentDeveloping(),
        networking()
      ]
    },
    {
      title: 'Film',
      skills: [filmDirection(), documentaryProduction()]
    },
    {
      title: 'Languages',
      skills: [
        { icon: 'circle-flags:us', name: 'English' },
        { icon: 'circle-flags:ru', name: 'Russian' }
      ]
    }
  ]
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
