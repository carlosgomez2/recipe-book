// Scope reactive variable to update the session variable, enable edit mode
Template.Recipe.onCreated(function() {
  this.editMode = new ReactiveVar(false)
})

Template.Recipe.helpers({
  updateRecipeId: function() {
    return this._id
  },
  editMode: function() {
    // Return specifically selected edit mode card not editin for all cards 
    return Template.instance().editMode.get()
  }
})

Template.Recipe.events({
  'click .toggle-menu': function() {
    Meteor.call('toggleMenuItem', this._id, this.inMenu)
  },
  'click .fa-trash': function() {
    Meteor.call('deleteRecipe', this._id)
  },
  'click .fa-pencil': function(event, template) {
    // Enable edit mode for card
    template.editMode.set(!template.editMode.get())
  }
})