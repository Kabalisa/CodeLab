import ListScreen from '../screens/listScreen';

describe('ListScreen tests', () => {
  const props = { navigation: { navigate: jest.fn() } };
  it('should render without error', () => {
    const wrapper = shallow(<ListScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
