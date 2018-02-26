import React from "react"

export default class Quantity extends React.Component{

render(){
		
		var pieces = this.props.quantity.nrOfPieces
		var quantityPerPiece = this.props.quantity.quantityPerPiece
		var currency = this.props.quantity.currency
		var quantityUnitOfMeasure = this.props.quantity.quantityUnitOfMeasure

		var quantityField = <div className="two-line-text-right">
							<p className="float-right">{quantityUnitOfMeasure}</p>
							<p className="float-right bigPrice">{quantityPerPiece}</p>
							<p className="float-right">&nbsp;x&nbsp;</p>
							<p className="float-right">{pieces}</p>
							</div>

		return(

			<div className="standarCenterRow-container">
				<div className="two-line-text-left">QUANTITY</div>
				{quantityField}
			</div>

			)

	}

}
