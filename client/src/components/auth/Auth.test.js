import React from 'react';
import Auth from './Auth';
import { shallow } from 'enzyme';


jest.mock('../../routes/routes.js', () => ({
  ROUTES: {
    SIGNUP: {
      linkTo: () => '/'
    },
    SIGNIN: {
      linkTo: () => '/'
    }
  }
}));

describe('Auth component', () => {

  it('matches snapshot', () => {
    const wrapper = shallow(<Auth loginType='Sign Up' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('shows appropriate questions for new user', () => {
    const wrapper = shallow(<Auth loginType='Sign Up'/>);
    expect(wrapper.html()).toContain('Are You a Nanny or a Family?');
    expect(wrapper.html()).toContain('Already Have an Account?');
    expect(wrapper.html()).not.toContain('New to Nanny Now?');
  });

  it('shows appropriate questions for existing user', () => {
    const wrapper = shallow(<Auth loginType='Sign In'/>);
    expect(wrapper.html()).not.toContain('Already Have an Account?');
    expect(wrapper.html()).not.toContain('Are You a Nanny or a Family?');
    expect(wrapper.html()).toContain('New to Nanny Now?');
  });
});
