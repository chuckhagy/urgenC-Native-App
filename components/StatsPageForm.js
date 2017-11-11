import React from "react";
import moment from "moment";
import {StyleSheet, View} from "react-native";
import {Actions} from "react-native-router-flux";
import {
    Header,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Icon,
    Text,
    CheckBox,
    Container,
    ListItem,
    Body,
    Card,
    CardItem,
    H1
} from "native-base";

export default class StatsPageFormComponent extends React.Component {
    state = {};

    render() {
        let allItems = this.props.props.items;
        let percentage = (allItems.filter(item => item.status === 'success').length /
            allItems.filter(item => item.status !== 'current').length *
            100).toFixed(0);
        return (
            <View>
                <Card style={style.bg}>
                    <H1 style={style.title}>Stats</H1>
                </Card>

                <Card style={style.bg}>
                    <Text style={style.innerTextTitle}>YOUR SUCCESS</Text>
                    <View style={style.aRow}>
                        <View>
                            <Text style={style.innerText}>
                                Passed Goals:{" "}
                                {allItems.filter(item => item.status === 'success').length}
                            </Text>
                            <Text style={style.innerText}>
                                Failed Goals:{" "}
                                {allItems.filter(item => item.status === 'failure').length}
                            </Text>
                        </View>
                        <View>
                            <Text style={style.innerTextBig}>
                                {percentage > 0 ? percentage : '0'}%
                            </Text>
                        </View>
                    </View>
                </Card>
                <Card style={style.bg}>
                    <Text style={style.innerTextTitle}>OVERALL GOALS</Text>
                    <View style={style.aRow}>
                        <View>
                            <Text style={style.innerText}>
                                Pending: {allItems.filter(item => item.status !== 'current').length}
                            </Text>
                            <Text style={style.innerText}>
                                Completed: {allItems.filter(item => item.status !== 'current').length}
                            </Text>
                        </View>
                        <View>
                            <Text style={style.innerTextBig}>
                                Total: {allItems.length}
                            </Text>
                        </View>
                    </View>
                </Card>
                <Card style={style.bg}>
                    <Text style={style.innerTextTitle}>BY PRIORITY</Text>
                    <View style={style.aRow2}>
                        <View>
                            <Text style={style.right}>❗️❗️❗️❗️❗️ → </Text>
                            <Text style={style.right}>❗️❗️❗️❗️ → </Text>
                            <Text style={style.right}>❗️❗️❗️ → </Text>
                            <Text style={style.right}>❗️❗️ → </Text>
                            <Text style={style.right}>❗️ → </Text>
                        </View>
                        <View>
                            <Text style={style.left}>
                                {allItems.filter(item => item.priority == 5).length}
                            </Text>
                            <Text style={style.left}>
                                {allItems.filter(item => item.priority == 4).length}
                            </Text>
                            <Text style={style.left}>
                                {allItems.filter(item => item.priority == 3).length}
                            </Text>
                            <Text style={style.left}>
                                {allItems.filter(item => item.priority == 2).length}
                            </Text>
                            <Text style={style.left}>
                                {allItems.filter(item => item.priority == 1).length}
                            </Text>
                        </View>
                    </View>
                </Card>
            </View>
        );
    }
}

const style = StyleSheet.create({
    aRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        margin: 20
    },
    aRow2: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        margin: 20
    },
    title: {
        margin: 5,
        textAlign: "center",
        color: "white",
        letterSpacing: 6
    },
    bg: {
        backgroundColor: "black",
        padding: 10,
        borderColor: 'black',
    },
    innerText: {
        color: "white",
        fontWeight: "bold"
    },
    innerTextBig: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    innerTextTitle: {
        color: "white",
        fontSize: 16,
        letterSpacing: 6,
        textAlign: "center"
    },
    right: {
        textAlign: "right",
        color: "white",
        marginTop: 2,
        marginBottom: 2
    },
    left: {
        textAlign: "left",
        color: "white",
        fontSize: 16,
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 12,
        fontWeight: "bold",
        letterSpacing: 6,
        textAlign: "center"
    }
});
