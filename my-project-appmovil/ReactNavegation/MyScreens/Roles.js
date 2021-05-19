import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
import NewsCard from '../Components/Roles'
import newAPI from '../Services/Apis'
import axios from 'axios'

const News = ({ navigation }) => {

    // const [news, setNews] = useState([])
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsFromAPI()
    }, [])

    // const newsResponse = async() =>{
    //     const response = await newAPI.get('top-headlines?country=us&apiKey=aa6a097fb9fb4509958fdabd1942e6d1')
    //     console.log(response.data)
    // }

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