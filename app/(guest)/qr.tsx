import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function QRCode() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4 flex-1">
        <View className="items-end mb-2">
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome5 name="times" size={20} color="#333" />
          </TouchableOpacity>
        </View>
        
        <Text className="text-xl font-bold text-center mb-6">You Got Approved!</Text>
        
        {/* QR Code */}
        <View className="items-center mb-8">
          <View className="w-64 h-64 bg-white border border-gray-300 rounded-md items-center justify-center mb-4">
            <View className="w-56 h-56 bg-white">
              <FontAwesome5 name="qrcode" size={200} color="black" />
            </View>
          </View>
          
          <TouchableOpacity 
            className="bg-orange-500 py-3 px-10 rounded-md items-center"
          >
            <Text className="text-white font-medium">Save QR to Phone</Text>
          </TouchableOpacity>
        </View>
        
        {/* Property Details */}
        <View className="mb-6">
          <Text className="text-base font-bold mb-2">About Details</Text>
          
          <View className="flex-row items-center mb-3">
            <View className="w-10 h-10 bg-orange-100 rounded-full items-center justify-center mr-3">
              <FontAwesome5 name="user" size={16} color="#FF6B00" />
            </View>
            <View>
              <Text className="font-medium">H P Real Estate</Text>
              <Text className="text-xs text-gray-500">Member since Dec 2021</Text>
            </View>
          </View>
        </View>
        
        {/* Visit Details */}
        <View className="mb-6">
          <Text className="text-base font-bold mb-2">Dealing in</Text>
          <Text className="text-sm">Sale, Rent of Residential Property</Text>
        </View>
        
        {/* Agent Location */}
        <View className="mb-6">
          <Text className="text-base font-bold mb-2">Location</Text>
          <Text className="text-sm">621/3 Plot, Rajarampuri Near Savarkar Chowk, Kolhapur</Text>
        </View>
        
        {/* Agent Website */}
        <View>
          <TouchableOpacity className="flex-row items-center">
            <FontAwesome5 name="globe" size={14} color="#FF6B00" />
            <Text className="ml-2 text-sm text-blue-500">https://www.hprealestate.co.in</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Bottom Action */}
      <View className="p-4 border-t border-gray-200">
        <TouchableOpacity 
          className="bg-orange-500 py-3 rounded-md items-center"
          onPress={() => router.push('/(guest)/feedback')}
        >
          <Text className="text-white font-medium">Give Feedback</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}