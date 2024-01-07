const mongoose = require("mongoose");

const connect = async () => {
    try {
        // mongodb connection
        const con = mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnififiedTopology: true,
            useFindandModify: false,
            useCreateIndex: true
        });

        console.log(`MongoDB connected ${con.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connect