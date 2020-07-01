import { shallowMount } from '@vue/test-utils';
import { ProgressContainer } from '../../../src/components/';

const skilsInformations = [{ name: 'React', progress: 80, backgroundColor: '#FFD15C' }];

describe('ProgressContainer', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(ProgressContainer, {
      propsData: { skilsInformations },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
