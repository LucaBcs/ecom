import React from "react"

export default class Buyer extends React.Component{

	render(){

		{/* IMPORT PROPS */}

		var entity = this.props.predefined.buyer.entity.type
		var entityCountry = this.props.predefined.buyer.entity.country

		return(

			<div className="sideCart-standard-row-container">
				<div className="sideCart-left-text-container">

					<div className="sideCart-left-text">
					BUYER
					</div>
				
					
					<div className="sideCart-right-text-double">
						<div></div>
							<div className="text fsz-14">{entity}</div>
							<div className="text fsz-12">{entityCountry}</div>
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