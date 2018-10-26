const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 8005

app.use(bodyParser.json())


app.get('/api/user', (req, res) => {
  
})
app.listen(port, () => {
  console.log('listening on port', port);
})
