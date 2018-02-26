import React from "react"

export default class ExpectedCostsPickUp_Delivery extends React.Component{

	render(){


		return(

			<div className="standarCenterRow-container">
				<div className="two-line-text-left">DELIVERY</div>
			<div className="two-line-text-right">
				<div className="vertical-space"></div>
				<div className="text fsz-14">{this.props.pickUp}</div>
				<div className="text fsz-14">{this.props.delivery}</div>
				<div className="vertical-space"></div>
			</div>

			</div>

			)

	}

}