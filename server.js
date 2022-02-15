const express = require('express');
const app = express();
const port = 8080;


app.use('/', express.static(__dirname + "/"))

app.use(
    express.urlencoded({
      extended: true
    })
  )
  
  app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});

