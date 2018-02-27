import React from "react"

export default class DeliveryAddress extends React.Component{

	render(){ 

		{/* IMPORT PROPS */}

		var locationCity = this.props.predefined.delivery.location.address.city
		var locationCountry = this.props.predefined.delivery.location.address.country

		return(

			<div className="sideCart-standard-row-container">
				<div className="sideCart-left-text-container">

					<div className="sideCart-left-text">
					DELIVERY ADDRESS
					</div>
				
					
					<div className="sideCart-right-text-double">
						<div></div>
							<div className="text fsz-14">{locationCity}</div>
							<div className="text fsz-12">{locationCountry}</div>
						<div></div>
					</div>

				</div>

				<center className="line-height">
					<div className="far fa-edit icons"></div>
				</center>
				
			</div>
		)
	}

}