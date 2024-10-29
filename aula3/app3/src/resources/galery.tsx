import { useState } from "react";
import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles";


export default function Galeria() {
    const [image, setImage] = useState<string | null>(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
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
                <Button title="Escolha uma imagem" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={styles.image} />}
            </View>
        </View>
    );
}