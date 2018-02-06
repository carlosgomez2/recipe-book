FlowRouter.triggers.enter([function(context, redirect) {
  if(!Meteor.userId()) {
    FlowRouter.go('home')
  }
}])

FlowRouter.route('/', {
  name: 'home',
  action() {
    // redirect user if is logged in
    if (Meteor.userId()) {
      FlowRouter.go('recipe-book')
    }

    // Google Analytics
    GAnalytics.pageview()
    
    BlazeLayout.render('HomeLayout')
  }
})

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    // Google Analytics
    GAnalytics.pageview()
    
    BlazeLayout.render('MainLayout', {main: 'Recipes'})
  }
})

FlowRouter.route('/recipe/:id', {
  name: 'recipe',
  action() {
    // Google Analytics
    GAnalytics.pageview()
    
    BlazeLayout.render('MainLayout', {main: 'RecipeSingle'})
  }
})