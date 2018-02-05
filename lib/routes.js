FlowRouter.route('/', {
  name: 'home',
  action() {
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