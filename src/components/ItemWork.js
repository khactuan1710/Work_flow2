import React from 'react'
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
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

class ItemWork extends React.Component {
    render() {
        var { item, id } = this.props;

        return (
            <View style={styles.work}>
                <View style={styles.a_work}>
                    <TouchableOpacity onPress={() => this.props.FinishedItem(item.id)}>
                        {

                            item.isFinished ? <Image source={require('../screens/iconHome/iconfinished.png')} style={styles.iconFinished} /> : <Image source={require('../screens/iconHome/iconchuahoanthanh.png')} style={styles.iconFinished} />
                        }
                    </TouchableOpacity>
                    {/* <Text style={styles.text_work}>{item.nameWork} {item.timeStart} - {item.timeEnd}</Text> */}
                    <TouchableOpacity onPress={this.props.resetWork}>
                        {console.log(typeof this.props.resetWork + "hie")}
                        <Text style={styles.text_work}>{item.name}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button_clear_work} onPress={() => this.props.clear_work(item.id)}><Image source={require('../screens/iconHome/remove.png')} style={styles.text_clear}></Image></TouchableOpacity>
            </View>
        )
    }
}

export default ItemWork
const styles = StyleSheet.create({
    work: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    a_work: {
        flexDirection: 'row',
        height: 20,
        alignItems: 'center',
        marginVertical: 10,
    },
    text_work: {
        fontSize: 15,
        marginLeft: 10,

    },
    button_clear_work: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text_clear: {
        height: 20,
        width: 20
    },
    iconFinished: {
        height: 20,
        width: 20
    },
})