import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6 } from '../screens';
import { styles } from "./styles";

type MenuDrawerParam = {
    Slide1: undefined
    Slide2: undefined
    Slide3: undefined
    Slide4: undefined
    Slide5: undefined
    Slide6: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Slide1">
export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation
}
export function MenuDrawer() {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator screenOptions={styles} >
            <Drawer.Screen name="Slide1" component={Slide1} />
            <Drawer.Screen name="Slide2" component={Slide2} />
            <Drawer.Screen name="Slide3" component={Slide3} />
            <Drawer.Screen name="Slide4" component={Slide4} />
            <Drawer.Screen name="Slide5" component={Slide5} />
            <Drawer.Screen name="Slide6" component={Slide6} />
        </Drawer.Navigator>
    );
}

