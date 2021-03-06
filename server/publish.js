Meteor.publish('recipes', function() {
  return Recipes.find({author: this.userId})
})

Meteor.publish('singleRecipe', function(id) {
  // Check if id is type String
  check(id, String)

  return Recipes.find({_id: id})
})