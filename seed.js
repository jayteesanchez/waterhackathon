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
    console.log("Competitions removed", "\n");
    done();
  });
};

var createCompetition = function(done){
  Promise.all([
    Competition.create({
      name: "Pasadena",
      startDate: '08/30/2015',
      endDate: '09/11/2015',
      prize: "Disneyland family pack",
      primaryContact: {
        name: "Bob",
        email: "bob@bob.com"
      }
    }, function(err, competition) {
      if (err) console.log(err);
      pasadena = competition;
    }),
    Competition.create({
      name: "Culver City",
      startDate: '08/30/2015',
      endDate: '09/11/2015',
      prize: "$500 cash prize",
      primaryContact: {
        name: "Sue",
        email: "sue@sue.com"
      }
    }, function(err, competition) {
      if (err) console.log(err);
      culverCity = competition;
    }),
    Competition.create({
      name: "Woodland Hills",
      startDate: '08/30/2015',
      endDate: '09/11/2015',
      prize: "$250 gift card to arclight",
      primaryContact: {
        name: "Tamara",
        email: "Tamara@tamara.com"
      }
    }, function(err, competition) {
      if (err) console.log(err);
      woodlandHills = competition;
    })
  ]).then(function(){
    console.log('Created competitions', "\n");
    done();
  })
};

var createUsers = function(done) {
  var users = [
    {
      familyName: "Jone",
      address: "741 Elmira St, Pasadena, CA 91104",
      phoneNumer: "555-555-5555",
      username: "jone",
      email: "jone@jone.com",
      numFamilyMembers: 4,
      monthlyGallons: 5,
      dailyGallons: 5,
      competition: "Pasadena"
    },
    {
      familyName: "Smith",
      address: "809 N Catalina Ave, Pasadena, CA 91104",
      phoneNumer: "555-555-5555",
      username: "smith",
      email: "smith@smith.com",
      numFamilyMembers: 5,
      monthlyGallons: 5,
      dailyGallons: 5,
      competition: "Pasadena"
    },
    {
      familyName: "Johnson",
      address: "804 Merrett Dr, Pasadena, CA 91104",
      phoneNumer: "555-555-5555",
      username: "johnson",
      email: "johnson@johnson.com",
      numFamilyMembers: 4,
      monthlyGallons: 5,
      dailyGallons: 5,
      competition: "Pasadena"
    },
    {
      familyName: "Burke",
      address: "779 Elmira St, Pasadena, CA 91104",
      phoneNumer: "555-555-5555",
      username: "burke",
      email: "burke@burke.com",
      numFamilyMembers: 3,
      monthlyGallons: 5,
      dailyGallons: 5,
      competition: "Pasadena"
    },
    {
      familyName: "Chang",
      address: "850 N Madison Ave, Pasadena, CA 91104",
      phoneNumer: "555-555-5555",
      username: "chang",
      email: "chang@chang.com",
      numFamilyMembers: 8,
      monthlyGallons: 5,
      dailyGallons: 5,
      competition: "Pasadena"
    },
    {
      familyName: "Turner",
      address: "22421 Bessemer St, Woodland Hills, CA 91367",
      phoneNumer: "555-555-5555",
      username: "Turner",
      email: "turner@turner.com",
      numFamilyMembers: 3,
      monthlyGallons: 5,
      dailyGallons: 5,
      competition: "Woodland Hills"
    },
    {
      familyName: "Preston",
      address: "22520 Calvert St, Woodland Hills, CA 91367",
      phoneNumer: "555-555-5555",
      username: "Preston",
      email: "preston@preston.com",
      numFamilyMembers: 4,
      monthlyGallons: 5,
      dailyGallons: 5,
      competition: "Woodland Hills"
    },
    {
      familyName: "Weiss",
      address: "22219 Summit Vue Dr, Woodland Hills, CA 91367",
      phoneNumer: "555-555-5555",
      username: "Weiss",
      email: "weiss@weiss.com",
      numFamilyMembers: 6,
      monthlyGallons: 5,
      dailyGallons: 5,
      competition: "Woodland Hills"
    },
    {
      familyName: "Hernandez",
      address: "22545 Tiara St, Woodland Hills, CA 91367",
      phoneNumer: "555-555-5555",
      username: "hernandez",
      email: "hernandez@hernandez.com",
      numFamilyMembers: 3,
      monthlyGallons: 5,
      dailyGallons: 5,
      competition: "Woodland Hills"
    },
    {
      familyName: "Purtlebaugh",
      address: "22641 Califa St, Woodland Hills, CA 91367",
      phoneNumer: "555-555-5555",
      username: "purtlebaugh",
      email: "purtlebaugh@purtlebaugh.com",
      numFamilyMembers: 8,
      monthlyGallons: 5,
      dailyGallons: 5,
      competition: "Woodland Hills"
    },
    {
      familyName: "Ross",
      address: "4131 Van Buren Pl, Culver City, CA 90232",
      phoneNumer: "555-555-5555",
      username: "ross",
      email: "ross@ross.com",
      numFamilyMembers: 4,
      monthlyGallons: 5,
      dailyGallons: 5,
      competition: "Culver City"
    },
    {
      familyName: "Kuwahara",
      address: "4161 Irving Pl, Culver City, CA 90232",
      phoneNumer: "555-555-5555",
      username: "kuwahara",
      email: "kuwahara@kuwahara.com",
      numFamilyMembers: 5,
      monthlyGallons: 5,
      dailyGallons: 5,
      competition: "Culver City"
    },
    {
      familyName: "Sanchez",
      address: "4053 Duquesne Ave, Culver City, CA 90232",
      phoneNumer: "555-555-5555",
      username: "sanchez",
      email: "sanchez@sanchez.com",
      numFamilyMembers: 3,
      monthlyGallons: 5,
      dailyGallons: 5,
      competition: "Culver City"
    },
    {
      familyName: "Dayrit",
      address: "4055 Lincoln Ave, Culver City, CA 90232",
      phoneNumer: "555-555-5555",
      username: "dayrit",
      email: "dayrit@dayrit.com",
      numFamilyMembers: 4,
      monthlyGallons: 4,
      dailyGallons: 5,
      competition: "Culver City"
    },
    {
      familyName: "Daily",
      address: "4107 Jackson Ave, Culver City, CA 90232",
      phoneNumer: "555-555-5555",
      username: "daily",
      email: "daily@daily.com",
      numFamilyMembers: 4,
      monthlyGallons: 4,
      dailyGallons: 5,
      competition: "Culver City"
    }
  ];

  User.create(users, function(err, users){
    if(err) console.log("error" + err);
  }).then(function(){
    done();
  })
};

var pushUsersIntoPasadena = function(done) {
  User.find({competition: "Pasadena"}, function(err, users) {
    Competition.find({name: "Pasadena"}).then(function(competition){
      console.log('competition: ' + pasadena);
    })
  }).then(function(users) {
    users.forEach(function(user) {
      pasadena.users.push(user);
    });
    done();
  })
};

var pushUsersIntoWoodlandHills = function(done) {
  User.find({competition: "Woodland Hills"}, function(err, users) {
    Competition.find({name: "Woodland Hills"}).then(function(competition){
      console.log('competition: ' + woodlandHills);
    })
  }).then(function(users) {
    users.forEach(function(user) {
      woodlandHills.users.push(user);
    });
    done();
  })
};

var pushUsersIntoCulverCity = function(done) {
  User.find({competition: "Culver City"}, function(err, users) {
    Competition.find({name: "Culver City"}).then(function(competition){
      console.log('competition: ' + culverCity);
    })
  }).then(function(users) {
    users.forEach(function(user) {
      culverCity.users.push(user);
    });
    done();
  })
};

var testCompetitionPopulation = function(done) {
  console.log(' Testing all competitions ');
  Competition.find({})
             .populate('users')
             .exec(function(err, competitions) {
                if (err) console.log(err);
                console.log("Testing to see if users belong to competitions");
                console.log("\n", competitions, "\n");
                done();
             });
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
  pushUsersIntoPasadena,
  pushUsersIntoWoodlandHills,
  pushUsersIntoCulverCity,
  testCompetitionPopulation,
  closeMongoose
]);
