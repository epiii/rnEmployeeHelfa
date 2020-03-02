import React, { useCallback, useState, Component, useEffect } from 'react'
import { Text, ActivityIndicator, RefreshControl, ScrollView, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput, /* ScrollView, */ } from 'react-native-gesture-handler'
// import { InputAutoSuggest } from 'react-native-autocomplete-search';


const CardList = ({ data }) => (
    <>
        <Text>{data.employee_name}</Text>
        <Text>{data.employee_age}</Text>
        <Text>{data.employee_salary}</Text>
    </>
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

    useEffect(() => {
        getList()
    })
    const [employee, setEmployee] = useState([])
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);

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
    }
})

export default ListEmployeeScreen
