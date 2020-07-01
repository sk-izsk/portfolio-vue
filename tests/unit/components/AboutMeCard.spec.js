import { shallowMount } from '@vue/test-utils';
import { AboutMeCard } from '../../../src/components/';

describe('AboutMeCard', () => {
  it('renders when passed', () => {
    const url = 'mock url';
    const wrapper = shallowMount(AboutMeCard, {
      propsData: { url },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
