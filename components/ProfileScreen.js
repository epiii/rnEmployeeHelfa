import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Profile Screen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default ProfileScreen
