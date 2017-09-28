import React, { Component } from "react";
import { ListView, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import { Actions } from "react-native-router-flux";

import HistoryItemComponent from "./HistoryItemComponent";

const rowHasChanged = (r1, r2) =>
  r1.id !== r2.id ||
  r1.title !== r2.title ||
  r1.duedate !== r2.duedate ||
  r1.priority !== r2.priority;
const ds = new ListView.DataSource({ rowHasChanged });

export default class HistoryPageLayout extends Component {
  state = {
    dataSource: ds.cloneWithRows(
      this.props.items.filter(a => {
        return a.completed && a.failure;
      })
    )
  };

  renderRow = rowData => {
    return <HistoryItemComponent items={rowData} props={this.props.props} />;
  };

  componentWillReceiveProps(newProps) {
    if (newProps.items !== this.props.items) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(
          newProps.items.filter(a => {
            return a.completed && a.failure;
          })
        )
      });
    }
  }

  render() {    
    return (
      <Content>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections={true}
          removeClippedSubviews={false}
        />
      </Content>
    );
  }
}
