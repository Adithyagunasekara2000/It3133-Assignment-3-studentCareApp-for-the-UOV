import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import ProfilePage from './Profile';
import CourseDetailsPage from './Course'; 
import SubjectDetailsPage from './Subjects'; 

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#8B008B',
        },
        tabBarActiveTintColor: '#fff', 
        tabBarInactiveTintColor: '#d3d3d3',
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Course"
        component={CourseDetailsPage} 
        options={{
          tabBarLabel: 'Course',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Subject"
        component={SubjectDetailsPage} 
        options={{
          tabBarLabel: 'Subject',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
