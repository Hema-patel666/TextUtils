const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  console.log(req)
  const { email, password } = req.body
  console.log(req.body)
  if (email === 'user@example.com' && password === 'password') {
    
    return res.status(200).send({
      message: 'Login successful!',
      data: req.body
    });
  } else {
   console.log("Invalid Credential........!")
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

const port = 4042;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
