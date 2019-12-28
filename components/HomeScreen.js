import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.menuRow}>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Employee')}
                        // onPress={() => alert('all employees')}
                        style={styles.menuItem}
                    >
                        <View style={styles.menuItemIcon}>
                            <Text>icon</Text>
                        </View>
                        <View style={styles.menuItemTxt}>
                            <Text>All Employees</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: 'white',
    },
    menuRow: {
        flex: 1,
        // backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    menuItem: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    menuItemIcon: {
        flex: 1 / 4,
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: 15,
    },
    menuItemTxt: {
        marginTop: 10,
    },
})
export default HomeScreen
