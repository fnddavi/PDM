import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#222",
    justifyContent: "center",
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
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  video:{
    width: 300,
    height: 300,
    marginTop: 20,
  }
});

export default styles;
