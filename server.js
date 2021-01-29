const express = require('express');
const app = express();
const mainRouter = require('./routers/mainRouter');
const partyRouter = require('./routers/PartyRouters');
const testRouter =require('./routers/TestRouter');

app.use(mainRouter);
app.use(partyRouter);

app.listen(5000, () => {
    console.log('Running on 5000');
})