import React from 'react';
import { View, StyleSheet } from 'react-native';
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


class DrawerContent extends React.Component {
    render() {
        return (
            <DrawerContentScrollView {...this.props}>
                <View
                    style={styles.drawerContent}
                >
                    <View style={styles.userInfoSection}>
                        <Avatar.Image
                            source={{
                                uri:
                                    'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                            }}
                            size={50}
                        />
                        <Title style={styles.title}>Nguyen Khac Tuan</Title>

                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem

                            label="Tài khoản"
                            onPress={() => { }}
                        />
                        <DrawerItem

                            label="Cài đặt"
                            onPress={() => { }}
                        />
                        <DrawerItem

                            label="Hướng dẫn"
                            onPress={() => { }}
                        />
                        <DrawerItem

                            label="Chia sẻ"
                            onPress={() => { }}
                        />
                    </Drawer.Section>
                    <Drawer.Section >
                        <DrawerItem

                            label="Thông tin ứng dụng"
                            onPress={() => { }}
                        />
                        <DrawerItem

                            label="Ủng hộ"
                            onPress={() => { }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        );
    }
}
export default DrawerContent

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
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
});