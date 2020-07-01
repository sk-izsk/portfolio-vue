import { shallowMount } from '@vue/test-utils';
import { Education } from '../../../src/screens/';

describe('Education', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(Education);
    expect(wrapper).toMatchSnapshot();
  });
});
