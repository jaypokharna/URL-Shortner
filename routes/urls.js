const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongodb connection
// mongoose.connect("mongodb+srv://jayp:2012@cluster0.ozimw5y.mongodb.net/urldb");
mongoose.connect(process.env.MONGO_URL);


// Define the url schema
const urlSchema = new Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitHistory: [{
        timestamp: { type: Number }
    }]
});

// Exporting the url schema
module.exports = mongoose.model('url', urlSchema);
