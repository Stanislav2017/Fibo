const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    num: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true
});

const Story = new mongoose.model('Story', StorySchema);

module.exports = Story;