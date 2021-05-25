import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TextInput, Button, FlatList, Alert } from 'react-native'
import NewsCard from '../Components/Roles'
import newAPI from '../Services/Apis'
import axios from 'axios'

const News = ({ navigation }) => {

    // const [news, setNews] = useState([])
    const [news, setNews] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        getNewsFromAPI()
    }, [])

    // const newsResponse = async() =>{
    //     const response = await newAPI.get('top-headlines?country=us&apiKey=aa6a097fb9fb4509958fdabd1942e6d1')
    //     console.log(response.data)
    // }
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
            <View>
            <FlatList data={news.Rol}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <NewsCard item = {item}/>
                }}
            />
            </View>
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40, borderWidth: 1,}}
                    placeholder="Nombre Rol"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
                 <Button
                    style={{textAlign: "center", marginVertical: 8}}
                    title="Enviar"
                    color="#f194ff"
                    onPress={enviar}
                  />
            </View>
        </View>
    )
}

export default News