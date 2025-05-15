import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type ProductListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductListScreen'
>;

type Props = {
  navigation: ProductListScreenNavigationProp;
};

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

const ProductListScreen: React.FC<Props> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Failed to load products. Please try again later.</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetailScreen', { product: JSON.stringify(item) })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});
