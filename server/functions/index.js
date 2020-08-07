const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const characters = ["Merlin", "Morgana", "Assaisan", "Percieval", "LoyalServant"];

var database = admin.database();


//todo, creator should send information: name. 
/* 
params: name
**/

exports.createGame = functions.https.onCall((data) => {
  // todo Add if statement to check if ID already exists in database. 
  let id = Math.floor(Math.random() * 9999);
  return database.ref('games/'+id).set({players: 1})
  .then(() => {
    database.ref('games/'+id+'/' + data.name).set({
      onQuest: false,
        role: "none",
        president: false,
        groupVote: "none", //accept decline
        missionVote: "none", // fail success
      })
    }).then(() => {
      console.log("game created");
      return id;
    })
})


//TODO if gameID does not exist, atm creating a new node in tree. 
//players to join a game, sends id and playername
exports.joinGame = functions.https.onCall((data) => {
  console.log(data)
  const playerName = data.name;
  const gameID = data.gameID;
  return database.ref('games/' + gameID + "/" + playerName).set({
    onQuest: false,
    role: "none",
    president: false,
    groupVote: "none", //accept decline
    missionVote: "none", // fail success
  })
})


//TODO onupdate when players join the game room all others should be updated

//




  