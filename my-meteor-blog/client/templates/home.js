Template.home.created= function() {
	console.log("Home template created");
}
Template.home.rendered = function() {
	console.log("Home template rendered");
}
Template.home.destroyed = function() {
	console.log("Home template destroyed");
}

Template.home.helpers({
	exampleHelpers: function() {
		return 'This text came from a helper with some <strong>HTML</strong>.';
	}
})
Template.home.helpers({
	helperHand: function() {
		return "Another text where <strong>HTML comes</strong>";
	},

	postsList: function() {
		//return Posts.find({}, {sort: { timecreated: -1 }})
		return Posts.find().fetch()
	}
})

Template.home.events({
	"mouseover button.lazyload": function(e, template) {
		var currentVal = Session.get("lazyLoadLimit");
		Session.set("lazyLoadLimit", currentVal + 2);
	}
})
