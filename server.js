var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");
var app = express();
var fs = require('fs');
var multer = require('multer');
var upload = multer({dest: 'public/uploaded'});


mongoose.connect('mongodb://localhost:27017/term');

var Section = require("./server/models/Section");
var Service = require("./server/models/Service");



app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/api/admin/', function(req, res, next){
    Section.find()
    .exec(function(err, sections){
        if (err) {
            return res.send(err);
        }
        res.send(sections);
    })
})

app.get('/api/adminService/', function(req, res, next){
    Service.find()
    .exec(function(err, services){
        if (err) {
            return res.send(err);
        }
        res.send(services);
    })
})




app.post('/api/section/', upload.single('img'), function(req, res, next) {
    console.log('api/section');
    var section = new Section({
        title: req.body.title
    })

    var name = '/uploaded/'+ section._id + '.' + req.file.originalname.split('.').pop();

    var tempPath = req.file.path;
    var targetPath = './public/uploaded/' + section._id + '.' + req.file.originalname.split('.').pop();
    console.log('before rename');
    fs.rename(tempPath, targetPath, function(err) {
        if(err) return res.send(err);
        console.log('enter rename');
        // section.img.push('/uploaded/'+ section._id + '.' + req.file.originalname.split('.').pop());
        section.img = name;
        console.log('before section save');
        section.save(function(err, section){
            if(err) return res.send(err);
            console.log('enter section save');
            res.send(section);
        })
    })
    console.log('after rename');
})

app.post('/api/service/', upload.single('img'), function(req, res, next) {
    console.log('api/service++++++++++++++++++++');
    var serv = new Service({
        title: req.body.title,
        section: req.body.section,
        type: req.body.type
    })
    console.log('create serv');
    
    var name = '/uploaded/'+ serv._id + '.' + req.file.originalname.split('.').pop();

    var tempPath = req.file.path;
    var targetPath = './public/uploaded/' + serv._id + '.' + req.file.originalname.split('.').pop();

    console.log('before fs');
    fs.rename(tempPath, targetPath, function(err) {
        if(err) return res.send(err);
        console.log('enter fs');
        
        serv.img = name;
        console.log('before serv.save');
        serv.save(function(err, serv){
            if(err) return res.send(err);
            console.log('enter serv.save');
            Section.findById(req.body.section).exec(function(err, section) {
                if(err) res.send(err);
                section.services.push(service._id);
                console.log('before section save');
                
                section.save(function(err){
                    if(err) return res.send(err);
                    console.log('enter section.save');
                    res.send(serv);
                })
            })
        })
    })
    console.log('after fs');
    
})


app.get('*', function (req, res, next) {
    res.redirect('/#' + req.originalUrl);
  });

var server = app.listen(3000, function(){
    console.log('Server running on port ' + 3000);
});
