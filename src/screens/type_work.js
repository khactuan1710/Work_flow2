import { useRoute } from '@react-navigation/core';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';



class Type_work extends React.Component {

    goBack = () => {
        this.props.navigation.navigate('Home')
    }
    work_today = () => {
        this.props.navigation.navigate('Create_work')
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image source={require('./iconHome/onmenu.png')} resizeMode="contain" style={styles.onmenu}></Image>
                    </TouchableOpacity>
                    <Text style={[styles.text_header, { marginRight: 95 }]}>Tạo công việc</Text>
                </View>
                <View style={styles.title_add_work}>
                    <Text style={styles.dots}></Text>
                    <Text style={styles.text_work}>Thêm mới một công việc</Text>
                </View>


                <View style={styles.add_work}>
                    <TouchableOpacity style={styles.button_add_work} onPress={this.work_today}>
                        <Text style={styles.plus}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.text_time}>Hôm nay</Text>
                </View>


                <View style={styles.add_work}>
                    <TouchableOpacity style={styles.button_add_work} onPress={this.work_today}>
                        <Text style={styles.plus}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.text_time}>Ngày mai</Text>
                </View>


                <View style={styles.add_work}>
                    <TouchableOpacity style={styles.button_add_work} onPress={this.work_today}>
                        <Text style={styles.plus}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.text_time}>Ngày bất kì</Text>
                </View>


            </View>
        )
    }
}

export default Type_work;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 88,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    onmenu: {
        height: '55%',
        width: 30,
        marginTop: 10
    },
    text_header: {
        color: '#1BADFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10
    },
    title_add_work: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 70
    },
    dots: {
        height: 15,
        width: 15,
        backgroundColor: '#1BADFF',
        borderRadius: 10,
    },
    text_work: {
        color: '#1BADFF',
        fontSize: 27,
        fontWeight: 'bold',
        marginLeft: 10
    },


    add_work: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 35,
        marginVertical: 30
    },
    button_add_work: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#1BADFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    plus: {
        fontSize: 40,
        color: "green",
        lineHeight: 40
    },
    text_time: {
        fontSize: 23,
        marginLeft: 15
    }
})