import { shallowMount } from '@vue/test-utils';
import { InfoCard } from '../../../src/components/';

const iconName = 'mock icon name',
  informations = [
    {
      nameOfOrganization: 'mock  organization',
      startYear: '2020',
      endYear: '2020',
      details: 'mock details',
    },
  ];

describe('InfoCard', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(InfoCard, {
      propsData: { iconName, informations },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
