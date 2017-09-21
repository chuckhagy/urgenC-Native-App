require("babel-register")({
    only: [
        "/node_modules/react-native-tab-navigator/*.js",
        "/node_modules/react-native-router-flux/*.js",
        "/node_modules/react-native-router-flux/src/*.js",
        "/node_modules/react-native-tabs/*.js",
        "/node_modules/react-native-button/*.js",
        "/node_modules/react-native-swipeout/*.js",
        "/app/**/*",
        "/test/**/*",
    ]
});