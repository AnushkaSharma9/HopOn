import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-red-500">
        HopOn is working!
      </Text>

      <StatusBar style="dark" />
    </View>
  );
}