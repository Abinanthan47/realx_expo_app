import { FontAwesome5 } from '@expo/vector-icons';
import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Mock data for projects/plots
const plotsData = [
  {
    id: '1',
    title: '₹1.25 Cr Onwards',
    location: 'Kagal-Hatkanangale',
    areaRange: '1000-3000 Sq.Ft',
    rating: 4.2,
    isFavorite: false,
    type: 'Residential',
    thumbnailUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2025/May/15/Photo_h0_w320/79431351_4_1000007041_0_320.jpg',
    distance: '10 KM',
  },
  {
    id: '2',
    title: '₹65 Lac Onwards',
    location: 'Sangli-Miraj Highway',
    areaRange: '1500-2000 Sq.Ft',
    rating: 4.5,
    isFavorite: true,
    type: 'Farm Land',
    thumbnailUrl: 'https://imagecdn.99acres.com/media1/29593/10/591870621M-1746102608321.jpg',
    distance: '15 KM',
  },
  {
    id: '3',
    title: '₹95 Lac',
    location: 'Kagal-Hatkanangale MIDC',
    areaRange: '1000-1800 Sq.Ft',
    rating: 4.0,
    isFavorite: false,
    type: 'Industrial',
    thumbnailUrl: 'https://imagecdn.99acres.com/media1/29727/10/594550851M-1746855645799.jpg',
    distance: '8 KM',
  },
];

export default function Projects() {
  const params = useLocalSearchParams();
  const category = params.category || 'all';
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* Search Bar */}
        <View className="px-4 py-3">
          <View className="flex-row items-center rounded-md border border-gray-300 px-3 py-2">
            <FontAwesome5 name="search" size={16} color="#A0A0A0" />
            <TextInput
              placeholder="Search locality, city..."
              placeholderTextColor="#A0A0A0"
              className="ml-2 flex-1 text-base"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <View className="rounded-md bg-orange-100 px-2 py-1">
              <Text className="font-inter text-xs text-orange-500">All</Text>
            </View>
          </View>
        </View>

        {/* Category filter */}
        <View className="px-4 pb-2">
          <Text className="font-inter text-sm text-gray-500">
            Explore Projects in {category === 'all' ? 'All Areas' : category}
          </Text>
        </View>

        {/* Project List */}
        <View className="pb-20">
          {plotsData.map((plot) => (
            <Link href={`/(guest)/plot/${plot.id}`} key={plot.id} asChild>
              <TouchableOpacity className="border-b border-gray-200 px-4 py-3">
                <View className="flex-row">
                  <View className="mr-3 h-24 w-24 overflow-hidden rounded-md bg-gray-200">
                    <View className="h-full w-full items-center justify-center bg-orange-100">
                      <Image source={{uri:plot.thumbnailUrl}} className="h-full w-full rounded-xl"/>
                    </View>
                  </View>

                  <View className="flex-1">
                    <Text className="font-inter-regular text-base font-bold">{plot.title}</Text>
                    <Text className="font-inter-regular text-sm text-gray-700">
                      {plot.location}
                    </Text>
                    <View className="mt-1 flex-row items-center">
                      <FontAwesome5 name="star" solid size={12} color="#32CD32" />
                      <Text className="ml-1 text-xs text-gray-600">{plot.rating} Rating</Text>
                    </View>
                    <Text className="font-inter-regular mt-1 text-xs text-gray-500">
                      {plot.areaRange}
                    </Text>

                    <View className="mt-2 flex-row items-center justify-between">
                      <Text className="font-inter-regular text-xs text-gray-500">
                        {plot.distance}
                      </Text>
                      <TouchableOpacity className="rounded-full bg-orange-50 px-3 py-1">
                        <Text className="font-inter-medium text-xs text-orange-500">Know More</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <TouchableOpacity className="ml-2 mt-1">
                    <FontAwesome5
                      name={plot.isFavorite ? 'heart' : 'heart'}
                      solid={plot.isFavorite}
                      size={16}
                      color={plot.isFavorite ? '#FF6B00' : '#D1D1D1'}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
