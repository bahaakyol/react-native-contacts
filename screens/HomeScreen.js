import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, View, Text, FlatList, Image, SafeAreaView } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import axios from 'axios'
import { SharedElement } from 'react-navigation-shared-element'

const HomeScreen = ({ navigation }) => {

  const BACKEND_URL = "https://www.randomuser.me/api/"

  const [datas, setDatas] = useState([])

  async function getData() {
    const response = await axios.get(BACKEND_URL + '?results=20')
    setDatas(response.data.results)
  }

  useEffect(() => {
    getData()
  }, [])
 
  function onPress(item) {
    navigation.navigate({name : 'CallContact', params: {...item}})
  }

  const Item = ({ title, email, img, onPress ,id}) => {

    return (
      <Pressable style={styles.item} onPress={onPress}>
        <View style={{ flexDirection: 'row' , flex: 1}}>
          <SharedElement id = {id}>
          <Image resizeMode='cover'
            style={styles.image}
            source={{ uri: img }} />
            </SharedElement>
          <View>
            <Text style={styles.contact}>{title}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
          <View style = {styles.pressable}>
            <Feather name="info" size={25} color='green' />
          </View>
        </View>
      </Pressable>
    )
  }

  const renderItem = ({ item }) => (
    <Item title={`${item.name.first} ${item.name.last}`}
      email={item.email}
      onPress={() => onPress(item)}
      img={item.picture.large} 
      id = {item.login.uuid}
      />

  )

  return (
    
      <SafeAreaView style={styles.container}>
        <View style={[styles.centered, styles.container]}>
          <View style={styles.information}>
            <FlatList
              data={datas}
              renderItem={renderItem}
              keyExtractor={item => item.login.uuid}
            />
          </View>
        </View>
      </SafeAreaView>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
     height: 50, 
     width: 50, 
     borderRadius: 25 
  },
  row: {
    flexDirection: 'row'
  },
  profileText: {
    fontSize: 20,
    color: '#000',
  },
  profilePicture: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'red',
    margin: 20,
  },

  button: {
    height: 100,
    width: 80,
    backgroundColor: 'black',
    margin: 20,
    borderRadius: 40,
  },

  profile: {
    height: '10%',
    width: '100%',
    backgroundColor: 'white'
  },
  information: {
    flex: 3,
    backgroundColor: '#fff',
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
    flexDirection: 'row',
    width:'100%'
  },
  title: {
    fontSize: 32,
  },
  contact: {
    fontSize: 20,
    marginLeft: 25,
    color: '#000'
  },
  email: {
    fontSize: 12,
    marginLeft: 25,
    color: '#F0005F'
  },
  pressable: {
    alignSelf: 'center',
    marginLeft: 'auto',
    margin:5
  },
  load: {
    opacity: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
  }
})