import { shallowMount } from '@vue/test-utils';
import { About } from '../../../src/screens/';

describe('About', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(About);
    expect(wrapper).toMatchSnapshot();
  });
});
