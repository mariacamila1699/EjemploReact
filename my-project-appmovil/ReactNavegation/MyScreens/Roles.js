import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TextInput, Button, FlatList, Alert } from 'react-native'
import NewsCard from '../Components/Roles'
import newAPI from '../Services/Apis'


const News = ({ navigation }) => {

    
    const [news, setNews] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        getNewsFromAPI()
    }, [])

    
     function enviar () {
        newAPI.post('Roles', {
            tipo: text
        })
        .then(function (response){
            console.log("Registro enviado")
            Alert.alert('Registrado exitosamente')
        })
    }

    function getNewsFromAPI() {
        newAPI.get('Roles')
            .then(async function (response) {
                setNews(response.data);
                
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    if (!news) {
        return null
    }



    return (
        <View>
           
            <View style={{padding: 25}}>
            <Text style={{fontSize: 20,textAlign: "center"}}>AGREGAR Rol</Text>
            
                <TextInput
                    style={{height: 40, borderWidth: 1, borderRadius: 20,}}
                    placeholder="Nombre Rol"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
                 <Button
                    style={{textAlign: "center", marginVertical: 10, borderRadius: 5}}
                    title="Enviar"
                    color="#f194ff"
                    onPress={enviar}
                  />
            </View>
        </View>
    )
}

export default News