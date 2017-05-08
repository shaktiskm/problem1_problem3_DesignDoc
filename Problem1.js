/*
> mongo
> use online_store_lbb
> db.posts.find()
{ "_id" : ObjectId("590f479d0f0370912eb0f8a9"), "name" : "p1", "category" : ObjectId("65dd504cebe9b2a2626af1f3") }
{ "_id" : ObjectId("590f479d0f0370912eb0f8aa"), "name" : "p2", "category" : ObjectId("55dd504cebe9b2a2626af1f3") }
{ "_id" : ObjectId("590f479d0f0370912eb0f8ab"), "name" : "p3", "category" : ObjectId("55dd504cebe9b2a2626af1f3") }

> db.bookmarks.find()
{ "_id" : ObjectId("590f48c50f0370912eb0f8ac"), "post" : ObjectId("590f479d0f0370912eb0f8a9") }
{ "_id" : ObjectId("590f48c50f0370912eb0f8ad"), "post" : ObjectId("590f479d0f0370912eb0f8aa") }
{ "_id" : ObjectId("590f48c50f0370912eb0f8ae"), "post" : ObjectId("590f479d0f0370912eb0f8a9") }
{ "_id" : ObjectId("590f48c50f0370912eb0f8af"), "post" : ObjectId("590f479d0f0370912eb0f8ab") }
{ "_id" : ObjectId("590f48c50f0370912eb0f8b0"), "post" : ObjectId("590f479d0f0370912eb0f8aa") }

Way to Run Script:

On Mongo Shell:

> load("Problem1.js")
[
	{
		"_id" : ObjectId("590f48c50f0370912eb0f8ad"),
		"post" : ObjectId("590f479d0f0370912eb0f8aa")
	},
	{
		"_id" : ObjectId("590f48c50f0370912eb0f8af"),
		"post" : ObjectId("590f479d0f0370912eb0f8ab")
	},
	{
		"_id" : ObjectId("590f48c50f0370912eb0f8b0"),
		"post" : ObjectId("590f479d0f0370912eb0f8aa")
	}
]
true

*/

var conn = new Mongo();
var db = conn.getDB("online_store_lbb");
var postIdArr = db.posts.find({"category": ObjectId("55dd504cebe9b2a2626af1f3")}, {_id:1}).toArray();
var postIds = postIdArr.map(postObj => postObj._id);
var bookmarks =	db.bookmarks.find({ "post": {"$in": postIds} }).toArray();
printjson(bookmarks);
