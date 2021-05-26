import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import ListRoles from "../MyScreens/ListRoles"

const Stack = createStackNavigator();


export default function RolesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="getroles" component={ListRoles} options={{ title:"Listar"}} />
        </Stack.Navigator>
    )
}