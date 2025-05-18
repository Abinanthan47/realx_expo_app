import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function BookVisit() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isInterested, setIsInterested] = useState(false);

  const currentMonth = 'June 2024';
  
  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      days.push(i);
    }
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  
  const handleSubmit = () => {
    // Submit booking
    router.push('/(guest)/book/success');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 p-4">
        <Text className="text-xl font-bold">Book Visit</Text>
        
        {/* Agent Information */}
        <View className="mt-6 mb-4 flex-row items-center">
          <View className="w-10 h-10 bg-orange-100 rounded-full items-center justify-center mr-3">
            <FontAwesome5 name="user" size={16} color="#FF6B00" />
          </View>
          <View>
            <Text className="font-medium">H P Real Estate</Text>
            <Text className="text-xs text-gray-500">Member since Dec 2021</Text>
          </View>
        </View>
        
        {/* Form Fields */}
        <View className="mt-4">
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
        
        {/* Calendar for Date Selection */}
        <View className="mt-4">
          <Text className="font-medium mb-2">Select Date And Time</Text>
          
          <View className="border border-gray-300 rounded-md p-3 mb-4">
            <Text className="text-center font-medium mb-2">{currentMonth}</Text>
            
            {/* Weekday headers */}
            <View className="flex-row justify-between mb-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <Text key={index} className="text-center text-gray-500 w-6">{day}</Text>
              ))}
            </View>
            
            {/* Calendar days */}
            <View className="flex-row flex-wrap">
              {calendarDays.map((day) => (
                <TouchableOpacity
                  key={day}
                  className={`w-[14.28%] aspect-square items-center justify-center mb-2 ${
                    selectedDate === day.toString() ? 'bg-orange-500 rounded-full' : ''
                  }`}
                  onPress={() => setSelectedDate(day.toString())}
                >
                  <Text className={selectedDate === day.toString() ? 'text-white' : 'text-black'}>
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        
        {/* Time Selection */}
        <View className="mb-4">
          <Text className="mb-2">Time</Text>
          <View className="flex-row">
            <TouchableOpacity
              className={`mr-3 px-4 py-2 rounded-md ${
                selectedTime === '9:00 AM' ? 'bg-orange-500' : 'bg-gray-200'
              }`}
              onPress={() => setSelectedTime('9:00 AM')}
            >
              <Text className={selectedTime === '9:00 AM' ? 'text-white' : 'text-black'}>
                9:00 AM
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              className={`mr-3 px-4 py-2 rounded-md ${
                selectedTime === '11:00 AM' ? 'bg-orange-500' : 'bg-gray-200'
              }`}
              onPress={() => setSelectedTime('11:00 AM')}
            >
              <Text className={selectedTime === '11:00 AM' ? 'text-white' : 'text-black'}>
                11:00 AM
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              className={`px-4 py-2 rounded-md ${
                selectedTime === '2:00 PM' ? 'bg-orange-500' : 'bg-gray-200'
              }`}
              onPress={() => setSelectedTime('2:00 PM')}
            >
              <Text className={selectedTime === '2:00 PM' ? 'text-white' : 'text-black'}>
                2:00 PM
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Interested to Buy */}
        <TouchableOpacity 
          className="flex-row items-center mb-6" 
          onPress={() => setIsInterested(!isInterested)}
        >
          <View className={`w-5 h-5 border rounded-sm mr-2 items-center justify-center ${
            isInterested ? 'bg-orange-500 border-orange-500' : 'border-gray-400'
          }`}>
            {isInterested && <FontAwesome5 name="check" size={10} color="white" />}
          </View>
          <Text>Interested To Buy</Text>
        </TouchableOpacity>
        
        {/* Submit Button */}
        <TouchableOpacity 
          className="bg-orange-500 py-3 rounded-md items-center mt-4"
          onPress={handleSubmit}
        >
          <Text className="text-white font-medium">Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}