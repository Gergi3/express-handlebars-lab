const express = require('express');
const handlebars = require('express-handlebars');
const { catsRouter } = require('./routers/cats'); 
const { freemanRouter } = require('./routers/freeman'); 
const { othersRouter } = require('./routers/others'); 
const { staticFilesRouter } = require('./routers/staticFiles'); 
const { homeRouter } = require('./routers/home'); 
const { defaultMiddleware } = require('./middlewares/default');

const app = express();
const port = 5000;

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './views'); // default

app.use(defaultMiddleware);

app.use('/', staticFilesRouter);
app.use('/', homeRouter);
app.use('/cats', catsRouter);
app.use('/', freemanRouter);
app.use('/', othersRouter);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
