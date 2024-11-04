import React from "react";
import { Text } from "react-native";
import { styles } from "../themes/index";
import { ManiaHooks } from "../hooks/timeHook";
import { SafeAreaView } from "react-native-safe-area-context";
import Balls from "../components/balls";


const Timemania = () => {

  const mania = ManiaHooks()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TIMEMANIA</Text>
      {mania ? <>
        <Balls values={mania.dezenas} colors="#FFF600" font="#049645" />
        <Text style={styles.p}>{mania.dataPorExtenso}</Text>
      </>
        :
        <Text>Carregando...</Text>
      }

    </SafeAreaView>
  );
};

export default Timemania;
//