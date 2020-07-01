import { shallowMount } from '@vue/test-utils';
import { Home } from '../../../src/screens/';

describe('Home', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper).toMatchSnapshot();
  });
});
