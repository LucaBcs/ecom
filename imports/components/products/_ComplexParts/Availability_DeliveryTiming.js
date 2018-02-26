import React from "react"

export default class Availability_DeliveryTiming extends React.Component{

	render(){


		return(

				<div className="standarCenterRow-container">
				<div className="two-line-text-left">
					<p> {this.props.availability} </p>
				</div>
				<div className="two-line-text-right">
					<div>{this.props.deliveryTiming}</div>
				</div>

			</div>

			)

	}

}