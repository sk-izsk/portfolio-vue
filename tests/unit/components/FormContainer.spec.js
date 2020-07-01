import { shallowMount } from '@vue/test-utils';
import { FormContainer } from '../../../src/components/';

describe('FormContainer', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(FormContainer);
    expect(wrapper).toMatchSnapshot();
  });
});
