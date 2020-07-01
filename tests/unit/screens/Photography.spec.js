import { shallowMount } from '@vue/test-utils';
import { Photography } from '../../../src/screens/';

describe('Photography', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(Photography);
    expect(wrapper).toMatchSnapshot();
  });
});
