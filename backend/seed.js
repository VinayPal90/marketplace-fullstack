import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/User.js';
import Product from './models/Product.js';

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        
        // Purana data clear karein
        await User.deleteMany({});
        await Product.deleteMany({});

        // 2 Dummy Users
        const hashedPassword = await bcrypt.hash('password123', 12);
        await User.insertMany([
            { name: 'Test User 1', email: 'user1@example.com', password: hashedPassword },
            { name: 'Test User 2', email: 'user2@example.com', password: hashedPassword }
        ]);

        // 10 Dummy Products
        const products = Array.from({ length: 10 }).map((_, i) => ({
            title: `Product ${i + 1}`,
            price: Math.floor(Math.random() * 1000) + 100,
            description: `This is a high-quality description for Product ${i + 1}.`,
            image: `https://picsum.photos/200?random=${i}` // Random images
        }));

        await Product.insertMany(products);

        console.log("✅ Database Seeded Successfully!");
        process.exit();
    } catch (error) {
        console.error("❌ Seeding Error:", error);
        process.exit(1);
    }
};

seedData();