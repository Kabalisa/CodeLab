import HomeScreen from '../screens/homeScreen';

describe('HomeScreen tests', () => {
  const props = { navigation: { navigate: jest.fn() } };
  it('should render without error', () => {
    const wrapper = shallow(<HomeScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should press navigate to login', () => {
    const wrapper = shallow(<HomeScreen {...props} />);
    const button = wrapper.find('TouchableOpacity');
    button.props().onPress();
  });
});
