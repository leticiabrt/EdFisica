import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { Noticias, Checkins, Perfil, Reservas, Times, Testes, Cronograma2 } from '../screens';
import { styles } from "./styles";
import { colors } from '../styles/globalstyles'
import { Image } from 'react-native';

type MenuDrawerParam = {
    Noticias: undefined
    Checkins: undefined
    Perfil: undefined
    Reservas: undefined
    Times: undefined
    Cronograma: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Noticias">
export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation
}


  

export function MenuDrawer() {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
   
    return (
        <Drawer.Navigator  
        screenOptions={{
            headerStyle: {backgroundColor: colors.primary},
            headerTitle:()=> <Image style={styles.cabecalho} source={require('../assets/cabecalho.png') }  /> ,
            drawerContentStyle: {backgroundColor: colors.primary}
        }} >
            <Drawer.Screen name="Noticias" component={Noticias} />
            <Drawer.Screen name="Checkins" component={Checkins} />
            <Drawer.Screen name="Perfil" component={Perfil} />
            <Drawer.Screen name="Reservas" component={Reservas} />
            <Drawer.Screen name="Times" component={Times} />
            <Drawer.Screen name="Cronograma" component={Cronograma2} />
        </Drawer.Navigator>
         
    );
}

