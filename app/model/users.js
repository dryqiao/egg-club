module.exports = app => {
    const mongoose = app.mongoose
    const UserSchema = new mongoose.Schema({
        username : {
            type: String,
            unique: true,
            require: true
        },
        password : {
            type: String,
            require: true
        },
        token: {
            type: String
        }
    })
    return mongoose.model('Users',UserSchema)
}