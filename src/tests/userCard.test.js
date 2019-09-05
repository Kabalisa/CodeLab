import UserCard from '../components/userCard';
describe('UserCard component test', () => {
  const props = {
    navigation: { navigate: jest.fn() },
    item: { node: { avatarUrl: 'avatarUrl', login: 'name' } }
  };
  it('renders without error', () => {
    const wrapper = shallow(<UserCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('press on the image', () => {
    const wrapper = shallow(<UserCard {...props} />);
    const imageButton = wrapper.find('[id="image"]');
    imageButton.props().onPress();
  });
  it('press on the name', () => {
    const wrapper = shallow(<UserCard {...props} />);
    const nameButton = wrapper.find('[id="name"]');
    nameButton.props().onPress();
  });
});
