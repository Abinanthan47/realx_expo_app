import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_500Medium } from '@expo-google-fonts/inter/500Medium';
import { useFonts } from '@expo-google-fonts/inter/useFonts';
import { Tabs } from 'expo-router';
import { CalendarCheck, Home, MoreHorizontal, QrCode, Search, Star } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import AppLoading from '../AppLoading';

// Custom tab bar component to match the design in the image
function TabBar({ state, descriptors, navigation }) {
  // Define the icons and labels for each tab
  const tabConfig = {
    explore: { icon: Home, label: 'Home' },
    search: { icon: Search, label: 'Search' },
    visits: { icon: QrCode, label: 'Visits' },
    feedback: { icon: Star, label: 'Feedback' },
    more: { icon: MoreHorizontal, label: 'More' },
  };

  return (
    <View className="flex-row border-t border-gray-200 bg-white px-2 pb-4 pt-2">
      {Object.keys(tabConfig).map((routeName, index) => {
        const { icon: Icon, label } = tabConfig[routeName];
        const isFocused = state.index === index;

        // Find the route that corresponds to this tab
        const route = state.routes.find((r) => {
          // Handle special case for "more" which maps to profile
          if (routeName === 'more' && r.name === 'profile') {
            return true;
          }
          // Handle special case for "search" which maps to projects
          if (routeName === 'search' && r.name === 'projects') {
            return true;
          }
          return r.name === routeName;
        });

        if (!route) return null;

        const { options } = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Circle indicator for active tab
        const renderIndicator = () => {
          if (isFocused) {
            return <View className="absolute bottom-1 h-2 w-2 rounded-full bg-orange-500" />;
          }
          return <View className="h-2 w-2 rounded-full bg-transparent" />;
        };

        return (
          <Pressable key={index} onPress={onPress} className="flex-1 items-center justify-center">
            <Icon
              size={20}
              color={isFocused ? '#FF6B00' : '#A0A0A0'}
              strokeWidth={isFocused ? 2.5 : 2}
            />
            <Text className={`mt-1 text-xs ${isFocused ? 'text-orange-500' : 'text-gray-500'}`}>
              {label}
            </Text>
            {renderIndicator()}
          </Pressable>
        );
      })}
    </View>
  );
}

export default function AppLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#FF6B00',
        tabBarInactiveTintColor: '#A0A0A0',
        tabBarStyle: { display: 'none' }, // Hide default tab bar as we're using custom
      }}
      tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="explore"
        options={{
          title: 'RealEstatex',
          headerTitleStyle: { fontWeight: 'medium', fontFamily: 'inter' },
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Projects',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Tabs.Screen
        name="visits"
        options={{
          title: 'My Visits',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Tabs.Screen
        name="feedback"
        options={{
          title: 'Feedback',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
     
    </Tabs>
  );
}
