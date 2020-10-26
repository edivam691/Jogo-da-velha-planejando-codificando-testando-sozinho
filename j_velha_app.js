const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/',(req,res)=>{
    res.render('index');
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('servidor de pé em http://localhost:3000');
});