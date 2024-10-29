import { useState, useEffect } from "react";
import { Button, Image, View, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles";


export default function Photo() {
    const [image, setImage] = useState<string | null>(null);
    const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            setHasCameraPermission(status === "granted");
        })();
    }, []);
    const takePhoto = async () => {
        if (hasCameraPermission === null) {
            return;
        }
        if (hasCameraPermission === false) {
            Alert.alert("Sem permissão para acessar a câmera");
            return;
        }
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Tirar uma foto" onPress={takePhoto} />
                {image && <Image source={{ uri: image }} style={styles.image} />}
            </View>
        </View>
    );
}
