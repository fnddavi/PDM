import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import logo from '../../assets/adaptive-icon.png';

const Quatro: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.metadeSuperior}>

                <View style={styles.metadeEsquerda} />

                <View style={styles.metadeDireita}>
                    <View style={styles.metadeSupDireita} />
                    <Image source={logo} style={styles.imagem} />
                    <View style={styles.metadeInfDireita} />
                    <View />

                </View>
            </View>
            <View style={styles.metadeInferior} />
        </View>
    );
};

export default Quatro;
