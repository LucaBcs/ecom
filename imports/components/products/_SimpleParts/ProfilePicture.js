import React from "react"

export default class ProfilePicture extends React.Component{

	render(){

		{/* IMPORT PROPS */}

		var profilePicture = this.props.product.profilePic

		return(

			<center className="profilePicture-container">
				<div className="profilePicture-wrapImg">
					<img src={profilePicture} className="profilePicture-size220"/>
				</div>
			</center>
		)
	}
}