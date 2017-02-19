var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/validation-mongoose');

// create email Validator, is email not valid it will say 'your email seem not valid'
var emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'your email seem not valid'
  })
];

// create date Validator, is date not valid it will say your date input seem not valid'
var dateValidator = [
  validate({
    validator: 'isDate',
    message: 'your date input seem not valid'
  })
];

// create event schema
var eventSchema = new Schema({
  event_name: { type: String, required: [true, 'please insert event name'] },
  event_title: { type: String, required: [true, 'please insert event title'], unique: [true, 'sorry your event title is already taken'] },
  email: { type: String, required: [true, 'you must insert your email'], validate: emailValidator},
  event_create_at: { type: Date, required: [true, 'please insert event date'], validate: dateValidator }
});

// create model call Event
var Event = mongoose.model('Event', eventSchema);

module.exports = Event;
