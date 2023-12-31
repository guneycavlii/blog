import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from "./src/screens/indexScreen";
import {Provider as BlogProvider} from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";


const navigator = createStackNavigator(
    {
        Index: IndexScreen,
        Create: CreateScreen,
        Show: ShowScreen,
        Edit: EditScreen
    },
    {
        initialRouteName: 'Index',
        defaultNavigationOptions: {
            title: 'Blogs',
        }
    }
);

const App = createAppContainer(navigator);

export default () => {
    return <BlogProvider>
        <App/>
    </BlogProvider>;
}
