import { shallowMount } from '@vue/test-utils';
import { Experience } from '../../../src/screens/';

describe('Experience', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(Experience);
    expect(wrapper).toMatchSnapshot();
  });
});
