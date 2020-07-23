import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({msg: 'Abestadu!'});
});

app.listen(3333, () => console.log('estamos de pé!'));