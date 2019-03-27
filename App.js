import { Navigation } from "react-native-navigation";

import AuthScreen from './src/screens/Auth/Auth';
import ShareWorkerScreen from './src/screens/ShareWorker/ShareWorker';
import FindWorkerScreen from './src/screens/FindWorker/FindWorker';

//register screens

Navigation.registerComponent("jobs.AuthScreen", () => AuthScreen);
Navigation.registerComponent("jobs.ShareWorkerScreen", () => ShareWorkerScreen);
Navigation.registerComponent("jobs.FindWorkerScreen", () => FindWorkerScreen);

//start app

Navigation.startSingleScreenApp({
  screen: {
    screen: "jobs.AuthScreen",
    title: "Login"
  }
})

