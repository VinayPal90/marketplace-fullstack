import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import API from '../api/axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get(`/products?search=${search}`);
        setProducts(data.products);
      } catch (err) {
        console.log("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, [search]);

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="🔍 Search products..." 
        style={styles.searchBar}
        onChangeText={setSearch}
      />
      <FlatList 
        data={products}
        keyExtractor={(item) => item._id}
        numColumns={2} // Grid look ke liye
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
            <TouchableOpacity style={styles.favBtn}>
                <Text>❤️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 10 },
  searchBar: { backgroundColor: '#fff', padding: 12, borderRadius: 15, marginBottom: 20, marginTop: 50, elevation: 2 },
  card: { flex: 0.5, backgroundColor: '#fff', margin: 5, padding: 10, borderRadius: 15, elevation: 3 },
  image: { width: '100%', height: 120, borderRadius: 10 },
  title: { fontSize: 14, fontWeight: 'bold', marginVertical: 5 },
  price: { color: '#2563eb', fontWeight: 'bold' },
  favBtn: { position: 'absolute', top: 10, right: 10, backgroundColor: '#fff', borderRadius: 20, padding: 5 }
});

export default HomeScreen;