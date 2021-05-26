import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import UpdateRoles from "../MyScreens/UpdateRoles"

const Stack = createStackNavigator();


export default function UpdateStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="getroles" component={UpdateRoles} options={{ title:"Actualizar"}} />
        </Stack.Navigator>
    )
}