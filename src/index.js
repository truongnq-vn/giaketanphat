const morgan = require('morgan');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const route = require('./routes');
const db = require('./config/db');
const sitemapRouter = require("./routes/sitemap");

// Connect to DB
db.connect();

const app = express();
const PORT = process.env.PORT ||8000;

app.use("/sitemap.xml", sitemapRouter);

app.use(express.static(path.join(__dirname, 'public')));
// http logger
app.use(morgan('combined'));
//Teample engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
// Route
route(app);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
