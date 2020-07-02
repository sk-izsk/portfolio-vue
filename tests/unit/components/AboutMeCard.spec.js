import { shallowMount } from '@vue/test-utils';
import { AboutMeCard } from '../../../src/components/';

describe('AboutMeCard', () => {
  it('renders when passed', () => {
    const url = 'mock url';
    const description = 'mock description';
    const buttonText = 'mock text';
    const header = ' mock header';

    const wrapper = shallowMount(AboutMeCard, {
      propsData: { url, description, buttonText, header },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
