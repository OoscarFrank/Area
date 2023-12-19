const dotenv = require("dotenv");
const path = require("path");
var dynamo = require("./DB");
const cors = require("cors");
const express = require("express");

dotenv.config({ path: path.join(__dirname, ".env") });
const app = express();



dynamo.connect(() => {
    app.use(
        cors({
            origin: "*",
        })
    );
    app.use(express.json());


    app.get("/about", require("./src/about"));

    app.use("/auth", require("./src/Auth"));
    app.use("/api/", require("./src/NoAuth"));
    app.use("/api/", require("./src/Middlewares/CheckToken"));
    app.use("/api/", require("./src/Middlewares/CheckConfirm"));

    app.use("/api/", require("./src/Services"));
    app.use("/api/", require("./src/Area"));

    app.listen(parseInt(process.env.API_PORT), () => {
        console.log("server running");
    });
});



// // Configuration de la connexion à DynamoDB local
// AWS.config.update({
//   region: 'local',
//   endpoint: 'http://localhost:8000'
// });

// const dynamodb = new AWS.DynamoDB();

// const params = {
//   TableName: 'Utilisateurs',
//   KeySchema: [
//     { AttributeName: 'email', KeyType: 'HASH' } // Clé primaire
//   ],
//   AttributeDefinitions: [
//     { AttributeName: 'email', AttributeType: 'S' }, // Type String
//     { AttributeName: 'nom', AttributeType: 'S' }  // Pour le GSI
//   ],
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 1,
//     WriteCapacityUnits: 1
//   },
//   GlobalSecondaryIndexes: [{
//     IndexName: 'NomIndex', // Nom du GSI
//     KeySchema: [
//       { AttributeName: 'nom', KeyType: 'HASH' }
//     ],
//     Projection: {
//       ProjectionType: 'ALL' // Peut être ALL, KEYS_ONLY, ou INCLUDE
//     },
//     ProvisionedThroughput: {
//       ReadCapacityUnits: 1,
//       WriteCapacityUnits: 1
//     }
//   }]
// };

// dynamodb.createTable(params, (err, data) => {
//   if (err) {
//     console.error("Erreur lors de la création de la table. Erreur JSON:", JSON.stringify(err, null, 2));
//   } else {
//     console.log("Table créée. Description de la table JSON:", JSON.stringify(data, null, 2));
//   }
// });

// const docClient = new AWS.DynamoDB.DocumentClient();

// const table = 'Utilisateurs';

// const utilisateur = {
//   email: 'exemple@email.com',
//   mot_de_passe: 'monMotDePasse',
//   nom: 'Dupont',
//   prénom: 'Jean'
// };

// const params_ = {
//   TableName: table,
//   Item: utilisateur
// };

// docClient.put(params_, (err, data) => {
//   if (err) {
//     console.error("Erreur lors de l'ajout de l'utilisateur. Erreur JSON:", JSON.stringify(err, null, 2));
//   } else {
//     console.log("Utilisateur ajouté. Données JSON:", JSON.stringify(data, null, 2));
//   }
// });

// const AWS = require('aws-sdk');

// // Configuration de la connexion à DynamoDB local
// AWS.config.update({
//   region: 'local',
//   endpoint: 'http://localhost:8000'
// });

// const docClient = new AWS.DynamoDB.DocumentClient();

// function recupererUtilisateurParEmail(email, callback) {
//   const params = {
//     TableName: 'Utilisateurs',
//     Key: {
//       'email': email
//     }
//   };

//   docClient.get(params, function(err, data) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, data.Item);
//     }
//   });
// }

// // Utilisation de la fonction
// recupererUtilisateurParEmail('exemple@email.com', (err, utilisateur) => {
//   if (err) {
//     console.error("Erreur lors de la récupération de l'utilisateur:", err);
//   } else {
//     console.log("Utilisateur récupéré:", utilisateur);
//   }
// });

// const AWS = require('aws-sdk');

// // Configuration de la connexion à DynamoDB local
// AWS.config.update({
//   region: 'local',
//   endpoint: 'http://localhost:8000'
// });

// const docClient = new AWS.DynamoDB.DocumentClient();

// function recupererUtilisateurParNom(nom, callback) {
//   const params = {
//     TableName: 'Utilisateurs',
//     IndexName: 'NomIndex', // Remplacer par le nom de votre GSI
//     KeyConditionExpression: 'nom = :n',
//     ExpressionAttributeValues: {
//       ':n': nom
//     }
//   };

//   docClient.query(params, function(err, data) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, data.Items); // Notez que cela retourne un tableau d'éléments
//     }
//   });
// }

// // // Utilisation de la fonction
// recupererUtilisateurParNom('Dupont', (err, utilisateurs) => {
//   if (err) {
//     console.error("Erreur lors de la récupération de l'utilisateur:", err);
//   } else {
//     console.log("Utilisateur(s) récupéré(s):", utilisateurs);
//   }
// });
