import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import ListUsuario from "../MyScreens/ListUsuario"

const Stack = createStackNavigator();


export default function RolesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="getusuario" component={ListUsuario} options={{ title:"Listar Usuarios"}} />
        </Stack.Navigator>
    )
}