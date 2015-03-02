
if(Meteor.isClient) {
	Session.setDefault('lazyLoadLimit', 2);
}

Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'pageNotFound', 
});

Router.map(function() {
	this.route('HomePage', { //This name can be set to template's name and below given template paramter can be removed
		path: '/', 
		template: 'home',
		subscriptions: function() {
			return Meteor.subscribe('lazy-loading-posts', Session.get('lazyLoadLimit'));
		}
	});
	this.route('home', { //This name can be set to template's name and below given template paramter can be removed
		path: '/home', 

		subscriptions: function() {
			return Meteor.subscribe('lazy-loading-posts', Session.get('lazyLoadLimit'));
		}
	});
	this.route('about', { //This name can be set to template's name and below given template paramter can be removed
		path: '/about'
	});
});