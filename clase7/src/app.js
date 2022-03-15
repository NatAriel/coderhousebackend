import express from 'express';
import {bringProducts} from './../manager/Archivo.js';

const app = express();
const PORT = 8081;
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

let visitasItems = 0;
let visitasItemRandom = 0;

app.get('/items',(req,res)=>{
    visitasItems++;
    let prodArr = [];
    bringProducts().then(response => {
            prodArr = response.map(item => item.name);
            let prodObj = {
                items: prodArr,
                cantidad: prodArr.length
            }
            res.send(prodObj);
        })
        .catch(err => console.log(err));
});
app.get('/item-random',(req,res)=>{
    visitasItemRandom++;
    let prodArr = [];
    bringProducts()
        .then(response => {
            prodArr = response.map(item => item.name);
            let index = Math.floor(Math.random()*prodArr.length+1);
            res.send({item: prodArr[index]});
        })
        .catch(err => console.log(err));
});
app.get('/visitas',(req,res)=>{
    let visitas = {
        visitas : { items: visitasItems, item: visitasItemRandom } 
    }
    res.send(visitas);
});