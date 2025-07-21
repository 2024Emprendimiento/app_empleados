const mongoose = require('mongoose'); 
const URI = 'mongodb+srv://root:...';
mongoose.connect(URI)
     .then(db => console.log('DB is connected'))
     .catch(err => console.error(err));  
 module.exports = mongoose;


 
