import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants-screen';

import { RestaurantDetailsScreen } from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        presentation: 'modal',
        headerShown: false,
      }}>
      <RestaurantStack.Screen name='Restaurant' component={RestaurantsScreen} />

      <RestaurantStack.Screen
        options={{ title: 'Restaurant Detail' }}
        name='RestaurantDetail'
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
