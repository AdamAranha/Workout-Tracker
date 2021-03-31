const express = require('express');
const app = express();
const path = require('path')

const PORT = process.env.PORT || 3000;

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/public')));
// Routing all endpoints to ./controllers/burger_controller

// app.get('/', (req, res) => {
//     res.render('index.handlebars')
// })

app.listen(PORT, () => console.log('Server started on PORT', PORT))
