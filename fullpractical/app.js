const express = require('express');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('auth/login');
});

app.get('/subscriptions/new', (req, res) => {
    res.render('subscriptions/new');
});

app.get('/subscriptions', (req, res) => {
    res.render('subscriptions/index');
});

app.get('/subscriptions/:id/edit', (req, res) => {
    res.render('subscriptions/edit', { id: req.params.id });
});

app.get('/subscriptions/:id', (req, res) => {
    res.render('subscriptions/show', { id: req.params.id });
});

app.get('/subscriptions/:id/delete', (req, res) => {
    res.render('subscriptions/delete', { id: req.params.id });
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});