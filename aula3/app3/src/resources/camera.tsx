import { useState, useEffect } from "react";
import { Button, View, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import styles from "./styles";


export default function Camera() {
    const [video, setVideo] = useState<string | null>(null);
    const [hasCameraPermission, setHasCameraPermission] = useState<
        boolean | null
    >(null);
    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            setHasCameraPermission(status === "granted");
        })();
    }, []);
    const recordVideo = async () => {
        if (hasCameraPermission === null) {
            return;
        }
        if (hasCameraPermission === false) {
            Alert.alert("Sem permissão para acessar a câmera");
            return;
        }
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
            setVideo(result.assets[0].uri);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Gravar um vídeo" onPress={recordVideo} />
                {video && (
                    <Video
                        source={{ uri: video }}
                        style={styles.video}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                    />
                )}
            </View>
        </View>
    );
}
//