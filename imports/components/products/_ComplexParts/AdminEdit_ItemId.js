import React from "react"

export default class AdminEdit_ItemId extends React.Component{

	render(){

		{/* IMPORT PROPS */}

		var itemId = this.props.product._id

		return(

			<div className="favourites-and-cart-container addBorderTop">

				<center className="line-height">
					<div className="fas fa-edit icons"></div>
				</center>

				<div className="two-line-text-right">
					<div className="vertical-space"></div>
					<div className="text fsz-14">{itemId}</div>
					<div className="text fsz-12">ITEM ID</div>
					<div className="vertical-space"></div>
				</div>

			</div>
		)
	}
}