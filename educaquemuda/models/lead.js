const firebase = require('../firebase');

const create = ({ name }) => {
 const leads = firebase.database().ref('leads');
 const lead = leads.push({ name });
 return lead;
};

module.exports = {
    create,
};