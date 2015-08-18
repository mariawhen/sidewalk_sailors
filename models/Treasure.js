var mongoose = require('mongoose');

var TreasureSchema = new mongoose.Schema({
    name: String,
    description: String,
    img_url: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    archived: Boolean,
    posted_date: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    pirate_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Pirate'
    }
});

module.exports = mongoose.model('Treasure', TreasureSchema);
