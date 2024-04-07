const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('../server/models/Users');

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/user', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.post('/signup', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json('Error:'+ err));
   
    res.send('Signup successful'); 
  });


 
app.post('/login', (req, res) => {
  const { email, password } = req.body;

 
  UserModel.findOne({ email: email})
      .then(user => {
          if (user) {
          
              if(user.password === password) {
                res.json('Successfully logged in');
              }
          } else {
              
              res.json({ message: 'Invalid email or password' });
          }
      })
      .catch(err => {
      
          console.error('Error:', err);
          res.status(500).json({ message: 'Internal server error' });
      });
});

  app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
})
