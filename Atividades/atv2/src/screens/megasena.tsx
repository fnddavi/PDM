import React from "react";
import { Text } from "react-native";
import { styles } from "../themes/index";
import { SafeAreaView } from "react-native-safe-area-context";
import Balls from "../components/balls";
import { MegaHooks } from "../hooks/megaHook";

const Megasena = () => {

    const mega = MegaHooks()


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>MEGA-SENA</Text>
            {mega ? <>
                <Balls values={mega.dezenas} colors="#209869" font="#fff" />
                <Text style={styles.p}>{mega.dataPorExtenso}</Text>
            </>
                :
                <Text>Carregando...</Text>
            }

        </SafeAreaView>
    );
};

export default Megasena;
