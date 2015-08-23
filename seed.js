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
      startDate: '08/30/2015',
      endDate: '09/11/2015',
      prize: "Disneyland family pack",
      primaryContact: {
        name: "Bob",
        email: "bob@bob.com"
      },
      users:
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
    console.log('created competitions');
    done();
  })
};

// var users = [
//   {
//     familyName: "Jone",
//     address: "741 Elmira St, Pasadena, CA 91104",
//     phoneNumer: "555-555-5555",
//     email: "jone@jone.com",
//     numFamilyMembers: 4,
//     monthlyGallons: 5,
//     dailyGallons: 5,
//     competition: pasadena._id
//   },
//   {
//     familyName: "Smith",
//     address: "809 N Catalina Ave, Pasadena, CA 91104",
//     phoneNumer: "555-555-5555",
//     email: "smith@smith.com",
//     numFamilyMembers: 5,
//     monthlyGallons: 5,
//     dailyGallons: 5,
//     competition: pasadena._id
//   }
// ];

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
      competition: pasadena._id
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
      competition: pasadena._id
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
      competition: pasadena._id
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
      competition: pasadena._id
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
      competition: pasadena._id
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
      competition: woodlandHills._id
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
      competition: woodlandHills._id
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
      competition: woodlandHills._id
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
      competition: woodlandHills._id
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
      competition: woodlandHills._id
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
      competition: culverCity._id
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
      competition: culverCity._id
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
      competition: culverCity._id
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
      competition: culverCity._id
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
      competition: culverCity._id
    }
  ];

  User.create(users, function(err, users){
    if(err) console.log("error" + err);
    console.log(users);
  }).then(function(){
    done();
  })
}


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
