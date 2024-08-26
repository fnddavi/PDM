import React from 'react';
import { Text, View, Image, TouchableOpacity, Alert, Button } from 'react-native';
import logo from '../../assets/adaptive-icon.png';
import { styles } from './styles';

const Cinco: React.FC = () => {
    const createAlert = () => Alert.alert("Boa noite!", "", [{ text: "OK" }]);

    return (
        <View style={styles.container}>
            <View style={styles.crimsonContainer}>
                <View style={styles.limeBox}>
                    <TouchableOpacity onPress={createAlert}>
                        <Image source={logo} style={styles.logo} />
                    </TouchableOpacity>
                </View>
                <View style={styles.aquamarineContainer}>
                    <View style={styles.tealBox}>
                        <TouchableOpacity onPress={createAlert}>
                            <Image source={logo} style={styles.logo} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.skyblueBox}>
                        <TouchableOpacity onPress={createAlert}>
                            <Image source={logo} style={styles.logo} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.salmonBox}>
                <TouchableOpacity onPress={createAlert}>
                    <Image source={logo} style={styles.logo} />
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default Cinco;
