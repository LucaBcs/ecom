import { Meteor } from "meteor/meteor"
//import Meteor library
import React from "react"
//import React library
import { render } from "react-dom"
//import the render function from react-dom
import {Routes} from "./imports/Routes.js"

//import the React component App (be sure you create first)

Meteor.startup(() => {
  render(Routes(), document.getElementById("root"))
})
