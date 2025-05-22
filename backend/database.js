const mongoose = require('mongoose'); 
const URI = 'mongodb+srv://root:1234@cluster0.6fc7p1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(URI)
     .then(db => console.log('DB is connected'))
     .catch(err => console.error(err));  
 module.exports = mongoose;


 