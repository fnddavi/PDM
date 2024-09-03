import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../types";


interface Props extends BottomTabScreenProps<RootStackParamList, "Tarde"> {}

const Tarde: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Boa tarde!</Text>
            <View style={styles.rowButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonLabel}>Retornar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Night")}
                >
                    <Text style={styles.buttonLabel}>Noite</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default Tarde;