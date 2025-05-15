// import { Image, Text, View } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// export default function ProductDetailScreen() {
//   const route = useRoute();
//   const { product } = route.params || {};
//   const parsedProduct = product ? JSON.parse(product) : null;

//   if (!parsedProduct) return <Text>No product data.</Text>;

//   return (
//     <View>
//       <Image source={{ uri: parsedProduct.image }} style={{ width: 200, height: 200 }} />
//       <Text style={{ color: 'red' }}>{parsedProduct.title}</Text>
//       <Text style={{ color: 'red' }}>{parsedProduct.price}</Text>
//       <Text style={{ color: 'red' }}>{parsedProduct.category}</Text>
//       <Text style={{ color: 'red' }}>{parsedProduct.description}</Text>
//     </View>
//   );
// }




import React from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetailScreen'>;

export default function ProductDetailScreen({ route, navigation }: Props) {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text>Category: {product.category}</Text>
      <Text>{product.description}</Text>

      <Button title="Open Camera" onPress={() => navigation.navigate('CameraScreen')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { width: '100%', height: 300, resizeMode: 'contain' },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  price: { fontSize: 18, marginVertical: 5 },
});
