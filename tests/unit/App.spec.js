import { shallowMount } from '@vue/test-utils';
import App from '../../src/App';

describe('App', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(App);
    expect(wrapper).toMatchSnapshot();
  });
});
