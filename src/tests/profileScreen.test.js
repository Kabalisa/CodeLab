import ProfileScreen from '../screens/profileScreen';
describe('ProfileScreen tests', () => {
  const props = {
    navigation: {
      getParam: jest.fn(item => {
        item = {
          node: {
            login: 'name',
            repositories: { totalCount: 5 },
            starredRepositories: { totalCount: 5 }
          }
        };
        return item;
      })
    }
  };
  it('should render without error', () => {
    const wrapper = shallow(<ProfileScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should press on share', () => {
    const wrapper = shallow(<ProfileScreen {...props} />);
    const shareButton = wrapper.find('[id="share"]');
    shareButton.props().onPress();
  });
  it('should press on open-in-app-browser', () => {
    const wrapper = shallow(<ProfileScreen {...props} />);
    const browserButton = wrapper.find('[id="browser"]');
    browserButton.props().onPress();
  });
});
