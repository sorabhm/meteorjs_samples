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
		return [
	      {
	        title: 'My Second entry',
	        description: 'Borem sodum color sit amet, consetetur sadipscing elitr.',
	        author: 'Fabian Vogelsteller',
	        timeCreated: moment.unix(moment().subtract(3, 'days').unix()).fromNow()
	      },
	      {
	        title: 'My First entry',
	        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
	        author: 'Fabian Vogelsteller',
	        timeCreated: moment.unix(moment().subtract(7, 'days').unix()).fromNow()
	      }
	    ];
	}
})
