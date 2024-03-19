const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vishakhaarayalil:4565@cluster0.0ccubke.mongodb.net/CabDb').then(
    ()=>{
        console.log('connected');
    }
).catch(err=>{
    console.log(err);
})