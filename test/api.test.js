require('dotenv').config();
const fetch = require('node-fetch');
var API_KEY = process.env.API_KEY;

fetch("https://api.globalwinescore.com/globalwinescores/latest?wine=petrus", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "globalwinescore-global-wine-score-v1.p.rapidapi.com",
		"x-rapidapi-key": API_KEY,
		"accept": "application/json"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});