import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TextInput, Button, FlatList, Alert } from 'react-native'
import NewsCard from '../Components/Usuario'
import newAPI from '../Services/Apis'


const News = ({ navigation }) => {


    const [news, setNews] = useState([]);
    const [nombre, setNombre] = useState('');

    
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [roles, setRoles] = useState('');

    useEffect(() => {
        getNewsFromAPI()
    }, [])

    function enviar() {
        newAPI.post('Usuario', {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            roles: roles
        })
            .then(function (response) {
                console.log("Registro enviado")
                Alert.alert('Registrado exitosamente')
            })
    }

    function getNewsFromAPI() {
        newAPI.get('Usuario')
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
            <FlatList data={news.usuario}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => {
                    return <NewsCard item={item} />
                }}
            />

            <View style={{ padding: 25,  }}>
                <Text style={{ fontSize: 20, textAlign: "center" }}>AGREGAR USUARIO</Text>


                <TextInput
                    style={{ height: 55, borderWidth: 2, borderRadius: 15, marginBottom:20 }}
                    placeholder="Nombre"
                    onChangeText={nombre => setNombre(nombre)}
                    value={nombre}
                    
                />

                <TextInput
                    style={{ height: 55, borderWidth: 2, borderRadius: 15, marginBottom:20 }}
                    placeholder="apellido"
                    onChangeText={apellido => setApellido(apellido)}
                    value={apellido}
                />
                <TextInput
                    style={{height: 55, borderWidth: 2, borderRadius: 15, marginBottom:20}}
                    placeholder="correo"
                    onChangeText={correo => setCorreo(correo)}
                    value={correo}
                />
                <TextInput
                    style={{height: 55, borderWidth: 2, borderRadius: 15, marginBottom:20}}
                    placeholder="roles"
                    onChangeText={roles => setRoles(roles)}
                    value={roles}
                />

                <Button
                    style={{ textAlign: "center", marginVertical: 20, borderRadius: 25, width: 50 }}
                    title="Enviar"
                    color="#ff1493"
                    onPress={enviar}
                />
            </View>


        </View>


    )
}

export default News