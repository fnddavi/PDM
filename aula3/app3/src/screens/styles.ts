import { StyleSheet } from "react-native";
import Constants from "expo-constants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#222",
    },
    scrollViewContent: {
        paddingHorizontal: 10,
        alignItems: "center",
    },
    row: {
        width: "100%",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        paddingBottom: 10,
        paddingLeft: 10,
    },
    name: {
        color: "yellow",
    },
    number: {
        color: "#fff",
    },
});
export default styles;
