import React, { useCallback, useState, Component, useEffect } from 'react'
import { ActivityIndicator, RefreshControl, ScrollView, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput, /* ScrollView, */ } from 'react-native-gesture-handler'
import { Container, Header, Content, Text, Card, CardItem, Body, Button } from 'native-base'
// import { InputAutoSuggest } from 'react-native-autocomplete-search';


const CardList = ({ data }) => (
    <Card>
        <CardItem header>
            {/* <Text>{data.employee_name}</Text> */}
        </CardItem>
        <CardItem>
            <Body style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text>nama</Text>
                    <Text>{data.employee_name}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text>salary</Text>
                    <Text>{data.employee_salary}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text>age</Text>
                    <Text>{data.employee_age} yr</Text>
                </View>
            </Body>
        </CardItem>
        <CardItem footer>
            {/* <Text>{data.employee_age} yr</Text> */}
        </CardItem>
    </Card>
)

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

const ListEmployeeScreen = () => {

    const dd = (par) => {
        console.warn(JSON.stringify(par, null, 2))
    }

    const [employee, setEmployee] = useState([])
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);

    useEffect(() => {
        getList()
    })
    const getList = async () => {
        // all api 
        // const req = await fetch('https://www.postman.com/collections/3341b2acd101b1c1c978/')

        const req = await fetch('http://dummy.restapiexample.com/api/v1/employees')
        const res = await req.json()
        setEmployee(res.data)
        // dd(res.data)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                {
                    employee.length > 0 ? employee.map((item, i) => (
                        <CardList data={item} key={i} />
                    )) : <ActivityIndicator size="large" color="orange" />
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    CardList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 10,


        // shadow
        // elevation,
        // shadowColor: 'black',
        // shadowOffset: {width: 0, height: 0.5 * elevation },
        // shadowOpacity: 0.3,
        // shadowRadius: 0.8 * elevation
    },
})

export default ListEmployeeScreen
