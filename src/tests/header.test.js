import Header from '../components/header';

describe('header component test', () => {
  const props = { navigation: { navigate: jest.fn() } };
  it('renders without error', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('call signout method', () => {
    const wrapper = shallow(<Header {...props} />);
    const button = wrapper.find('TouchableOpacity');
    button.props().onPress();
  });
  it('test onPress signout', () => {
    const wrapper = shallow(<Header {...props} />);
    wrapper.instance().signOut = jest.fn();
    wrapper.instance().forceUpdate();
    const button = wrapper.find('TouchableOpacity');
    button.props().onPress();
    expect(wrapper.instance().signOut).toHaveBeenCalled();
  });
});
