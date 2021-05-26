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


class ItemNotyfi extends React.Component {

    render() {
        var { item, showing, handlerType, onChangeText } = this.props;
        return (
            <View style={{ marginVertical: 20 }}>
                <Text style={styles.date}>{item.name}</Text>
                <TextInput placeholder="Nhập số phút thông báo"
                    autoCapitalize={false}
                    autoCorrect={false}
                    style={styles.input_time}
                    onChangeText={(text) => {
                        onChangeText
                        handlerType(item.id, text);

                    }}
                    onChange={onChangeText}
                ></TextInput>
                {showing && <Text>Thông báo trước {item.notice} phút</Text>}
            </View>
        )
    }
}

export default ItemNotyfi;

const styles = StyleSheet.create({
    date: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    input_time: {
        width: '90%',
        height: 50,
        borderRadius: 40,
        borderColor: '#1BADFF',
        borderWidth: 1,
        marginVertical: 10,
        paddingLeft: 15,
        backgroundColor: '#FFFFFF'
    }
})