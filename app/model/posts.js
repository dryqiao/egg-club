module.exports = app => {
    const mongoose = app.mongoose
    const PostSchema = new mongoose.Schema({
        title: {
            type: String,
            require: true
        },
        content: {
            type: String,
            require: true
        },
        author: {
            type: String,
            unique: true
        },
        visit_count: {
            type: Number,
            default: 0
        },
        reply_count: {
            type: Number,
            default: 0
        },
        create_at: {
            type: Date,
            default: Date.now
        },
        last_reply_at: {
            type: Date,
            default: Date.now
        },
    })
    return mongoose.model('Posts', PostSchema)
}
