var express = require('express');
var router = express.Router();

/*
 * Identification par date
 */
router.get('/:date', function(req, res, next) {
    var db = req.db;
    var LaDate = req.params.date;
    var collection = db.get('userlist');
    collection.find({"date": LaDate},{},function(e,docs){
        res.json(docs);
    });
});

/*
 * Date actuelle
 */
router.get('/n/visite', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    var DateActuelle = new Date();
    var jour = DateActuelle.getDate();
    var mois = DateActuelle.getMonth()+1;
    var annee = DateActuelle.getFullYear();
    
    if(jour<10) {
        jour='0'+jour
    } 

    if(mois<10) {
        mois='0'+mois
    }
    
    DateActuelle = annee+'-'+mois+'-'+jour;
          
    collection.find({"date": DateActuelle},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;