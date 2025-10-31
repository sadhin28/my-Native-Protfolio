import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.name}>Taosif Sadhin</Text>
          <View style={{alignItems: "center"}}>
             <Image src="" alt="Img"/>
              <Text style={styles.name}>Sample Image</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:0,
    alignItems: "center",
    backgroundColor: "#ff4f00",
    padding: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ffffff",
    
  },
})