import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [interestedToBuy, setInterestedToBuy] = useState(false);
  
  const handleSubmit = () => {
    // Submit feedback
    router.push('/(guest)/explore');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 p-4">
        <View className="items-end mb-2">
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome5 name="times" size={20} color="#333" />
          </TouchableOpacity>
        </View>
        
        <Text className="text-xl font-bold mb-6">Give Feedback</Text>
        
        {/* Form Fields */}
        <View className="mb-4">
          <Text className="mb-1">Name</Text>
          <TextInput
            className="border border-gray-300 rounded-md p-2 mb-4"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
          
          <Text className="mb-1">Email ID</Text>
          <TextInput
            className="border border-gray-300 rounded-md p-2 mb-4"
            placeholder="Enter your email ID"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          
          <Text className="mb-1">Mobile Number</Text>
          <TextInput
            className="border border-gray-300 rounded-md p-2 mb-4"
            placeholder="Enter your mobile number"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={setMobile}
          />
        </View>
        
        {/* Rating */}
        <View className="mb-6">
          <Text className="mb-2">Rating</Text>
          <View className="flex-row">
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity 
                key={star}
                onPress={() => setRating(star)}
                className="mr-2"
              >
                <FontAwesome5 
                  name="star" 
                  size={24} 
                  solid={rating >= star}
                  color={rating >= star ? '#FFD700' : '#D1D1D1'} 
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Feedback Text */}
        <View className="mb-6">
          <Text className="mb-1">Share Your Feedback</Text>
          <TextInput
            className="border border-gray-300 rounded-md p-3 h-24"
            placeholder="Write your feedback here..."
            multiline
            textAlignVertical="top"
            value={feedback}
            onChangeText={setFeedback}
          />
        </View>
        
        {/* Interested to Buy */}
        <TouchableOpacity 
          className="flex-row items-center mb-8" 
          onPress={() => setInterestedToBuy(!interestedToBuy)}
        >
          <View className={`w-5 h-5 border rounded-sm mr-2 items-center justify-center ${
            interestedToBuy ? 'bg-orange-500 border-orange-500' : 'border-gray-400'
          }`}>
            {interestedToBuy && <FontAwesome5 name="check" size={10} color="white" />}
          </View>
          <Text>Interested To Buy</Text>
        </TouchableOpacity>
        
        {/* Submit Button */}
        <TouchableOpacity 
          className="bg-orange-500 py-3 rounded-md items-center"
          onPress={handleSubmit}
        >
          <Text className="text-white font-medium">Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}