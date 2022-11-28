const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json())
//console.log(app);
const inventory = [
    "greeting card",
    "wagon",
    "computer",
    "table",
    "chair",
    "milk",
    "sailboat",
    "conditioner",
    "rusty nail",
    "desk",
  ];

app.get('/api/inventory', (req, res) =>{
    //console.log('req', req, '-------', 'res', res)
    if(req.qurey.item){
        //console.log(req.query.item)
        const filtereditems = inventory.fliter((invitem) => invitem.toLowerCase().includes(req.qurey.item.toLowerCase()))
        res.status(200).send(filtereditems)
    }else{
        res.status(200).send(inventory)
    }
    
});

app.get('/api/inventory;id',(req,res) =>{
    //console.log(req.params.id);
    res.status(200).send(inventory[+req.params.id])
})
app.listen(5050,() => console.log(`server jammin on port 5050`));