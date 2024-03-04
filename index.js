const express = require("express")
const app = express()

const PORT = process.env.PORT | 5000;

app.listen(PORT,()=>{
    console.log(`Server is lisening on ${PORT}`);
});

app.use(express.json());

app.post('/contact', (req,res)=> {
    console.log(req.body);
});


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/number', (req, res) => {
    const number = 10

    res.json(number);
});
