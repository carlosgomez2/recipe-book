Meteor.subscribe('recipes');

// Load from /settings.json the GA account
console.log(Meteor.settings.public.ga.account)