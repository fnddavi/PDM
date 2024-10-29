import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4f5e9", // Fundo verde claro
    padding: 16,
  },
  contactBox: {
    backgroundColor: "#baf0d4", // Fundo verde mais escuro
    marginBottom: 12,
    padding: 16,
    borderRadius: 8,
    elevation: 2, // Sombra para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000", // Preto para nome
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: "#0d6e55", // Verde para informações
    marginBottom: 4,
  },
});

export default styles;
