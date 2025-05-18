import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex items-center justify-center">
      <Text className="text-5xl font-bold">Home</Text>
      <TouchableOpacity className=" mx-auto mt-64  rounded-full bg-orange-500 p-3 px-12">
        <Link href="/(guest)">
          <Text className="text-inter font-medium text-white  ">Guest Screen</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
