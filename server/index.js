const express = require('express');
const dotenv = require('dotenv').config();
const {mongoose} = require('mongoose');
const app = express();

// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected...'))
// .catch((err) => console.log(err));


mongoose.connect(process.env.MONGO_URL) 
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.log(err));

app.use(express.json())
// app.use(cors(corsOptions));

app.use('/', require('./routes/authRoutes'))

const port = 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


