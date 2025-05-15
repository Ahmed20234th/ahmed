import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProductListScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigation = useNavigation(); // ✅ useNavigation from React Navigation

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Failed to load products.</Text>;

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('/screens/ProductDetailScreen', {
                product: JSON.stringify(item),
              })
            }
          >
            <View style={{ padding: 10 }}>
              <Image source={{ uri: item.image }} style={{ width: 80, height: 80 }} />
              <Text style={{ color: 'red' }}>{item.title}</Text>
              <Text style={{ color: 'red' }}>${item.price}</Text>
              <Button
                title="Open Camera"
                onPress={() => navigation.navigate('/screens/CameraScreen')}
              />
            </View>
          </TouchableOpacity>
        )}
      />
      <Button
        title="Open Camera"
        onPress={() => navigation.navigate('CameraScreen')}
      />
    </View>
  );
}





