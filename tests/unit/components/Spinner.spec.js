import { shallowMount } from '@vue/test-utils';
import { Spinner } from '../../../src/components/';

const variant = 'primary';

describe('Spinner', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(Spinner, {
      propsData: { variant },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
