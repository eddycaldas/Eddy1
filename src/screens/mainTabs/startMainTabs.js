import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';;

const startTabs = () => {
    Promise.all([
        Icon.getImageSource("md-map", 30),
        Icon.getImageSource("ios-share-alt", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "jobs.FindWorkerScreen",
                    label: "Find Worker",
                    title: "Find Worker",
                    icon: sources[0]
                },
                {
                    screen: "jobs.ShareWorkerScreen",
                    label: "Share Worker",
                    title: "Share Worker",
                    icon: sources[1]
                }
            ]
        })
    })
}

export default startTabs;
