import React from "react"

export default class ProfilePicture extends React.Component{

	render(){


		return(

			<center className="profilePicture-container">

			<div className="profilePicture-wrapImg">
			<img src={this.props.profilePicture} className="profilePicture-size220"/>
			</div>


			</center>

			)

	}

}