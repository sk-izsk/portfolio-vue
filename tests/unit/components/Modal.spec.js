import { shallowMount } from '@vue/test-utils';
import { Modal } from '../../../src/components/';

const description = 'mock description',
  showModal = true,
  title = 'mock title',
  iconName = 'mock Icon Name';

describe('Modal', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(Modal, {
      propsData: { description, showModal, title, iconName },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
