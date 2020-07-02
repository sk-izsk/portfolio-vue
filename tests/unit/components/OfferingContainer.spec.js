import { shallowMount } from '@vue/test-utils';
import { OfferingContainer } from '../../../src/components/';

describe('OfferingContainer', () => {
  it('renders when passed', () => {
    const title = 'mock title';
    const offerings = ['mock data'];

    const wrapper = shallowMount(OfferingContainer, {
      propsData: { title, offerings },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
