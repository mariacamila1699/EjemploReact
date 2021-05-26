import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TextInput, Button, FlatList, Alert } from 'react-native'
import NewsCard from '../Components/Roles'
import newAPI from '../Services/Apis'


const News = ({ navigation }) => {

    
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsFromAPI()
    }, [])


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
            <FlatList data={news.Rol}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <NewsCard item = {item}/>
                }}
            />
        </View>
    )
}

export default News