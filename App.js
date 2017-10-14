// export default from './storybook';
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Provider } from "react-redux";
import {
  Scene,
  Router,
  Actions,
  Tabs,
  Modal,
  Stack,
  Lightbox
} from "react-native-router-flux";
import listPageContainer from "./redux/containers/listPageContainer";
import addPageContainer from "./redux/containers/addPageContainer";
import statsPageContainer from "./redux/containers/statsPageContainer";
import DetailsPageComponent from "./components/DetailsPageComponent";
import LoginPageComponent from "./components/LoginPageComponent";
import historyPageContainer from "./redux/containers/historyPageContainer";

import setupStore from "./redux/setupStore";
const store = setupStore();

class TabIcon extends Component {
  render() {
    var color = this.props.selected ? "#00f240" : "#ffffff";
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          marginTop: 15
        }}
      >
        <Icon
          style={{ color: color }}
          name={this.props.iconName || "circle"}
          size={18}
        />
        <Text style={{ color: color, fontSize: 12 }}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene
                key="login"
                component={LoginPageComponent}
                title="urgenC Login"
                hideNavBar
            />
            <Scene
              key="tabbar"
              tabs={true}
              tabBarStyle={{ backgroundColor: "#c90000" }}
            >
              <Scene
                key="list"
                hideNavBar
                headerMode="float"
                component={listPageContainer}
                title="Goals"
                tabBarLabel=" "
                iconName="home"
                icon={TabIcon}
                initial
              />
              <Scene
                key="add"
                hideNavBar
                component={addPageContainer}
                title="Add Item"
                tabBarLabel=" "
                iconName="newspaper-o"
                icon={TabIcon}
              />
              <Scene
                key="stats"
                hideNavBar
                component={statsPageContainer}
                title="Stats"
                tabBarLabel=" "
                iconName="line-chart"
                icon={TabIcon}
              />
              <Scene
                key="history"
                hideNavBar
                component={historyPageContainer}
                title="Graveyard"
                tabBarLabel=" "
                iconName="frown-o"
                icon={TabIcon}
              />
            </Scene>
            <Scene
              key="details"
              component={DetailsPageComponent}
              title="Details"
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}
