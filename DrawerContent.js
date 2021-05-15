import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
    DrawerItem,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import { color } from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/Ionicons';


class DrawerContent extends React.Component {
    render() {
        return (
            <View style={styles.drawerContent}>
                <DrawerContentScrollView {...this.props}>
                    <View style={[styles.userInfoSection, { borderBottomWidth: 1, borderBottomColor: '#f4f4f4' }]}>
                        <Image
                            source={require('./image/clock.png')}
                            resizeMode='contain' style={{ width: 65, height: 65 }}
                        />
                        <Text style={{ marginLeft: 20, color: '#1BADFF', fontWeight: 'bold', fontSize: 25 }}>Work flow</Text>

                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem

                            activeTintColor="#1BADFF"
                            label="Công việc sắp tới"
                            onPress={() => { }}
                            icon={({ focused, color, size }) =>
                                (<Image source={require('./src/screens/icondrawer/iconcongviecsaptoi.png')} resizeMode='contain' style={{ height: 20, width: 20, }} />)
                            }
                        />
                        <DrawerItem
                            activeTintColor="#1BADFF"
                            label="Công việc hoàn thành"
                            onPress={() => { }}
                            icon={({ focused, color, size }) =>
                                (<Image source={require('./src/screens/icondrawer/congviechoanthanh1.png')} resizeMode='contain' style={{ height: 20, width: 20 }} />)
                            }
                        />
                        <DrawerItem
                            activeTintColor="#1BADFF"
                            label="Công việc quá thời gian"
                            onPress={() => { }}
                            icon={({ focused, color, size }) =>
                                (<Image source={require('./src/screens/icondrawer/iconcongviecquathoigian.png')} resizeMode='contain' style={{ height: 20, width: 20, }} />)
                            }
                        />

                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem

                            activeTintColor="#1BADFF"
                            label="Tài khoản"
                            onPress={() => { }}
                            icon={({ focused, color, size }) =>
                                (<Image source={require('./src/screens/icondrawer/icontaikhoan.png')} resizeMode='contain' style={{ height: 20, width: 20, }} />)
                            }
                        />
                        <DrawerItem
                            activeTintColor="#1BADFF"
                            label="Cài đặt"
                            onPress={() => { }}
                            icon={({ focused, color, size }) =>
                                (<Image source={require('./src/screens/icondrawer/iconcaidat.png')} resizeMode='contain' style={{ height: 20, width: 20, }} />)
                            }
                        />
                        <DrawerItem
                            activeTintColor="#1BADFF"
                            label="Hướng dẫn"
                            onPress={() => { }}
                            icon={({ focused, color, size }) =>
                                (<Image source={require('./src/screens/icondrawer/iconhuongdan.png')} resizeMode='contain' style={{ height: 20, width: 20, }} />)
                            }
                        />
                        <DrawerItem
                            activeTintColor="#1BADFF"
                            label="Chia sẻ"
                            onPress={() => { }}
                            icon={({ focused, color, size }) =>
                                (<Image source={require('./src/screens/icondrawer/iconchiase.png')} resizeMode='contain' style={{ height: 20, width: 20, }} />)
                            }
                        />
                    </Drawer.Section>
                    <Drawer.Section >
                        <DrawerItem
                            activeTintColor="#1BADFF"
                            label="Thông tin ứng dụng"
                            onPress={() => { }}
                            icon={({ focused, color, size }) =>
                                (<Image source={require('./src/screens/icondrawer/iconthongtin.png')} resizeMode='contain' style={{ height: 20, width: 20, }} />)
                            }
                        />
                        <DrawerItem
                            activeTintColor="#1BADFF"
                            label="Ủng hộ"
                            onPress={() => { }}
                            icon={({ focused, color, size }) =>
                                (<Image source={require('./src/screens/icondrawer/iconhotro.png')} resizeMode='contain' style={{ height: 20, width: 20, }} />)
                            }
                        />
                    </Drawer.Section>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        label='Đăng xuất'
                        onPress={() => { }}
                        icon={(focused) =>
                            <Image source={require('./src/screens/iconHome/icondangxuat.png')} resizeMode='contain' style={{ height: 20, width: 20, }} />
                        }
                    >

                    </DrawerItem>
                </Drawer.Section>
            </View>
        );
    }
}
export default DrawerContent

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {

        height: 100,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: "center"
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    bottomDrawerSection: {
        marginBottom: 20,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    }
});