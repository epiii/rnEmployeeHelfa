import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput, } from 'react-native-gesture-handler'
// import { InputAutoSuggest } from 'react-native-autocomplete-search';

class EmployeeScreen extends Component {
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
                        {/* <InputAutoSuggest
                            style={{ flex: 1 }}
                            staticData={[
                                { id: '1', name: 'Paris' },
                                { id: '2', name: 'Pattanduru' },
                                { id: '3', name: 'Para' },
                                { id: '4', name: 'London' },
                                { id: '5', name: 'New York' },
                                { id: '6', name: 'Berlin' }]}
                        /> */}
                        {/* <InputAutoSuggest
                            style={{ flex: 1 }}
                            apiEndpointSuggestData={text => YOUR - METHOD - CALLING - API(text)}
                            itemFormat={{ id: 'details.id', name: 'details.name', tags: ['details.continent', 'details.country'] }}
                            onDataSelectedChange={data => console.log(data)}
                        /> */}
                        {/* <TextInput
                            style={{
                                marginLeft: 5
                            }}
                            disabled={true}
                            placeholder="search"
                            onChange={searchTxt => this.setState({ searchTxt })}
                            value={this.state.searchTxt}
                        /> */}
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
export default EmployeeScreen
