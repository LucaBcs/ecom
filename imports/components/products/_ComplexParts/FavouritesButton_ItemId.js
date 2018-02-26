import React from "react"

export default class FavouritesButton_ItemId extends React.Component{

	render(){


		return(

			<div className="favourites-and-cart-container addBorderTop">
				<center className="line-height">
					<div className="fas fa-bookmark icons"></div>
				</center>
				<div className="two-line-text-right">
					<div className="vertical-space"></div>
					<div className="text fsz-14">{this.props.itemId}</div>
					<div className="text fsz-12">ITEM ID</div>
					<div className="vertical-space"></div>
				</div>
			</div>

			)

	}

}