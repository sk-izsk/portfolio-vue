import { shallowMount } from '@vue/test-utils';
import { MyOffer } from '../../../src/screens/';

describe('MyOffer', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(MyOffer);
    expect(wrapper).toMatchSnapshot();
  });
});
