import { shallowMount } from '@vue/test-utils';
import { InfoCardList } from '../../../src/components/';

const iconName = 'mock icon name',
  title = 'mock title',
  informations = [
    {
      nameOfOrganization: 'mock  organization',
      startYear: '2020',
      endYear: '2020',
      details: 'mock details',
    },
  ];

describe('InfoCardList', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(InfoCardList, {
      propsData: { iconName, informations, title },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
