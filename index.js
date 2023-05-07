const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const assert = require('assert');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

const db = require('./lib/db');


app.get('/', (req, res) => {
    res.redirect('/Home');
    return;
});
app.get('/Log_In',(req, res) => {
        res.sendFile(__dirname +'/views/Crit_Hit_Gear_Log_In_Page.html','utf-8');
        return;
});
app.get('/Home',(req, res) => {
        res.sendFile(__dirname +'/views/Crit_Hit_Gear_Main.html','utf-8');
        return;
});
app.get('/Sign_Up',(req,res) => {
        res.sendFile(__dirname + '/views/Crit_Hit_Gear_Sign_Up_Page.html','utf-8');
        return;
});
app.get('/Sign_Up_Successful',(req,res) => {
        res.sendFile(__dirname + '/views/Crit_Hit_Gear_Successful_Sign_Up_Page.html','utf-8');
        return;
});
app.get('/Armor',(req,res) => {
        res.sendFile(__dirname + '/views/Crit_Hit_Gear_Armor_Page.html','utf-8');
        return;
});
app.get('/Weapons',(req,res) => {
        res.sendFile(__dirname + '/views/Crit_Hit_Gear_Weapons_Page.html','utf-8');
        return;
});
app.get('/Accessories',(req,res) => {
        res.sendFile(__dirname + '/views/Crit_Hit_Gear_Accessories_Page.html','utf-8');
        return;
});
app.get('/Consumables',(req,res) => {
        res.sendFile(__dirname + '/views/Crit_Hit_Gear_Consumables_Page.html','utf-8');
        return;
});
app.get('/Trinkets',(req,res) => {
        res.sendFile(__dirname + '/views/Crit_Hit_Gear_Trinkets_Page.html','utf-8');
        return;
});
app.get('/Mounts',(req,res) => {
        res.sendFile(__dirname + '/views/Crit_Hit_Gear_Mounts_Page.html','utf-8');
        return;
});
app.get('/Pets',(req,res) => {
        res.sendFile(__dirname + '/views/Crit_Hit_Gear_Pets_Page.html','utf-8');
        return;
});
app.get('/About',(req,res) => {
        res.sendFile(__dirname + '/views/Crit_Hit_Gear_About_Page.html','utf-8');
        return;
});
app.get('/Cart',(req,res) => {
        res.sendFile(__dirname + '/views/Crit_Hit_Gear_Cart_Page.html','utf-8');
        return;
});






app.post('/Sign-Up', async(req,res) => {
        try{
                const {f_name, l_name, adventurer_id, sex, age, username,password } =  req.body; 
                assert((f_name != null && f_name.length <= 20) && (l_name != null && l_name.length <= 20) && sex != null && (adventurer_id != null && adventurer_id <= 999999 ) && (age != null && age <= 150) && (username != null && username.length <= 16) && (password != null && password.length <= 12));  
                await db.one(`
                        INSERT
                        INTO registered_accounts
                        (f_name, l_name, adventurer_id, sex, age, username, password) VALUES
                        ($1,$2,$3,$4,$5,$6,$7)
                        RETURNING *`,
                        [f_name,l_name,adventurer_id,sex,age,username,password]
                )
                .then( data => {
                        console.log('query is successful'); 
                        return res.status(200).json(data);
                })
                .catch(err => {
                        console.error(err);
                        throw err;
                });
        
        }
        catch(err){
                console.error(err);
        res.status(400).json(err.message);
        }
        
});

app.listen(process.env.PORT || 3000,() => console.log('Running on: http://localhost:3000/Home'));