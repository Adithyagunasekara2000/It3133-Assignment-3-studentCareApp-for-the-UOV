import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons from expo
import ProfilePage from './Profile';
import CourseDetailsPage from './Course';
import SubjectDetailsPage from './Subjects';

const Tab = createBottomTabNavigator();

export default function BottomTabs({ route }) {
  const { user } = route.params; // Get user from route params

  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#8B008B', // Dark magenta background for the tab bar
        },
        tabBarActiveTintColor: '#fff', // Active tab icon color
        tabBarInactiveTintColor: '#d3d3d3', // Inactive tab icon color
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        initialParams={{ user }} // Pass user params to ProfilePage
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Course"
        component={CourseDetailsPage}
        initialParams={{ user }} // Pass user params to CourseDetailsPage
        options={{
          tabBarLabel: 'Course',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Subject"
        component={SubjectDetailsPage}
        initialParams={{ user }}
        options={{
          tabBarLabel: 'Subject',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
