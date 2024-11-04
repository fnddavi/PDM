import { createDrawerNavigator } from '@react-navigation/drawer';
import Mania from '../screens/megasena';
import Mega from '../screens/quina';
import Quina from '../screens/timemania';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName='Mega'>
            <Drawer.Screen name="Quina" component={Quina} />
            <Drawer.Screen name="Mania" component={Mania} />
            <Drawer.Screen name="Mega" component={Mega} />
        </Drawer.Navigator>
    );
}
//