import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TextInput, Button, FlatList, Alert , Image} from 'react-native'
import NewsCard from '../Components/Roles'
import newAPI from '../Services/Apis'

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      justifyContent: 'center',
      alignItems: 'center', 
    },
    stretch: {
      justifyContent: 'center',
      alignItems: 'center',  
      width: 250,
      height: 250,
      borderRadius: 25,
      alignContent: 'center',
      resizeMode: 'stretch',
    },
  });




const News = ({ navigation }) => {

    
    const [news, setNews] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        getNewsFromAPI()
    }, [])


    function enviar() {
        newAPI.post('Roles', {
            tipo: text
        })
            .then(function (response) {
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

            <View style={{ padding: 25 }}>
                <View style={styles.container}>
                    <Image
                        
                        style={styles.stretch}
                        source={
                            require('./imagen1.png') 
                        }
                    />

                </View>
                <Text style={{ fontSize: 20, textAlign: "center" , marginBottom: 25}}>AGREGAR ROL</Text>


                <TextInput
                    style={{ height: 55, borderWidth: 2, borderRadius: 25,  marginBottom: 25}}
                    placeholder="Nombre Rol"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />

                <Button
                    style={{ textAlign: "center", marginVertical: 25, borderRadius: 4, width: 50 }}
                    title="Enviar"
                    color="#ff1493"
                    onPress={enviar}
                />
            </View>
        </View>
    )
}

export default News