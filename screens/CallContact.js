import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { SharedElement } from 'react-navigation-shared-element'

const CallContact = ({ route }) => {

    const FIRSTNAME = route.params?.name.first
    const LASTNAME = route.params?.name.last
    const id = route.params?.login.uuid

    return (

        <SafeAreaView style={styles.container}>
            <View style={[styles.profile]}>
                <View style={{ flexDirection: 'row' , alignItems: 'center',}}>
                    <View style={[styles.button, styles.centered]}>
                        <AntDesign name="message1" size={40} color='red' />
                    </View>
                    <View style={[styles.centered, styles.profilePicture]}>
                        <SharedElement id={id}>
                            <Image resizeMode='cover'
                                style={styles.image}
                                source={{ uri: route.params.picture.large }} />
                        </SharedElement>
                    </View>
                    <View style={[styles.button, styles.centered]}>
                        <AntDesign name="phone" size={40} color='green' />
                    </View>
                </View>
                <Text style={styles.profileText}>{`${FIRSTNAME} ${LASTNAME}`}</Text>
            </View>
            <View style={styles.centered}>
                <View style={[styles.card, styles.centered]}>
                    <Text> Mobile</Text>
                    <Text style={styles.mainInfo}> + {(route.params.phone)} </Text>
                </View>
                <View style={[styles.card, styles.centered]}>
                    <Text> Email </Text>
                    <Text style={styles.mainInfo}> {route.params.email} </Text>
                </View>
                <View style={[styles.card, styles.addNotes]}>
                    <Text style={styles.notes}> Notes </Text>
                    <TextInput style={styles.textInput} />
                </View>
                <View style={[styles.card, styles.centered]}>
                    <Text> Location </Text>
                    <Text style={styles.mainInfo}> {route.params.location.city + ', ' +
                        route.params.location.state + ', ' + route.params.location.country} </Text>
                </View>
            </View>
        </SafeAreaView>

    )

}

export default CallContact

const styles = StyleSheet.create({

    textInput: {
        width: '100%',
        height: '35%',
        alignItems: 'flex-start'
    },
    addNotes: {
        height: 150,
    },
    image: {
        height: 160,
        width: 180,
        borderRadius: 90
    },
    notes: {
        alignSelf: 'flex-start',
        marginTop: 10
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    fakeMenu: {
        margin: 10,
        color: 'blue'
    },

    mainInfo: {
        color: 'blue',
        margin: 8,
    },

    profileText: {
        marginTop: '5%',
        fontSize: 20,
        color: '#000',
        textAlign: 'center'
    },
    profilePicture: {
        height: 100,
        width: 100,
        borderRadius: 50,
        margin: 20,
    },

    card: {
        height: 70,
        width: '95%',
        backgroundColor: 'white',
        margin: 15,
        borderRadius: 10
    },

    button: {
        height: 100,
        width: 80,
        margin: 20,
        borderRadius: 40,
    },
    profile: {
        paddingTop:20,
        height: '30%',
        width: '100%',
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
    }
})









