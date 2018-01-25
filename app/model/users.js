module.exports = app => {
    const mongoose = app.mongoose
    const userSchema = new mongoose.Schema({
        username : {type: String},
        password : {type: String}
    })
    return mongoose.model('user',userSchema)
}