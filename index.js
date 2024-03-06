// index.js
const express = require('express');
const registerRouter = require('./route/register_route');  
const loginRouter = require('./route/login_route');  


const app = express();
const PORT = process.env.PORT || 3000;

app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
