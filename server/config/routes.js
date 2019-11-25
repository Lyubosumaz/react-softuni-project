module.exports = (app) => {
    app.get('/', (req, res) => { res.json({ test: "TEST" }); });
    app.get('*', (req, res) => { res.status(404); res.send('404 Not Found'); res.end(); });
};