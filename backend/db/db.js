import mongoose from "mongoose";

const dbConnection = async () => {
try {
    await mongoose.connect(process.env.DB_CONNECTION, {
    useNewURLParser: true,
    useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB : ON");

} catch (e) {
    console.log("Error connecting with MongoDB: \n " + e);

}

};

export default { dbConnection };