import React from "react";
import { Text } from "react-native";
import sortBy from "lodash.sortby";


import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "./Button";
import TickerComponent from "../../components/TickerComponent";
import ListItemComponent from "../../components/ListItemComponent";
import ListPageLayout from "../../components/ListPageLayout";
import HistoryItemComponent from "../../components/HistoryItemComponent";
import HistoryPageLayout from "../../components/HistoryPageLayout";
import StatsPageLayout from "../../components/StatsPageLayout";
import CenterView from "./CenterView";
import Welcome from "./Welcome";

storiesOf("Welcome", module).add("to Storybook", () =>
  <Welcome showApp={linkTo("Button")} />
);

storiesOf("Ticker", module)
.add("Standard Ticker", () =>
  <TickerComponent updateThisItem={undefined} info={tickerInfo1} />
);

storiesOf("ListItemComponent", module)
.add("Priority 1", () =>
  <ListItemComponent props={itemProps} items={theItem1} />
)
.add("Priority 2", () =>
  <ListItemComponent props={itemProps} items={theItem2} />
)
.add("Priority 3", () =>
  <ListItemComponent props={itemProps} items={theItem3} />
)
.add("Priority 4", () =>
  <ListItemComponent props={itemProps} items={theItem4} />
)
.add("Priority 5", () =>
  <ListItemComponent props={itemProps} items={theItem5} />
)

storiesOf("ListPageLayout", module)
.add("List of Items", () =>
  <ListPageLayout props={listProps} items={listProps.items} />
)
.add("List of Items in Order", () =>
  <ListPageLayout props={listProps} items={sortBy(listProps.items, "rank").reverse()} />
)

storiesOf("GraveYard Item", module)
.add("Priority 1", () =>
  <HistoryItemComponent items={theItem1} />
)
.add("Priority 2", () =>
  <HistoryItemComponent items={theItem2} />
)
.add("Priority 3", () =>
  <HistoryItemComponent items={theItem3} />
)
.add("Priority 4", () =>
  <HistoryItemComponent items={theItem4} />
)
.add("Priority 5", () =>
  <HistoryItemComponent items={theItem5} />
)

storiesOf("HistoryPageLayout", module)
.add("List of Failed Items", () =>
  <HistoryPageLayout props={listPropsC} items={listPropsC.items} />
)
.add("List of Failed Items in Order", () =>
  <HistoryPageLayout props={listPropsC} items={sortBy(listPropsC.items, "priority").reverse()} />
)

storiesOf("StatsPage", module)
.add("View of Basic Stats", () =>
  <StatsPageLayout props={listProps} />
)


const tickerInfo1 = {
    "body": "To celebrate graduation",
    "completed": undefined,
    "createddate": "2017-09-22T15:13:08.000Z",
    "duedate": "2017-12-22T08:13:00.000Z",
    "failure": undefined,
    "id": "recCtmCIwHvXHwCpE",
    "priority": "1",
    "rank": 0.13297759131519918,
    "success": undefined,
    "timeLeft": 122004,
    "title": "Buy a new backpack",
    "totalTime": 130619,
  }

const theItem1 = {
    "body": "To celebrate graduation",
    "completed": undefined,
    "createddate": "2017-09-22T15:13:08.000Z",
    "duedate": "2017-12-22T08:13:00.000Z",
    "failure": undefined,
    "id": "recCtmCIwHvXHwCpE",
    "priority": "1",
    "rank": 0.13297759131519918,
    "success": undefined,
    "timeLeft": 122004,
    "title": "Buy a new backpack",
    "totalTime": 130619,
}
const theItem2 = {
    "body": "To celebrate graduation",
    "completed": undefined,
    "createddate": "2017-09-22T15:13:08.000Z",
    "duedate": "2017-12-22T08:13:00.000Z",
    "failure": undefined,
    "id": "recCtmCIwHvXHwCpE",
    "priority": "2",
    "rank": 0.13297759131519918,
    "success": undefined,
    "timeLeft": 122004,
    "title": "Buy a new backpack",
    "totalTime": 130619,
}
const theItem3 = {
    "body": "To celebrate graduation",
    "completed": undefined,
    "createddate": "2017-09-22T15:13:08.000Z",
    "duedate": "2017-12-22T08:13:00.000Z",
    "failure": undefined,
    "id": "recCtmCIwHvXHwCpE",
    "priority": "3",
    "rank": 0.13297759131519918,
    "success": undefined,
    "timeLeft": 122004,
    "title": "Buy a new backpack",
    "totalTime": 130619,
}
const theItem4 = {
    "body": "To celebrate graduation",
    "completed": undefined,
    "createddate": "2017-09-22T15:13:08.000Z",
    "duedate": "2017-12-22T08:13:00.000Z",
    "failure": undefined,
    "id": "recCtmCIwHvXHwCpE",
    "priority": "4",
    "rank": 0.13297759131519918,
    "success": undefined,
    "timeLeft": 122004,
    "title": "Buy a new backpack",
    "totalTime": 130619,
}
const theItem5 = {
    "body": "To celebrate graduation",
    "completed": undefined,
    "createddate": "2017-09-22T15:13:08.000Z",
    "duedate": "2017-12-22T08:13:00.000Z",
    "failure": undefined,
    "id": "recCtmCIwHvXHwCpE",
    "priority": "5",
    "rank": 0.13297759131519918,
    "success": undefined,
    "timeLeft": 122004,
    "title": "Buy a new backpack",
    "totalTime": 130619,
}

const itemProps = {
  "props": {
    "deleteItem": 'filler',
    "headerMode": "float",
    "hideNavBar": true,
    "icon": 'filler',
    "iconName": "home",
    "init": true,
    "initial": true,
    "items": [
      {
        "body": "n/a",
        "completed": true,
        "createddate": "2017-09-22T14:10:43.000Z",
        "duedate": "2017-09-22T14:11:00.000Z",
        "failure": undefined,
        "id": "rec4MSvfOmorPcuJi",
        "priority": "3",
        "rank": Infinity,
        "success": true,
        "timeLeft": -8677,
        "title": "Test",
        "totalTime": 0,
      }
    ],
    "modalOn": false,
    "name": "_list",
    "navigation": {
      "state": {
        "key": "Init-id-1506610107700-0",
        "params": {
          "headerMode": "float",
          "hideNavBar": true,
          "icon": 'filler',
          "iconName": "home",
          "init": true,
          "initial": true,
          "tabBarLabel": " ",
          "tabBarStyle": {
            "backgroundColor": "#c90000",
          },
          "tabs": true,
          "title": "Goals",
        },
        "routeName": "_list",
      },
    },
    "title": "Goals",
    "updateThisItem": 'filler',
  }
}
const listProps = {
  "deleteItem": 'filler2',
  "headerMode": "float",
  "hideNavBar": true,
  "icon": 'filler2',
  "iconName": "home",
  "init": true,
  "initial": true,
  "items": [
   {
      "body": "To celebrate graduation",
      "completed": undefined,
      "createddate": "2017-09-22T15:13:08.000Z",
      "duedate": "2017-12-22T08:13:00.000Z",
      "failure": undefined,
      "id": "recCtmCIwHvXHwCpE",
      "priority": "1",
      "rank": 0.13308094534485795,
      "success": undefined,
      "timeLeft": 121977,
      "title": "Buy a new backpack",
      "totalTime": 130619,
    },
    {
      "body": "Croissantz",
      "completed": undefined,
      "createddate": "2017-09-22T17:26:47.000Z",
      "duedate": "2017-10-23T10:30:00.000Z",
      "failure": undefined,
      "id": "recEEtJgfFXg9coMN",
      "priority": "3",
      "rank": 0.3962055943739683,
      "success": undefined,
      "timeLeft": 35714,
      "title": "Learn to Bake",
      "totalTime": 44223,
    },
    {
      "body": "Fancy and Italian will do.",
      "completed": true,
      "createddate": "2017-09-08T02:27:04.000Z",
      "duedate": "2017-09-20T16:30:00.000Z",
      "failure": true,
      "id": "recEoKWuiT3SJBXfY",
      "priority": "1",
      "rank": 0.9157764043703785,
      "success": undefined,
      "timeLeft": -11445,
      "title": "Get a new car",
      "totalTime": 18122,
    },
    {
      "body": "With a 6-figure salary",
      "completed": undefined,
      "createddate": "2017-09-22T15:25:37.000Z",
      "duedate": "2018-01-22T08:25:00.000Z",
      "failure": undefined,
      "id": "recH5JIj0gB3w5WHD",
      "priority": "2",
      "rank": 0.22462070421490482,
      "success": undefined,
      "timeLeft": 166629,
      "title": "Get a Web Dev Job",
      "totalTime": 175259,
    }
  ],
  "modalOn": false,
  "name": "_list",
  "navigation": {
    "dispatch": 'filler2',
    "goBack": 'filler2',
    "navigate": 'filler2',
    "setParams": 'filler2',
    "state": {
      "key": "Init-id-1506611712597-0",
      "params": {
        "headerMode": "float",
        "hideNavBar": true,
        "icon": 'filler2',
        "iconName": "home",
        "init": true,
        "initial": true,
        "tabBarLabel": " ",
        "tabBarStyle": {
          "backgroundColor": "#c90000",
        },
        "tabs": true,
        "title": "Goals",
      },
      "routeName": "_list",
    },
  },
  "onDidMount": 'filler2',
  "refreshList": 'filler2',
  "screenProps": undefined,
  "tabBarLabel": " ",
  "tabBarStyle": {
    "backgroundColor": "#c90000",
  },
  "tabs": true,
  "title": "Goals",
  "updateThisItem": 'filler2',
}
const listPropsS = {
  props: {
    props:{
  "deleteItem": 'filler2',
  "headerMode": "float",
  "hideNavBar": true,
  "icon": 'filler2',
  "iconName": "home",
  "init": true,
  "initial": true,
  "items": [
   {
      "body": "To celebrate graduation",
      "completed": undefined,
      "createddate": "2017-09-22T15:13:08.000Z",
      "duedate": "2017-12-22T08:13:00.000Z",
      "failure": undefined,
      "id": "recCtmCIwHvXHwCpE",
      "priority": "1",
      "rank": 0.13308094534485795,
      "success": undefined,
      "timeLeft": 121977,
      "title": "Buy a new backpack",
      "totalTime": 130619,
    },
    {
      "body": "Croissantz",
      "completed": undefined,
      "createddate": "2017-09-22T17:26:47.000Z",
      "duedate": "2017-10-23T10:30:00.000Z",
      "failure": undefined,
      "id": "recEEtJgfFXg9coMN",
      "priority": "3",
      "rank": 0.3962055943739683,
      "success": undefined,
      "timeLeft": 35714,
      "title": "Learn to Bake",
      "totalTime": 44223,
    },
    {
      "body": "Fancy and Italian will do.",
      "completed": true,
      "createddate": "2017-09-08T02:27:04.000Z",
      "duedate": "2017-09-20T16:30:00.000Z",
      "failure": true,
      "id": "recEoKWuiT3SJBXfY",
      "priority": "1",
      "rank": 0.9157764043703785,
      "success": undefined,
      "timeLeft": -11445,
      "title": "Get a new car",
      "totalTime": 18122,
    },
    {
      "body": "With a 6-figure salary",
      "completed": undefined,
      "createddate": "2017-09-22T15:25:37.000Z",
      "duedate": "2018-01-22T08:25:00.000Z",
      "failure": undefined,
      "id": "recH5JIj0gB3w5WHD",
      "priority": "2",
      "rank": 0.22462070421490482,
      "success": undefined,
      "timeLeft": 166629,
      "title": "Get a Web Dev Job",
      "totalTime": 175259,
    }
  ],
  "modalOn": false,
  "name": "_list",
  "navigation": {
    "dispatch": 'filler2',
    "goBack": 'filler2',
    "navigate": 'filler2',
    "setParams": 'filler2',
    "state": {
      "key": "Init-id-1506611712597-0",
      "params": {
        "headerMode": "float",
        "hideNavBar": true,
        "icon": 'filler2',
        "iconName": "home",
        "init": true,
        "initial": true,
        "tabBarLabel": " ",
        "tabBarStyle": {
          "backgroundColor": "#c90000",
        },
        "tabs": true,
        "title": "Goals",
      },
      "routeName": "_list",
    },
  },
  "onDidMount": 'filler2',
  "refreshList": 'filler2',
  "screenProps": undefined,
  "tabBarLabel": " ",
  "tabBarStyle": {
    "backgroundColor": "#c90000",
  },
  "tabs": true,
  "title": "Goals",
  "updateThisItem": 'filler2',
}}}

const listPropsC = {
  "deleteItem": 'filler2',
  "headerMode": "float",
  "hideNavBar": true,
  "icon": 'filler2',
  "iconName": "home",
  "init": true,
  "initial": true,
  "items": [
   {
      "body": "To celebrate graduation",
      "completed": true,
      "createddate": "2017-09-22T15:13:08.000Z",
      "duedate": "2018-12-22T08:13:00.000Z",
      "failure": true,
      "id": "recCtmCIwHvXHwCpE",
      "priority": "1",
      "rank": 0.13308094534485795,
      "success": undefined,
      "timeLeft": 121977,
      "title": "Buy a new backpack",
      "totalTime": 130619,
    },
    {
      "body": "Croissantz",
      "completed": true,
      "createddate": "2017-09-22T17:26:47.000Z",
      "duedate": "2018-10-23T10:30:00.000Z",
      "failure": true,
      "id": "recEEtJgfFXg9coMN",
      "priority": "3",
      "rank": 0.3962055943739683,
      "success": undefined,
      "timeLeft": 35714,
      "title": "Learn to Bake",
      "totalTime": 44223,
    },
    {
      "body": "Fancy and Italian will do.",
      "completed": true,
      "createddate": "2017-09-08T02:27:04.000Z",
      "duedate": "2018-09-20T16:30:00.000Z",
      "failure": true,
      "id": "recEoKWuiT3SJBXfY",
      "priority": "1",
      "rank": 0.9157764043703785,
      "success": undefined,
      "timeLeft": -11445,
      "title": "Get a new car",
      "totalTime": 18122,
    },
    {
      "body": "With a 6-figure salary",
      "completed": true,
      "createddate": "2017-09-22T15:25:37.000Z",
      "duedate": "2018-01-22T08:25:00.000Z",
      "failure": true,
      "id": "recH5JIj0gB3w5WHD",
      "priority": "2",
      "rank": 0.22462070421490482,
      "success": undefined,
      "timeLeft": 166629,
      "title": "Get a Web Dev Job",
      "totalTime": 175259,
    }
  ],
}
