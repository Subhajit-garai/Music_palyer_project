import mongoose from 'mongoose';

// Connect to MongoDB
export const DbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, { dbName: "test_Music_app" })
    } catch (error) {
        console.error('database connection failed');
        process.exit(0);
    }
}


