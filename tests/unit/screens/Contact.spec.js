import { shallowMount } from '@vue/test-utils';
import { Contact } from '../../../src/screens/';

describe('Contact', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(Contact);
    expect(wrapper).toMatchSnapshot();
  });
});
