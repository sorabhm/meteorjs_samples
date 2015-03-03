/*Meteor.publish("all-posts", function(){
	return Posts.find();
});

Meteor.publish("limited-posts", function(){
	return Posts.find({}, {
		limit: 2
	});
});
*/
Meteor.publish("lazy-loading-posts", function(limit){
	return Posts.find({}, {
		limit: limit,
		fields: { text: 0 }
	});
});

Meteor.publish("single-post", function(slug) {
	return Posts.find({slug: slug});
});