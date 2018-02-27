import React from "react"

export default class Quantity extends React.Component{

render(){

		{/* IMPORT PROPS */}

		var pieces = this.props.product.quantity.pieces
		var quantityPerPiece = this.props.product.quantity.quantityPerPiece
		var currency = this.props.product.price.currency.symbol
		var quantityUoM = this.props.product.uom.quantity.unit

		return(

			<div className="standarCenterRow-container">
				<div className="two-line-text-left">QUANTITY</div>
				<div className="two-line-text-right">
					<p className="float-right">{quantityUoM}</p>
					<p className="float-right bigPrice">{quantityPerPiece}</p>
					<p className="float-right">&nbsp;x&nbsp;</p>
					<p className="float-right">{pieces}</p>
				</div>
			</div>

			)

	}

}
