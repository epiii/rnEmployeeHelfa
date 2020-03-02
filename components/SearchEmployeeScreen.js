import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput, } from 'react-native-gesture-handler'
// import { InputAutoSuggest } from 'react-native-autocomplete-search';

class SearchEmployeeScreen extends Component {
    state = {
        searchTxt: '',
        nameTxt: '',
        ageTxt: '',
        salaryTxt: '',
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Text> employee form's add </Text> */}

                <TouchableOpacity
                    onPress={() => alert('wkwkw')}
                    style={{
                        flex: 1 / 5,
                        alignContent: 'flex-start',
                        backgroundColor: 'red',
                        // justifyContent: "center",
                    }}>
                    <View>
                        <Text> photo</Text>
                    </View>
                </TouchableOpacity >

                <View style={{
                    flex: 2 / 5,
                    alignContent: 'flex-start'
                    // backgroundColor: 'red',
                    // justifyContent: "center",
                }}>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // backgroundColor: 'yellow'
                    }}>
                        <Text>icon</Text>

                        <View style={{ backgroundColor: '#cfcfcf', height: 1 }} />
                    </View>
                </View>


                <View style={{
                    // backgroundColor: 'red',
                    flex: 2 / 5,
                    justifyContent: "center",
                    alignContent: 'flex-end'
                }}>
                    <TextInput
                        placeholder="name"
                        value={this.state.nameTxt}
                    />
                    <TextInput
                        placeholder="age"
                        value={this.state.ageTxt}
                    />
                    <TextInput
                        placeholder="salary"
                        value={this.state.salaryTxt}
                    />
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    }
})
export default SearchEmployeeScreen
