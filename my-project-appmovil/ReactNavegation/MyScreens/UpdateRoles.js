import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TextInput, Button, FlatList, Alert } from 'react-native'
import NewsCard from '../Components/Roles'
import newAPI from '../Services/Apis'



export default function UpdateRoles() {

    const [news, setNews] = useState([]);
    const [text, onChangeText] = useState([]);

useEffect(() => {
    getNewsFromAPI()
}, [])

function getNewsFromAPI() {
    newAPI.get('Roles')
        .then(async function (response) {
            setNews(response.data.Rol);

        })
        .catch(function (error) {
            console.log(error)
        })
}

function update () {
    console.log(text.id)
    // text.forEach(function (x){
    //     console.log(x.text)
         newAPI.put(`Roles/${text.id}`, {
                tipo: text.text
            })
            .then(function (response){
                console.log("Actualizado enviado")
                Alert.alert('Actualizado exitosamente')
                this.getNewsFromAPI();
            })
    //})
    
}

    return(
        <View>
            <View>
            {news.map((item, i) => (
                <TextInput  
                style={{ height: 40, margin: 12, borderWidth: 2, borderRadius: 20}} 
                onChangeText={(text) => onChangeText({text: text, id: item._id })}
                defaultValue={item.tipo}
                key={item._id}
                />
            ))}
            </View>
            <Button
                    style={{textAlign: "center", marginVertical: 30, borderRadius: 4, width: 50,}}
                    title="Update"
                    color="#ff1493"
                    onPress={update}
                  />
        </View>
    )
}