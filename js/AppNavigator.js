import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PostScreen from './screens/Post';
import PostsScreen from './screens/Posts';

const HomeStack = createStackNavigator(
  {
    Posts: {
      screen: PostsScreen,
      navigationOptions: { headerTitle: 'Posts' },
    },
    Post: {
      screen: PostScreen,
      navigationOptions: { headerTitle: 'Post' },
    },
  },
  {
    initialRouteName: 'Posts',
  },
);

export default createAppContainer(HomeStack);
