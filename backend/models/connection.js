const mongoose = require('mongoose');
     
const connectionString = 'mongodb+srv://rakehal:yu41vQ2eCnnilqt2@cluster0.j9cte6h.mongodb.net/tickethack';  //<-- nom du projet

mongoose.connect(connectionString, { connectTimeoutMS: 2000 }).then(() => console.log('Database connected')).catch(error => console.error(error));