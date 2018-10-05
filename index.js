const express = require ('express');
const app = express ();



app.set('view engine', 'ejs');
app.use('/css' , express.static('estilo'));


app.get('/' , (requisicao,resposta) => {     
    resposta.render('index');


});


app.listen (process.env.PORT || 3000, () => {
    console.log('Servidor inicializado')
});