import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantsNavigator } from './restaurants.navigator';
import { SettingsNavigator } from './settings.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';

import { FavouritesContextProvider } from '../../services/favourites/favourites.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: [
              {
                display: 'flex',
              },
              null,
            ],
          }}
          // tabBarOptions={{
          //   activeTintColor: 'tomato',
          //   inactiveTintColor: 'gray',
          // }}
        >
          <Tab.Screen
            name='Restaurants'
            component={RestaurantsNavigator}
            options={createScreenOptions}
          />
          <Tab.Screen
            name='Map'
            component={MapScreen}
            options={createScreenOptions}
          />
          <Tab.Screen
            name='Settings'
            component={SettingsNavigator}
            options={createScreenOptions}
          />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
