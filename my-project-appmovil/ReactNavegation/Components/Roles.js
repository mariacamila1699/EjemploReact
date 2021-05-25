import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { color } from 'react-native-reanimated'

const { width, height } = Dimensions.get('window')

const NewsCard = ({item }) => {
    return (
        <View style={styles.cardView}>
            <Text>{item._id}</Text>
            <Text>{item.tipo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        borderColor: "#20232a",
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
        
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