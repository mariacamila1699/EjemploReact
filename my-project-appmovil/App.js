import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';


const movieURL = "http://localhost:4000/api/Roles"


const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch(movieURL)
    .then((response) => response.json())
    .then((json) => setData(json.Rol))
    .catch((error) => aler(error))
    .finally(setLoading(false));

  });

  return ( 
  
     <SafeAreaView style={styles.container}>
       {isLoading ? (
         <ActivityIndicator /> 
       ) : ( 
         <FlatList 
           data={data} 
           keyExtractor={({id}, index) => id}
           renderItem={({item}) => {
             return (
               <Text>
                 {item.tipo}
               </Text>
           );
         }}
         
         />
       ) 
       }
     </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

