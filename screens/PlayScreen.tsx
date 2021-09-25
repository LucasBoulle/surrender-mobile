import * as React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Colors } from '../assets/Colors';
import { TopBarEdgeWaves } from '../components/TopBarEdgeWaves';
import { Avatar, Button } from 'react-native-elements';
import { LineChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;
import { RootStackScreenProps } from '../types';
import { ScrollView } from 'react-native-gesture-handler';
export default function PlayScreen({ navigation }: RootStackScreenProps<'Play'>) {
    const data = {
        labels: ["0:00", "10:00", "20:00", "30:00", "40:00", "50:00"],
        datasets: [
            {
                data: [20, 45, 58, 80, 99, 43],
                color: (opacity = 1) => Colors.pink, // optional
                strokeWidth: 2 // optional
            },
            {
                data: [15, 35, 18, 60, 69, 40],
                color: (opacity = 1) => Colors.purple, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ['Riven', 'Aatrox '] // optional 
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <TopBarEdgeWaves wavePosition="top" />
                <View style={styles.championView}>
                    <View style={styles.championColumnLeft}>
                        <Avatar
                            containerStyle={styles.avatar}
                            avatarStyle={{ borderRadius: 100 }}
                            source={require('../assets/images/riven.png')}
                        />
                        <Text style={styles.championName}>Riven</Text>
                    </View>
                    <Text style={styles.versusText}>VS</Text>
                    <View style={styles.championColumnRight}>
                        <Avatar
                            containerStyle={styles.avatar}
                            avatarStyle={{ borderRadius: 100 }}
                            source={require('../assets/images/aatrox.png')}
                        />
                        <Text style={styles.championName}>Aatrox</Text>
                    </View>
                </View>
                <Button
                    title="Itemização"
                    buttonStyle={styles.startButton}
                    titleStyle={styles.titleButton}
                    type="outline"
                    iconPosition="right"
                    icon={{
                        type: "ionicon",
                        name: "arrow-forward-outline",
                        size: 35,
                        color: Colors.purple
                    }}
                    disabled={false}
                />
                <Text style={styles.chartTitle}>Gold</Text>
                <LineChart
                    data={data}
                    width={screenWidth}
                    height={256}
                    verticalLabelRotation={30}
                    chartConfig={{
                        backgroundColor: Colors.foreground,
                        backgroundGradientFrom: Colors.foreground,
                        backgroundGradientTo: Colors.foreground,
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: Colors.purple
                        },
                    }}
                    bezier
                />
                <Text style={styles.chartTitle}>Farming</Text>
                <LineChart
                    data={data}
                    width={screenWidth}
                    height={256}
                    verticalLabelRotation={30}
                    chartConfig={{
                        backgroundColor: Colors.foreground,
                        backgroundGradientFrom: Colors.pink,
                        backgroundGradientTo: Colors.foreground,
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: Colors.purple
                        },
                    }}
                />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
        paddingBottom: 100,
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
        borderColor: Colors.purple,
        marginBottom: 25,
        width: 300,
        borderWidth: 5
    },
    titleButton: {
        color: Colors.purple,
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
    },
    championView: {
        flexDirection: 'row',
        marginBottom: 50,
        alignItems: 'center',
    },
    championColumnLeft: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 25
    },
    championColumnRight: {
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 25
    },
    championName: {
        fontSize: 20,
        color: Colors.cyan,
        fontWeight: 'bold'
    },
    versusText: {
        fontSize: 20,
        color: Colors.purple,
        fontWeight: 'bold'
    },
    chartTitle: {
        fontSize: 20,
        color: Colors.pink,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20
    },
});