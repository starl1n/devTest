const express = require('express');
const cors = require('cors');
const request = require("request");
const mongoose = require("mongoose")

const Article = require('./model/article');


const app = express();
 
app.use(cors())

//Connect to MongoDB
mongoose.connect('mongodb+srv://visquel123:Bienvenido7&@devconnector.bxjss.mongodb.net/?retryWrites=true&w=majority')

// PORT configuration
const PORT = 8080;

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/getData', (req, res, next) => {
  getData((err, data) => {
      if (err) {
          res.status(500);
          return next(err);
      }
      res.status(200);
      res.json(data);
  });   
});

app.post('/saveMongoDB', (req, res, next) => {
  getData((err, data) => {
    if (err) {
        res.status(500);
        console.log('Error retriving data from Bitmex');
        return next(err);
    }

    const article = new Article({
      _id: mongoose.Types.ObjectId,
      articleId: data.id,
      link: data.link,
      title: data.title,
      content: data.content,
      date: data.date
    })

    article
      .save()
      .then(result => {
        console.log(result);
      }).catch(err => {
        console.log(err);
      });
  });
})

// Server is up in PORT
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

const getData = (callback) => {
  const url = `https://www.bitmex.com/api/v1/announcement`;
  request(url, (error, response, body) => {
      if (error) {
          return callback(error);
      }
      if (response.statusCode == 200) {
        console.log("Success!");
        const data = JSON.parse(response.body)
        callback(null, data);
      } else {
          callback(response.statusCode);
      }
  });
};

