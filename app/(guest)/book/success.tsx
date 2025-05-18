import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link, router } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function BookingSuccess() {
  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <View className="flex-1 items-center justify-center">
        {/* Success Icon */}
        <View className="w-20 h-20 bg-green-100 rounded-full items-center justify-center mb-4">
          <FontAwesome5 name="check" size={30} color="green" />
        </View>
        
        <Text className="text-xl font-bold mb-2">You Got Approved!</Text>
        
        {/* QR Code */}
        <View className="w-48 h-48 bg-white border border-gray-300 rounded-md items-center justify-center mb-6">
          <View className="w-40 h-40 bg-white">
            <FontAwesome5 name="qrcode" size={160} color="black" />
          </View>
        </View>
        
        <TouchableOpacity 
          className="bg-orange-500 py-3 px-6 rounded-md items-center mb-6"
          onPress={() => router.push('/(guest)/visits')}
        >
          <Text className="text-white font-medium">Save QR to Phone</Text>
        </TouchableOpacity>
        
        <View className="w-full">
          <Text className="text-base font-medium mb-2">About Details</Text>
          
          <View className="flex-row items-center mb-3">
            <View className="w-10 h-10 bg-orange-100 rounded-full items-center justify-center mr-3">
              <FontAwesome5 name="user" size={16} color="#FF6B00" />
            </View>
            <View>
              <Text className="font-medium">H P Real Estate</Text>
              <Text className="text-xs text-gray-500">Member since Dec 2021</Text>
            </View>
          </View>
          
          <View className="mb-3">
            <Text className="text-sm text-gray-500">Dealing in</Text>
            <Text className="text-sm">Sale, Rent of Residential Property</Text>
          </View>
          
          <View className="flex-row items-center mb-3">
            <FontAwesome5 name="map-marker-alt" size={14} color="#FF6B00" className="mr-2" />
            <Text className="text-sm">621/3 Plot, Rajarampuri Near Savarkar Chowk, Kolhapur</Text>
          </View>
          
          <TouchableOpacity className="flex-row items-center">
            <FontAwesome5 name="globe" size={14} color="#FF6B00" />
            <Text className="ml-2 text-sm text-blue-500">https://www.hprealestate.co.in</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Bottom Navigation */}
     
    </SafeAreaView>
  );
}