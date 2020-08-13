const functions = require('firebase-functions');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
const { auth } = require('firebase-admin');
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
    }).then(() => { //kan radera nedanstående
      console.log("game created");
      return id;
    }).catch(error => {console.log("errir i createGame")})
})


//TODO if gameID does not exist, atm creating a new node in tree. 
//players to join a game, sends id and playername
exports.joinGame = functions.https.onCall( async (data) => {
  console.log(data)
  const playerName = data.name;
  const gameID = data.gameID;
  await database.ref('games/' + gameID + "/" + playerName).set({
    onQuest: false,
    role: "none",
    president: false,
    groupVote: "none", //accept decline
    missionVote: "none", // fail success
  })
  const playerCount = database.ref('games/' + gameID).child('players');
  return playerCount.transaction(count => {
    return count + 1
  }).then(() => {
    return true
  })

})

//triggers when player joins a room, should sent updates to all other players with same gameID. 
exports.onPlayerCreate = functions.database.ref('games/{gameID}/{player}').onCreate((snapshot, context) => 
{   console.log("auth information; " , context.auth, "and authtype; " , context.authType)
    const gameID = context.params.gameID;
    if (!context.auth) {
      // Throwing an HttpsError so that the client gets the error details.
      throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
        'while authenticated.');
    }
    const player = context.params.player;
    console.log(`New player ${player} joined game ${gameID}`, snapshot.ref.key)
    let key = snapshot.ref.key;
    return {name: key};
  })






  