import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
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
import DetailsPageComponent from "./components/DetailsPageComponent";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Green from "./components/Green";
import Yellow from "./components/Yellow";

import setupStore from "./redux/setupStore";
const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene
              key="tabbar"
              tabs={true}
              tabBarStyle={{ backgroundColor: "#FFFFFF" }}
            >
              <Scene
                key="list"
                component={listPageContainer}
                title="List PAGE"
                initial
              />
              <Scene key="red" component={Red} title="RED PAGE" />
              <Scene key="green" component={Green} title="GREEN PAGE" />
              <Scene key="yellow" component={Yellow} title="YELLOW PAGE" />
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

// componentDidMount() {
//   getItems().then(items => {
//     newItems = items.sort(function(a, b) {
//       return b.priority - a.priority;
//     });
//     this.setState({
//       items: newItems
//     });
//     Actions.pop({ refresh: { items: this.state.items } });
//   });
// }
