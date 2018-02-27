import React from "react"

export default class Availability_DeliveryTiming extends React.Component{

	render(){
		
		var avaliability = this.props.product.available
		var deliveryTiming = this.props.predefined.delivery.specs.timeExpected

		return(

			<div className="standarCenterRow-container">

				<div className="two-line-text-left">
					<p> {avaliability} </p>
				</div>
				
				<div className="two-line-text-right">
					<div>{deliveryTiming}</div>
				</div>

			</div>

		)
	}
}