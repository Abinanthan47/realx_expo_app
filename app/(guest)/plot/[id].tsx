import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useLocalSearchParams, Link, router } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

// Mock data for plot details
const plotsDetailData = {
  '1': {
    id: '1',
    title: '₹1.25 Lac Onwards',
    location: 'Kagal-Hatkanangale',
    areaRange: '1000-3000 Sq.Ft',
    rating: 4.2,
    isFavorite: false,
    type: 'Residential',
    imageUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2025/May/15/Photo_h0_w320/79431351_4_1000007041_0_320.jpg',
    propertyType: 'Farm Land Site',
    plotSize: '1 Acre',
    listedBy: 'Agent',
    width: '200 Ft',
    depth: '220 Ft',
    facing: 'South',
    details: 'Agricultural/Farm Land is located in Kagal-Hatkanangale industrial area with excellent connectivity and amenities. Perfect for farming or future development with available water sources and electricity.',
    agentDetails: {
      name: 'H P Real Estate',
      description: 'Member since Dec 2021',
      location: 'Near No.1 Plot, Rajarampuri 5 Lane, Kolhapur',
      address: '621/3 Plot, Rajarampuri Near Savarkar Chowk, Kolhapur'
    },
    areas: ['Kolhapur', 'Kagal', 'Hatkanangale', 'Warananagar', 'Sangli', 'Miraj', 'Pune']
  },
  '2': {
    id: '2',
    title: '₹1.50 Lac Onwards',
    location: 'Sangli-Miraj Highway',
    areaRange: '1500-2000 Sq.Ft',
    rating: 4.5,
    isFavorite: true,
    type: 'Farm Land',
    imageUrl: 'https://imagecdn.99acres.com/media1/29727/10/594550851M-1746855645799.jpg',
    propertyType: 'Farm Land Site',
    plotSize: '2 Acre',
    listedBy: 'Agent',
    width: '300 Ft',
    depth: '290 Ft',
    facing: 'East',
    details: 'Prime agricultural land located on Sangli-Miraj Highway with excellent road connectivity. Suitable for various agricultural activities with fertile soil. All amenities available in close proximity.',
    agentDetails: {
      name: 'H P Real Estate',
      description: 'Member since Dec 2021',
      location: 'Near No.1 Plot, Rajarampuri 5 Lane, Kolhapur',
      address: '621/3 Plot, Rajarampuri Near Savarkar Chowk, Kolhapur'
    },
    areas: ['Sangli', 'Miraj', 'Kupwad', 'Kolhapur', 'Pune']
  },
  '3': {
    id: '3',
    title: '₹0.95 Lac',
    location: 'Kagal-Hatkanangale MIDC',
    areaRange: '1000-1800 Sq.Ft',
    rating: 4.0,
    isFavorite: false,
    type: 'Industrial',
    imageUrl: 'https://imagecdn.99acres.com/media1/29727/10/594550851M-1746855645799.jpg',
    propertyType: 'Industrial Plot',
    plotSize: '1 Acre',
    listedBy: 'Owner',
    width: '180 Ft',
    depth: '240 Ft',
    facing: 'West',
    details: 'Industrial plot located in MIDC area with all necessary infrastructure for setting up manufacturing unit. Located in strategic industrial zone with good connectivity to major roads and highways.',
    agentDetails: {
      name: 'H P Real Estate',
      description: 'Member since Dec 2021',
      location: 'Near No.1 Plot, Rajarampuri 5 Lane, Kolhapur',
      address: '621/3 Plot, Rajarampuri Near Savarkar Chowk, Kolhapur'
    },
    areas: ['Kagal', 'Hatkanangale', 'MIDC', 'Kolhapur', 'Ichalkaranji']
  }
};

export default function PlotDetail() {
  const { id } = useLocalSearchParams();
  const plotId = typeof id === 'string' ? id : '1';
  const plotData = plotsDetailData[plotId];

  if (!plotData) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Plot not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* Property Image */}
        <View className="w-full h-64 bg-gray-200">
          <View className="w-full h-full bg-orange-100 items-center justify-center">
           <Image source={{uri:plotData.imageUrl}} className='w-full h-full'/>
          </View>
          
          {/* Favorite button overlay */}
          <TouchableOpacity className="absolute top-4 right-4 bg-white rounded-full p-2">
            <FontAwesome5 
              name="heart" 
              solid={plotData.isFavorite} 
              size={20} 
              color={plotData.isFavorite ? "#FF6B00" : "#A0A0A0"} 
            />
          </TouchableOpacity>
        </View>

        {/* Property Title and Price */}
        <View className="p-4 border-b border-gray-200">
          <Text className="text-xl font-bold">{plotData.title}</Text>
          <Text className="text-sm text-gray-600 mt-1">{plotData.location}</Text>
        </View>

        {/* Property Details */}
        <View className="p-4 border-b border-gray-200">
          <Text className="text-base font-bold mb-3">Property Details</Text>
          
          <View className="flex-row mb-2">
            <View className="flex-1">
              <Text className="text-gray-500 text-sm">Type</Text>
              <Text className="font-medium">{plotData.propertyType}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-gray-500 text-sm">Plot Size</Text>
              <Text className="font-medium">{plotData.plotSize}</Text>
            </View>
          </View>
          
          <View className="flex-row mb-2">
            <View className="flex-1">
              <Text className="text-gray-500 text-sm">Listed By</Text>
              <Text className="font-medium">{plotData.listedBy}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-gray-500 text-sm">Width</Text>
              <Text className="font-medium">{plotData.width}</Text>
            </View>
          </View>
          
          <View className="flex-row mb-2">
            <View className="flex-1">
              <Text className="text-gray-500 text-sm">Depth</Text>
              <Text className="font-medium">{plotData.depth}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-gray-500 text-sm">Facing</Text>
              <Text className="font-medium">{plotData.facing}</Text>
            </View>
          </View>
        </View>

        {/* About Property */}
        <View className="p-4 border-b border-gray-200">
          <Text className="text-base font-bold mb-2">About Property</Text>
          <Text className="text-sm text-gray-700">{plotData.details}</Text>
          
          <View className="flex-row mt-3">
            <TouchableOpacity className="mr-3">
              <Text className="text-orange-500 text-sm">Report</Text>
            </TouchableOpacity>
            <TouchableOpacity className="mr-3">
              <Text className="text-orange-500 text-sm">Send Offer</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-orange-500 text-sm">SMS</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Agent Details */}
        <View className="p-4 border-b border-gray-200">
          <Text className="text-base font-bold mb-3">About Details</Text>
          
          <View className="flex-row items-center mb-3">
            <View className="w-10 h-10 bg-orange-100 rounded-full items-center justify-center mr-3">
              <FontAwesome5 name="user" size={16} color="#FF6B00" />
            </View>
            <View>
              <Text className="font-medium">{plotData.agentDetails.name}</Text>
              <Text className="text-xs text-gray-500">{plotData.agentDetails.description}</Text>
            </View>
          </View>
          
          <View className="mb-3">
            <Text className="text-sm text-gray-500 mb-1">Dealing in</Text>
            <Text className="text-sm">Sale, Rent, PG / Hostel / Paying Guest</Text>
          </View>
          
          <View>
            <Text className="text-sm text-gray-500 mb-1">Areas of Operation</Text>
            <Text className="text-sm">{plotData.areas.join(', ')}</Text>
          </View>
          
          <View className="mt-3">
            <Text className="text-sm text-gray-500 mb-1">Address</Text>
            <Text className="text-sm">{plotData.agentDetails.address}</Text>
          </View>
          
          <View className="mt-3">
            <TouchableOpacity className="flex-row items-center">
              <FontAwesome5 name="globe" size={14} color="#FF6B00" />
              <Text className="ml-2 text-sm text-blue-500">https://www.hprealestate.co.in</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Disclaimer */}
        <View className="p-4 border-b border-gray-200">
          <Text className="text-base font-bold mb-2">Disclaimer</Text>
          <Text className="text-xs text-gray-500">
            The information displayed is confirmed to be accurate by the advertiser. User is advised to undertake their own due diligence and make informed decisions.
          </Text>
          <TouchableOpacity className="mt-2">
            <Text className="text-orange-500 text-xs">Read More</Text>
          </TouchableOpacity>
        </View>
        
        {/* Book Visit Button */}
        <View className="p-4 pb-24">
          <TouchableOpacity 
            className="bg-orange-500 py-3 rounded-md items-center"
            onPress={() => router.push('/(guest)/book')}
          >
            <Text className="text-white font-medium">Book Visit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      {/* Bottom Action Bar */}
  
    </SafeAreaView>
  );
}