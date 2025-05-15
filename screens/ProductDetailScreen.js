import { Image, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ProductDetailScreen() {
  const route = useRoute();
  const { product } = route.params || {};
  const parsedProduct = product ? JSON.parse(product) : null;

  if (!parsedProduct) return <Text>No product data.</Text>;

  return (
    <View>
      <Image source={{ uri: parsedProduct.image }} style={{ width: 200, height: 200 }} />
      <Text style={{ color: 'red' }}>{parsedProduct.title}</Text>
      <Text style={{ color: 'red' }}>{parsedProduct.price}</Text>
      <Text style={{ color: 'red' }}>{parsedProduct.category}</Text>
      <Text style={{ color: 'red' }}>{parsedProduct.description}</Text>
    </View>
  );
}
