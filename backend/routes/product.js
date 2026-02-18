import express from 'express';
import Product from '../models/Product.js';
import User from '../models/User.js';
import { verifyToken } from '../middleware/auth.js'; // Abhi ise bhi banayenge

const router = express.Router();

// GET all products with Search & Pagination
router.get('/', async (req, res) => {
    try {
        const { search, page = 1, limit = 6 } = req.query;
        
        // Search Logic: Title mein keyword check karega (case-insensitive)
        const query = search 
            ? { title: { $regex: search, $options: 'i' } } 
            : {};

        const products = await Product.find(query)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Product.countDocuments(query);

        res.json({
            products,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new product
router.post('/', async (req, res) => {
    const { title, price, description, image } = req.body;
    try {
        const newProduct = new Product({ title, price, description, image });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Toggle Favorites (Add/Remove)
router.post('/favorite/:id', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        const productId = req.params.id;

        if (user.favorites.includes(productId)) {
            user.favorites = user.favorites.filter(id => id.toString() !== productId);
        } else {
            user.favorites.push(productId);
        }

        await user.save();
        res.json({ message: "Favorites updated", favorites: user.favorites });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;