import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Hellow World</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}