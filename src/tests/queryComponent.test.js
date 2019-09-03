import QueryComponent from '../components/Query';
import { MockedProvider } from '@apollo/react-testing';
import wait from 'waait';
import { lagosJavaDevelopers } from '../helpers/queries';

const mocks = {
  request: {
    query: lagosJavaDevelopers
  },
  result: {
    data: {
      search: {
        edges: [
          {
            node: {
              name: 'name',
              login: 'login',
              avatarUrl: 'https://avatars1.githubusercontent.com/u/2946769?v=4',
              starredRepositories: {
                totalCount: 648
              },
              repositories: {
                totalCount: 172
              },
              followers: {
                totalCount: 2251
              },
              following: {
                totalCount: 68
              },
              projects: {
                totalCount: 0
              }
            }
          }
        ]
      }
    }
  }
};
describe('ListScreen tests', () => {
  const props = { navigation: { navigate: jest.fn() } };
  it('should render with mocked query', async () => {
    const wrapper = shallow(
      <MockedProvider mocks={[mocks]} addTypename={false}>
        <QueryComponent {...props} />
      </MockedProvider>
    );
    await wait(0);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render without error', () => {
    const wrapper = shallow(<QueryComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
