
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation'

import HomePage from "../pages/HomePage"
import Page1 from "../pages/Page1"
import Page2 from "../pages/Page2"

const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
    },
    Page1:{
        screen: Page1,
        navigationOptions:{
            header:null
        }
    },
    Page2:{
        screen: Page2
    }
});

export default App = createAppContainer(AppStackNavigator)
