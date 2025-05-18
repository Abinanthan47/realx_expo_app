import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Link, router } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

// Mock data for visits
const visitsData = [
  {
    id: '1',
    plotName: 'Agricultural/Farm Land',
    location: 'Kagal-Hatkanangale',
    date: '12 June 2024',
    time: '11:00 AM',
    status: 'Approved',
    agent: 'H P Real Estate'
  },
  {
    id: '2',
    plotName: 'Residential Plot',
    location: 'Rajarampuri, Kolhapur',
    date: '15 June 2024',
    time: '9:00 AM',
    status: 'Pending',
    agent: 'H P Real Estate'
  },
  {
    id: '3',
    plotName: 'Industrial Plot',
    location: 'MIDC Shiroli',
    date: '18 June 2024',
    time: '2:00 PM',
    status: 'Pending',
    agent: 'City Properties'
  }
];

export default function Visits() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 p-4">
        <Text className="text-xl font-bold mb-4">My Visits</Text>
        
        {visitsData.map((visit) => (
          <TouchableOpacity 
            key={visit.id}
            className="border border-gray-200 rounded-lg p-4 mb-4"
            onPress={() => {
              if (visit.status === 'Approved') {
                router.push('/(guest)/qr');
              }
            }}
          >
            <View className="flex-row justify-between items-start">
              <View>
                <Text className="font-bold text-base">{visit.plotName}</Text>
                <Text className="text-gray-600 text-sm">{visit.location}</Text>
              </View>
              
              <View className={`px-3 py-1 rounded-full ${
                visit.status === 'Approved' ? 'bg-green-100' : 'bg-yellow-100'
              }`}>
                <Text className={
                  visit.status === 'Approved' ? 'text-green-700' : 'text-yellow-700'
                }>
                  {visit.status}
                </Text>
              </View>
            </View>
            
            <View className="flex-row mt-3">
              <View className="flex-row items-center mr-4">
                <FontAwesome5 name="calendar" size={12} color="#666" />
                <Text className="text-gray-600 text-sm ml-2">{visit.date}</Text>
              </View>
              
              <View className="flex-row items-center">
                <FontAwesome5 name="clock" size={12} color="#666" />
                <Text className="text-gray-600 text-sm ml-2">{visit.time}</Text>
              </View>
            </View>
            
            <View className="flex-row items-center mt-3">
              <View className="w-8 h-8 bg-orange-100 rounded-full items-center justify-center mr-2">
                <FontAwesome5 name="user" size={12} color="#FF6B00" />
              </View>
              <Text className="text-gray-700">{visit.agent}</Text>
            </View>
            
            {visit.status === 'Approved' && (
              <View className="mt-3 flex-row">
                <TouchableOpacity 
                  className="bg-orange-500 px-4 py-2 rounded-md mr-3"
                  onPress={() => router.push('/(guest)/qr')}
                >
                  <Text className="text-white">View QR</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  className="bg-white border border-orange-500 px-4 py-2 rounded-md"
                  onPress={() => router.push('/(guest)/feedback')}
                >
                  <Text className="text-orange-500">Give Feedback</Text>
                </TouchableOpacity>
              </View>
            )}
            
            {visit.status === 'Pending' && (
              <View className="mt-3">
                <TouchableOpacity className="bg-white border border-gray-300 px-4 py-2 rounded-md">
                  <Text className="text-gray-700">Cancel Visit</Text>
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}