import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'


const { width  } = Dimensions.get('window')

const NewsCard = ({item }) => {
    return (
        <View style={styles.cardView}>
            <Text style={styles.title}>{item._id}</Text>
            <Text style={styles.title}>{item.nombre}</Text>
            <Text style={styles.title}>{item.apellido}</Text>
            <Text style={styles.title}>{item.correo}</Text>
            <Text style={styles.title}>{item["roles"].tipo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: '#ff69b4',
        borderColor: "#20232a",
        margin: width * 0.03,
        borderRadius: width * 0.07,
       
        
        
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'

    },
    

})

export default NewsCard
