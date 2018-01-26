module.exports = app => {
    const mongoose = app.mongoose
    const UserSchema = new mongoose.Schema({
        username : {
            type: String,
            unique: true
        },
        password : {type: String}
    })
    return mongoose.model('Users',UserSchema)
}