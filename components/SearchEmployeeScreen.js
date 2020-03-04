import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Form, Container, Label, Text, Button, Item, Input, Icon, Thumbnail, Content } from 'native-base'
import { TextInput, } from 'react-native-gesture-handler'
import { RNCamera } from 'react-native-camera';
// import { InputAutoSuggest } from 'react-native-autocomplete-search';

import Autocomplete from 'native-base-autocomplete'

const SearchEmployeeScreen = () => {
    const [search, setSearch] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [salary, setSalary] = useState('')
    const [datax, setDatax] = useState([])

    useEffect(() => {
        getList()
    })

    const getList = async () => {
        const req = await fetch('http://dummy.restapiexample.com/api/v1/employees')
        const res = await req.json()
        setDatax(res.data)
        // dd(datax)
        // dd(res.data)
    }
    const dd = (par) => {
        console.error(JSON.stringify(par, null, 2))
    }

    // const { query } = data;
    const _filterData = (dt) => {
        // dt.filter()
        // dd(dt)
        return dt
    }
    // const filteredData = _filterData(datax)

    return (
        <Container>
            <Content padder>
                <Form>

                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                            title: 'Permission to use audio recording',
                            message: 'We need your permission to use your audio',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                        onGoogleVisionBarcodesDetected={({ barcodes }) => {
                            console.log(barcodes);
                        }}
                    />
                    
                    <TouchableOpacity >
                        <Thumbnail
                            large
                            source={{ uri: 'https://cdn02.indozone.id/re/content/2019/10/11/3esJqj/t_5d9ff71b90636.jpg?w=700&q=85' }}
                        />
                    </TouchableOpacity>

                    <Item regular>
                        <Icon active name='search' />
                        <Input
                            placeholder='search ...'
                            value={search}
                            onChangeText={(val) => { setSearch(val) }}
                        />
                        <Button transparent light onPress={() => setSearch('')}>
                            <Icon name='close-circle' />
                        </Button>
                    </Item>

                    <View style={styles.autocompleteContainer}>
                        <Autocomplete
                            data={() => _filterData()}
                            defaultValue={datax}
                            onChangeText={(txt) =>
                                alert(txt)
                                // setDatax({ datax: txt })
                            }
                            // onChangeText={text => this.setState({ query: text })}
                            renderItem={data => (
                                // <ListItem onPress={() => this.setState({ query: data })}>
                                <Text>{data}</Text>
                                // </ListItem>
                            )}
                        />
                    </View>

                    <Item stackedLabel>
                        <Label>name</Label>
                        <Input
                            disabled
                            value={name}
                            onChangeText={(val) => { setName(val) }}
                        />
                    </Item>

                    <Item stackedLabel>
                        <Label>age</Label>
                        <Input
                            disabled
                            value={age}
                            onChangeText={(val) => { setAge(val) }}
                        />
                    </Item>

                    <Item stackedLabel>
                        <Label>salary</Label>
                        <Input
                            disabled
                            value={salary}
                            onChangeText={(val) => { setSalary(val) }}
                        />
                    </Item>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
                        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}> */}
                        <Button
                            warning iconLeft rounded
                            style={{ justifyContent: 'center' }}
                        >
                            <Icon name='trash' />
                            <Text
                                style={{ color: 'white' }}>update</Text>
                        </Button>
                        <Button
                            danger iconLeft rounded
                            style={{ justifyContent: 'center' }}
                        >
                            <Icon name='trash' />
                            <Text
                                style={{ color: 'white' }}>delete</Text>
                        </Button>
                        {/* </View > */}
                    </View>
                </Form>

            </Content>
        </Container >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
    }
})
export default SearchEmployeeScreen
