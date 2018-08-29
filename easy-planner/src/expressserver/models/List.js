//Require mysql package
const mysql = require('mysql');

//Define calendar Schema with title, description and category
const calendarSchema = mysql.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        required: true,
        enum: ['High', 'Medium', 'Low']
    }
});

//Create a model using mysql.model and export it
const calendar = module.exports = mysql.model('calendar', calendarSchema );


//calendar.find() returns all the lists
module.exports.getAllLists = (callback) => {
	calendar.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
	newList.save(callback);
}


//We pass on an id and remove it from DB using calendar.remove()
module.exports.deleteListById = (id, callback) => {
	let query = {_id: id};
	calendar.remove(query, callback);
}
