import { shallowMount } from '@vue/test-utils';
import { NavBar } from '../../../src/components/';

describe('NavBar', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(NavBar);
    expect(wrapper).toMatchSnapshot();
  });
});
