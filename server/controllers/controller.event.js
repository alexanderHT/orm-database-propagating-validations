const modelEvent = require('../models/model.event');

var controllerEvent = {
    /* show all event in database */
    getAllEvent: function(req, res){
      modelEvent.find({}, function(err, data){
        if (err) throw err
        res.json(data)
      })
    },
    /* create event into database */
    addEvent: function(req, res){
      // using model event
      var newEvent = modelEvent({
        event_name: req.body.event_name,
        event_title: req.body.event_title,
        email: req.body.email,
        event_create_at: req.body.event_create_at
      })

      // save event
      newEvent.save(function(err, data){
        if (err) res.json(err)
        res.json(data)
        // if       (err.errors.event_create_at.message) { res.json(err.errors.event_create_at.message);  }
        // else if  (err.errors.email.message)           { res.json(err.errors.email.message);  }
        // else if  (err.errors.event_title.message)     { res.json(err.errors.event_title.message);  }
        // else if  (err.errors.event_name.message)      { res.json(err.errors.event_name.message); }
        // else if  (data)                               { res.json(data) }
      })

    }
}

module.exports = controllerEvent;
