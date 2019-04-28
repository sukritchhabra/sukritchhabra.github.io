import React from 'react';
import { shallow } from 'enzyme';
import Navbar from 'components/Navbar';

describe('Navbar.jsx', () => {
  const wrapper = shallow(<Navbar />);

  test('renders', () => {
    expect(wrapper.exists()).toBeTruthy();

    const navbar = wrapper.find('h1');
    expect(navbar).toHaveLength(1);
    expect(navbar.text()).toEqual('Sukrit Chhabra');
  });

  test('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
