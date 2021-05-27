import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import RolesStack from "./RolesStack"
import ListRolesStack from "./ListRolesStack"
import UpdateRoles from "./UpdateStack"
import ListUsuario from "./ListUsuario"
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function Navigation () {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="addroles" component={RolesStack} options={{ title: "Agregar"}} />
                <Tab.Screen name="getroles" component={ListRolesStack} options={{ title: "Listar"}} />
                <Tab.Screen name="updateroles" component={UpdateRoles} options={{ title: "Actualizar"}} />
                <Tab.Screen name="getusuarios" component={ListUsuario} options={{ title: "Usuario"}} />
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}