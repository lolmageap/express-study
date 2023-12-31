const express = require("express");
const usersRouter = require('./routes/users.router')
const postsRouter = require('./routes/posts.router')
const productsRouter = require('./routes/products.router')
const {static} = require("express");

const PORT = 4000;
const path = require('path')
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect(`mongodb+srv://ekxk1234:wjd0322189!@express-cluster.piq9ydj.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(`mongodb error : ${err}`))

app.use(express.json());

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`${diffTime} ms`);
});

app.get("/", (req, res) => {

  // 동기 에러 처리
  throw new Error('it is an error')

  // 동기 에러 처리
  setImmediate(() => { next(new Error('it is an error')) })

  // res.render('index', {
  //   imageTitle: "It is a forest"
  // })
});


app.use((err, req, res, next) => {
  res.json({message : err.message})
})

app.use('/users', usersRouter)
app.use('/posts', postsRouter)
app.use('/products', productsRouter)

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
