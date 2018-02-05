// Load RecipeSingle Subscribe
Template.RecipeSingle.onCreated(function () {
  let self = this
  self.autorun(function () {
    self.subscribe('recipes')
  })
})

Template.RecipeSingle.helpers({
  recipe: () => {
    let id = FlowRouter.getParam('id')
    return Recipes.findOne({_id: id})
  }
})