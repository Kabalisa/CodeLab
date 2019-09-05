import Footer from '../components/footer';

describe('Footer component test', () => {
  it('should render without error', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
