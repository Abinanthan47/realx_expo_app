import { Link } from 'expo-router';
import { Search } from 'lucide-react-native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const propertyCategories = [
  {
    id: 'chennai',
    name: 'Chennai 1',
    img: 'https://i.pinimg.com/736x/61/aa/d3/61aad34526e1fa9715fa17ad98380aec.jpg',
  },
  {
    id: 'yercaud',
    name: 'Yercaud 1',
    img: 'https://i.pinimg.com/736x/e2/3c/d7/e23cd77d5b7e4e5cce10627a17103119.jpg',
  },
  {
    id: 'salem',
    name: 'Salem 1',
    img: 'https://i.pinimg.com/736x/89/cb/06/89cb06436dcc607610c7030f22dcb580.jpg',
  },
  {
    id: 'chennaiii',
    name: 'Chennai 2',
    img: 'https://i.pinimg.com/736x/61/aa/d3/61aad34526e1fa9715fa17ad98380aec.jpg',
  },
  {
    id: 'yercaudii',
    name: 'Yercaud 2',
    img: 'https://i.pinimg.com/736x/e2/3c/d7/e23cd77d5b7e4e5cce10627a17103119.jpg',
  },
  {
    id: 'salem1',
    name: 'Salem 2',
    img: 'https://i.pinimg.com/736x/89/cb/06/89cb06436dcc607610c7030f22dcb580.jpg',
  },
  {
    id: 'chennai2',
    name: 'Chennai 3',
    img: 'https://i.pinimg.com/736x/61/aa/d3/61aad34526e1fa9715fa17ad98380aec.jpg',
  },
  {
    id: 'yercaud2',
    name: 'Yercaud 3',
    img: 'https://i.pinimg.com/736x/e2/3c/d7/e23cd77d5b7e4e5cce10627a17103119.jpg',
  },
  {
    id: 'salem2',
    name: 'Salem 3',
    img: 'https://i.pinimg.com/736x/89/cb/06/89cb06436dcc607610c7030f22dcb580.jpg',
  },
  {
    id: 'chennai3',
    name: 'Chennai 4',
    img: 'https://i.pinimg.com/736x/61/aa/d3/61aad34526e1fa9715fa17ad98380aec.jpg',
  },
  {
    id: 'yercaud3',
    name: 'Yercaud 4',
    img: 'https://i.pinimg.com/736x/e2/3c/d7/e23cd77d5b7e4e5cce10627a17103119.jpg',
  },
  {
    id: 'salem3',
    name: 'Salem 4',
    img: 'https://i.pinimg.com/736x/89/cb/06/89cb06436dcc607610c7030f22dcb580.jpg',
  },
];

export default function Explore() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
        <Text className="mt-2 font-inter text-xl">Explore Property</Text>

        {/* Search Bar */}
        <View className="mt-4 flex-row items-center rounded-full border border-gray-300 px-3 py-2">
          <Search className="h-5 text-gray-500" />
          <TextInput
            placeholder="Search Plots"
            placeholderTextColor="#A0A0A0"
            className="ml-2 flex-1 font-inter text-base outline-none"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <View className="rounded-full bg-orange-500 p-2 ">
            <Text className="text-md p-1 font-inter text-white">All</Text>
          </View>
        </View>

        {/* Find your property section */}
        <View className="mt-6">
          <Text className="font-inter text-lg text-gray-500">
            Find your property in your preferred city
          </Text>

          {/* Grid of property categories */}
          <View className="mt-4 flex-row flex-wrap justify-between">
            {propertyCategories.map((category) => (
              <Link href={`/(guest)/projects?category=${category.id}`} key={category.id} asChild>
                <TouchableOpacity className="mb-4 w-[31%] items-center">
                  <View className=" aspect-square w-full items-center justify-center rounded-xl bg-gray-100">
                    <Image source={{uri:category.img}} className="h-full w-full rounded-xl" />
                    <View className=" absolute bottom-0 h-8 w-full rounded-b-xl  bg-gradient-to-t from-black to-transparent">
                      <Text className="   text-center  font-inter text-sm text-white">
                        {category.name}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
