//Meteor.subscribe("all-posts");

//Meteor.subscribe("limited-posts");

Session.setDefault("lazyLoadLimit", 2);
Tracker.autorun(function() {
	Meteor.subscribe("lazy-loading-posts", Session.get("lazyLoadLimit"));
});
