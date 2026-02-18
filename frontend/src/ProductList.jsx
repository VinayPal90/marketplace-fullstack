const fetchProducts = async () => {
  const { data } = await axios.get(`http://localhost:5000/api/products?search=${searchTerm}&page=${page}`);
  setProducts(data.products);
  setTotalPages(data.totalPages);
};