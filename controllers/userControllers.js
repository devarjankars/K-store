const sequelize= require('../utils/database');
const store= require('../models/store')
const path= require('path');
const { where } = require('sequelize');
const { log } = require('console');
// itemName ,itemInfo, itemPrice, stock

exports.postItem=(req, res, next)=>{
   const itemName= req.body.itemName;
   const itemInfo=req.body.itemInfo;
   const itemPrice=req.body.itemPrice ;
   const stock= req.body.stock;
 let datOBj=  { 
     itemName:itemName,
     itemInfo:itemInfo,
     itemPrice:itemPrice ,
     stock:stock,
};
   store.create(datOBj)
   .then((result)=>{
    console.log(result);
    res.redirect('/get');
   }).catch((err)=>{console.log(err);})
};

exports.getPage=(req,res,next)=>{
    res.sendFile(path.join(__dirname, "../", "views", "index.html"));
};
exports.getAllItems=(req,res,next)=>{
    store.findAll()
    .then((items)=>{res.json(items);
    })
    .catch((err)=>{console.log(err);})
};

// exports.delTodos=( req, res, next)=>{
//     let id=req.params.id;
//     store.findByPk(id)
//     .then((result)=>{
//         return result.destroy();
//     }).then(()=>{
//         res.redirect('/get');
//     })
//     .catch((err)=>{console.log(err);})


// };
exports.buyone=(req, res,next)=>{
    let id=req.params.id;
    let newstock=1;
    store.findByPk(id)
    .then((result)=>{
        console.log(result)
       let oldstock= result.stock;
       
       newstock=oldstock-newstock;
       return result.update({stock:newstock})
       .then((updated)=>{
        console.log(updated)
       return res.redirect('/get')
       }) .catch((err)=>{console.log(err);})
    })
    .catch((err)=>{console.log(err);})

  
}
exports.buytwo=(req, res,next)=>{
    let id=req.params.id;
    let newstock=2;
    store.findByPk(id)
    .then((result)=>{
        console.log(result)
       let oldstock= result.stock;
       
       newstock=oldstock-newstock;
       return result.update({stock:newstock})
       .then((updated)=>{
        console.log(updated)
       return res.redirect('/get')
       }) .catch((err)=>{console.log(err);})
    })
    .catch((err)=>{console.log(err);})

}