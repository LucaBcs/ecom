import React from "react"

export default class Seller extends React.Component{

	render(){

		{/* IMPORT PROPS */}

		var sellerName = this.props.product.seller.entity.name
		var sellerCountry = this.props.product.seller.entity.country

		return(

			<div className="standarCenterRow-container">

				<div className="two-line-text-left">SELLER</div>

				<div className="two-line-text-right">
					<div className="vertical-space"></div>
					<div className="text fsz-14">{sellerName}</div>
					<div className="text fsz-12">{sellerCountry}</div>
					<div className="vertical-space"></div>
				</div>

			</div>
		)
	}
}