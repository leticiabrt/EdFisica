import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { Noticias, Checkins, Cronograma, Perfil, Reservas, Times } from '../screens';
import { styles } from "./styles";

type MenuDrawerParam = {
    Noticias: undefined
    Checkins: undefined
    Cronograma: undefined
    Perfil: undefined
    Reservas: undefined
    Times: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Noticias">
export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation
}
export function MenuDrawer() {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator screenOptions={styles} >
            <Drawer.Screen name="Noticias" component={Noticias} />
            <Drawer.Screen name="Checkins" component={Checkins} />
            <Drawer.Screen name="Cronograma" component={Cronograma} />
            <Drawer.Screen name="Perfil" component={Perfil} />
            <Drawer.Screen name="Reservas" component={Reservas} />
            <Drawer.Screen name="Times" component={Times} />
        </Drawer.Navigator>
         
    );
}

