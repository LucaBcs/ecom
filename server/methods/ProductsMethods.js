import { Meteor } from "meteor/meteor"
import { Products  } from "../../imports/collections/Products.js"

Meteor.methods({

	addProduct:function(product){
		
		Products.insert(product)

	},

	removeProduct:function(id){

		Products.remove(id)
	},

	updateProduct:function(id){

		Products.update(id)

	}

})