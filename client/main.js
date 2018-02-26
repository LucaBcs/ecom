import { Meteor } from "meteor/meteor"
import React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"

import Routes from "../imports/Routes.js"


Meteor.startup(() => {

  render (
  	<BrowserRouter>
  		<Routes/>
  	</BrowserRouter>, 
  	document.getElementById("root"))
})
