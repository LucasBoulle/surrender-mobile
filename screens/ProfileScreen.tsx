import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { Colors } from '../assets/Colors';
import { TopBarEdgeWaves } from '../components/TopBarEdgeWaves';
import { Avatar, Button, Card, Divider } from 'react-native-elements';

import { RootStackScreenProps } from '../types';
export default function PofileScreen({ navigation }: RootStackScreenProps<'Profile'>) {
    return (
        <View style={styles.container}>
            <TopBarEdgeWaves wavePosition="top" />
            <Avatar
                containerStyle={styles.avatar}
                avatarStyle={{ borderRadius: 100 }}
                source={require('../assets/images/profile-icon.jpg')}
            />
            <Text style={styles.title}>{'boulle'}</Text>
            <Text style={styles.level}>{'370'}</Text>
            <Button
                title="Iniciar"
                buttonStyle={styles.startButton}
                titleStyle={styles.titleButton}
                type="outline"
                iconPosition="right"
                icon={{
                    type: "ionicon",
                    name: "arrow-forward-outline",
                    size: 35,
                    color: Colors.cyan
                }}
                disabled={false}
            />

            <Text style={styles.historyText}>Histórico</Text>
            <Divider orientation="vertical" color={Colors.cyan} />

            <Card containerStyle={[styles.matchCard, styles.victoryCard]} wrapperStyle={styles.matchCard}>
                <Avatar
                    containerStyle={styles.avatar}
                    avatarStyle={{ borderRadius: 100 }}
                    source={require('../assets/images/profile-icon.png')}
                />
                <View style={styles.matchInfoCardView}>
                    <Text style={styles.infoMatchCard}>Riven</Text>
                    <Text style={styles.infoMatchKDA}>15/2/13</Text>
                    <Text style={styles.infoMatcResult}>Win - Ranked</Text>
                </View>
            </Card>

            <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
                <Text style={styles.linkText}>Go to home screen!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.pink,
    },
    level: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.purple,
        marginBottom: 50
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.purple,
        marginBottom: 50
    },
    historyText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.purple,
        alignSelf: 'flex-start',
        marginBottom: 15
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    avatar: {
        borderColor: Colors.pink,
        width: 120,
        height: 120,
    },
    startButton: {
        borderColor: Colors.cyan,
        marginBottom: 25,
        width: 300,
    },
    titleButton: {
        color: Colors.cyan,
        fontSize: 30,
        marginBottom: 6
    },
    matchCard: {
        width: '100%',
        borderRadius: 10,
        height: 150,
        marginBottom: 20,
        flexDirection: 'row'
    },
    victoryCard: {
        backgroundColor: Colors.green,
    },
    infoMatchCard: {
        color: Colors.background,
        fontSize: 25,
        flexDirection: 'row',
        marginBottom: 5,
        marginRight: 10
    },
    infoMatchKDA: {
        color: Colors.black,
        fontSize: 25,
        flexDirection: 'row',
        fontWeight: 'bold'
    },
    infoMatcResult: {
        color: Colors.foreground,
        fontSize: 20,
        flexDirection: 'row',
        marginTop: 10
    },
    matchInfoCardView: {
        flexDirection: 'column',
        width: '45%',
        alignItems: 'flex-end'
    }
});