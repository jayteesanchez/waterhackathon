var mongoose    = require('mongoose'),
    async       = require('async'),
    Competition = require('./models/Competition'),
    User        = require('./models/User');

mongoose.connect('mongodb://localhost/waterhackathon');

var woodlandHills;
var pasadena;
var culverCity;

var removeUsers = function(done){
  User.remove({}, function(err){
    if (err){
      console.log('error w/ users removal' + err);
    };
    console.log("Users removed", "\n");
    done();
  });
};

var removeCompetition = function(done){
  Competition.remove({}, function(err){
    if(err){
      console.log('error w/ competitions removal' + err);
    };
    console.log("Competition removed", "\n");
    done();
  });
};

var createCompetition = function(done){
  Promise.all([
    Competition.create({
      name: "Pasadena",
      startDate: Date.now,
      endDate: "09.11.2015",
      prize: "Disneyland family pack",
      primaryContact: {
        name: "Bob",
        email: "bob@bob.com"
      }
    }),
    Competition.create({
      name: "Culver City",
      startDate: Date.now,
      endDate: "10.30.2015",
      prize: "$500 cash prize",
      primaryContact: {
        name: "Sue",
        email: "sue@sue.com"
      }
    }),
    Competition.create({
      name: "Woodland Hills",
      startDate: Date.now,
      endDate: "10.30.2015",
      prize: "$250 gift card to arclight",
      primaryContact: {
        name: "Tamara",
        email: "Tamara@tamara.com"
      }
    })
  ]).then(function(){
    console.log('created competitions');
    done();
  })
};


var createUsers = function(done){
  Promise.all([
    User.create({
      familyName: "Jone",
      address: "741 Elmira St, Pasadena, CA 91104",
      phoneNumer: "555-555-5555",
      email: "jone@jone.com",
      numFamilyMembers: 4,
      monthlyGallons: [],
      dailyGallons: [],
      competition: pasadena._id
    }),
    User.create({
      familyName: "Smith",
      address: "809 N Catalina Ave, Pasadena, CA 91104",
      phoneNumer: "555-555-5555",
      email: "smith@smith.com",
      numFamilyMembers: 5,
      monthlyGallons: [],
      dailyGallons: [],
      competition: pasadena._id
    }),
    User.create({
      familyName: "Johnson",
      address: "804 Merrett Dr, Pasadena, CA 91104",
      phoneNumer: "555-555-5555",
      email: "johnson@johnson.com",
      numFamilyMembers: 4,
      monthlyGallons: [],
      dailyGallons: [],
      competition: pasadena._id
    }),
    User.create({
      familyName: "Burke",
      address: "779 Elmira St, Pasadena, CA 91104",
      phoneNumer: "555-555-5555",
      email: "burke@burke.com",
      numFamilyMembers: 3,
      monthlyGallons: [],
      dailyGallons: [],
      competition: pasadena._id
    }),
    User.create({
      familyName: "Chang",
      address: "850 N Madison Ave, Pasadena, CA 91104",
      phoneNumer: "555-555-5555",
      email: "chang@chang.com",
      numFamilyMembers: 8,
      monthlyGallons: [],
      dailyGallons: [],
      competition: pasadena._id
    }),
    User.create({
      familyName: "Turner",
      address: "22421 Bessemer St, Woodland Hills, CA 91367",
      phoneNumer: "555-555-5555",
      email: "turner@turner.com",
      numFamilyMembers: 3,
      monthlyGallons: [],
      dailyGallons: [],
      competition: woodlandHills._id
    }),
    User.create({
      familyName: "Preston",
      address: "22520 Calvert St, Woodland Hills, CA 91367",
      phoneNumer: "555-555-5555",
      email: "preston@preston.com",
      numFamilyMembers: 4,
      monthlyGallons: [],
      dailyGallons: [],
      competition: woodlandHills._id
    }),
    User.create({
      familyName: "Weiss",
      address: "22219 Summit Vue Dr, Woodland Hills, CA 91367",
      phoneNumer: "555-555-5555",
      email: "weiss@weiss.com",
      numFamilyMembers: 6,
      monthlyGallons: [],
      dailyGallons: [],
      competition: woodlandHills._id
    }),
    User.create({
      familyName: "Hernandez",
      address: "22545 Tiara St, Woodland Hills, CA 91367",
      phoneNumer: "555-555-5555",
      email: "hernandez@hernandez.com",
      numFamilyMembers: 3,
      monthlyGallons: [],
      dailyGallons: [],
      competition: woodlandHills._id
    }),
    User.create({
      familyName: "Purtlebaugh",
      address: "22641 Califa St, Woodland Hills, CA 91367",
      phoneNumer: "555-555-5555",
      email: "purtlebaugh@purtlebaugh.com",
      numFamilyMembers: 8,
      monthlyGallons: [],
      dailyGallons: [],
      competition: woodlandHills._id
    }),
    User.create({
      familyName: "Ross",
      address: "4131 Van Buren Pl, Culver City, CA 90232",
      phoneNumer: "555-555-5555",
      email: "ross@ross.com",
      numFamilyMembers: 4,
      monthlyGallons: [],
      dailyGallons: [],
      competition: culverCity._id
    }),
    User.create({
      familyName: "Kuwahara",
      address: "4161 Irving Pl, Culver City, CA 90232",
      phoneNumer: "555-555-5555",
      email: "kuwahara@kuwahara.com",
      numFamilyMembers: 5,
      monthlyGallons: [],
      dailyGallons: [],
      competition: culverCity._id
    }),
    User.create({
      familyName: "Sanchez",
      address: "4053 Duquesne Ave, Culver City, CA 90232",
      phoneNumer: "555-555-5555",
      email: "sanchez@sanchez.com",
      numFamilyMembers: 3,
      monthlyGallons: [],
      dailyGallons: [],
      competition: culverCity._id
    }),
    User.create({
      familyName: "Dayrit",
      address: "4055 Lincoln Ave, Culver City, CA 90232",
      phoneNumer: "555-555-5555",
      email: "dayrit@dayrit.com",
      numFamilyMembers: 4,
      monthlyGallons: [],
      dailyGallons: [],
      competition: culverCity._id
    })
  ]).then(function() {
    console.log('Users created');
    done();
  })
};

var closeMongoose = function(done) {
  mongoose.disconnect();
  console.log('Mongoose disconnected.');
  done();
};

async.series([
  removeUsers,
  removeCompetition,
  createCompetition,
  createUsers,
  closeMongoose
]);
