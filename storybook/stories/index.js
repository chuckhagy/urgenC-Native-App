import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "./Button";
import ListItemComponent from "../../components/ListItemComponent";
import CenterView from "./CenterView";
import Welcome from "./Welcome";

storiesOf("Welcome", module).add("to Storybook", () =>
  <Welcome showApp={linkTo("Button")} />
);

storiesOf("ListItemComponent", module).add("Happy Path", () =>
  <ListItemComponent
    {items={
      id: "1",
      title: "Go to Gym",
      body: "Three times per week with trainer",
      completed: false,
      success: false,
      priority: "3",
      duedate: "17-09-20",
      createdate: "2017-09-08T02:27:04.000Z"
    }}
  />
);
