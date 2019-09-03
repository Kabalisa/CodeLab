import LoginScreen from '../screens/loginScreen';
import { signIn, attemptToRestoreAuth } from '../screens/loginScreen';
describe('LoginScreen tests', () => {
  const props = { navigation: { navigate: jest.fn() } };
  it('should render without error', () => {
    const wrapper = shallow(<LoginScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('call the signin method', () => {
    const result = signIn();
    expect(result).not.toBe(null);
  });
  it('call the signin method', () => {
    const result = signIn('token');
    expect(result).not.toBe(null);
  });
  it('call the attemptToRestoreAuth method', () => {
    const result = attemptToRestoreAuth();
    expect(result).not.toBe(null);
  });
  it('onPress test', () => {
    const wrapper = shallow(<LoginScreen {...props} />);
    const button = wrapper.find('TouchableOpacity');
    button.props().onPress();
  });
});
