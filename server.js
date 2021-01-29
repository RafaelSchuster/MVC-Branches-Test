const express = require('express');
const app = express();
const mainRouter = require('./routers/mainRouter');
const partyRouter = require('./routers/PartyRouters');

app.use(mainRouter);


app.listen(5000, () => {
    console.log('Running on 5000');
})