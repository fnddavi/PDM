import React from "react";
import { Text } from "react-native";
import { styles } from "../themes/index";
import { SafeAreaView } from "react-native-safe-area-context";
import Balls from "../components/balls";
import { QuinaHooks } from "../hooks/quinaHook";


const Quina = () => {

    const quina = QuinaHooks()


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>QUINA</Text>
            {quina ? <>
                <Balls values={quina.dezenas} colors="#260085" font="#fff" />
                <Text style={styles.p}>{quina.dataPorExtenso}</Text>
            </>
                :
                <Text>Carregando...</Text>
            }

        </SafeAreaView>
    );
};

export default Quina;
//