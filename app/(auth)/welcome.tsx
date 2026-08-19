import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-4xl font-bold text-black">Welcome to HopOn</Text>

      <Text className="mt-4 text-center text-lg text-gray-500">
        Find a ride and get where you need to go.
      </Text>

      <Pressable
        onPress={() => router.push('/(tabs)')}
        className="mt-10 rounded-full bg-blue-500 px-8 py-4"
      >
        <Text className="font-semibold text-white">Get Started</Text>
      </Pressable>
    </View>
  );
}
