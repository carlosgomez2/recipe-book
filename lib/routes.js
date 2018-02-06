// Must be, if Meteor is client... but works!
Accounts.onLogin(function() {
  FlowRouter.go('recipe-book')
})

Accounts.onLogout(function() {
  FlowRouter.go('home')
})

// Redirect to home if not logged in
FlowRouter.triggers.enter([function(context, redirect) {
  if(!Meteor.userId()) {
    FlowRouter.go('home')
  }
}])

// Routes
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

FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Menu'})
  }
})

FlowRouter.route('/shopping-list', {
  name: 'shopping-list',
  action() {
    BlazeLayout.render('MainLayout', {main: 'ShoppingList'})
  }
})