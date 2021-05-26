import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Roles from "../MyScreens/Roles"

const Stack = createStackNavigator();


export default function RolesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="addroles" component={Roles} options={{ title:"Agregar"}} />
        </Stack.Navigator>
    )
}