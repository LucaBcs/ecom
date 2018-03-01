import React from "react"

export default class Quantity extends React.Component{

render(){

		{/* IMPORT PROPS */}

		var pieces = this.props.product.pieces
		var quantityPerPiece = this.props.product.quantityPerPiece
		var currency = this.props.product.currency
		var quantityUoM = this.props.product.quantityPerPieceUoM.UoM

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
