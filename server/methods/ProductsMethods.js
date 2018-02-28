import { Meteor } from "meteor/meteor"
import { Products  } from "../../imports/collections/Products.js"

Meteor.methods({

	addProduct:function(productObj){
		
		Products.insert({productObj})

	}

})