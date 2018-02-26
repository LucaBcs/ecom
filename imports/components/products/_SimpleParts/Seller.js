import React from "react"

export default class Seller extends React.Component{

	render(){

		var sellerName = <div className="text fsz-14">{this.props.seller.companyName}</div>
		var sellerAddress = <div className="text fsz-12">{this.props.seller.city},&nbsp;{this.props.seller.country}</div>


		return(

			<div className="standarCenterRow-container">
				<div className="two-line-text-left">SELLER</div>
			<div className="two-line-text-right">
				<div className="vertical-space"></div>
				{sellerName}
				{sellerAddress}
				<div className="vertical-space"></div>
			</div>

			</div>


			)

	}

}