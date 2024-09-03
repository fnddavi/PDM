import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { RootStackParamList } from "../types";


interface Props extends DrawerScreenProps<RootStackParamList, "Manha"> {}

const Manha: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bom dia!</Text>
            <View style={styles.rowButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonLabel}>Retornar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Afternoon")}
                >
                    <Text style={styles.buttonLabel}>Tarde</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Manha;
