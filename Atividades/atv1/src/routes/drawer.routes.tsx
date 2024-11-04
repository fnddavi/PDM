import { createDrawerNavigator } from '@react-navigation/drawer';
import Mega from '../screens/megasena';
import Quina from '../screens/quina';
import Time from '../screens/timemania';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName='Mega'>
            <Drawer.Screen name="Quina" component={Quina} />
            <Drawer.Screen name="Timemania" component={Time} />
            <Drawer.Screen name="Mega-Sena" component={Mega} />
        </Drawer.Navigator>
    );
}
//