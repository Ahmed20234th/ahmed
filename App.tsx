// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import ProductListScreen from './screens/ProductListScreen';
// import ProductDetailScreen from './screens/ProductDetailScreen';
// import CameraScreen from './screens/CameraScreen';

// export type RootStackParamList = {
//   ProductListScreen: undefined;
//   ProductDetailScreen: { product: string };
//   CameraScreen: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="ProductListScreen">
//         <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
//         <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
//         <Stack.Screen name="CameraScreen" component={CameraScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CameraScreen from './screens/CameraScreen';

export type RootStackParamList = {
  ProductListScreen: undefined;
  ProductDetailScreen: { product: any };
  CameraScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductListScreen">
        <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
