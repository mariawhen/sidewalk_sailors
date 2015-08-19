var mongoose = require('mongoose');

var TreasureSchema = new mongoose.Schema({
    name: String,
    description: String,
    img_url: String,
    cross_street: String,
    city: {
        type: String,
        default: 'Los Angeles'
    },
    state: {
        type: String,
        default: 'Ca'
    },
    zipcode: String,
    archived: {
        type: Boolean,
        default: false
    },
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
