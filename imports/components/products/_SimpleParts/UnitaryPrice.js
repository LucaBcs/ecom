import React from "react"

export default class UnitaryPrice extends React.Component{

	render(){

		{/* IMPORT PROPS */}

		var currency = this.props.product.price.currency.symbol
		var unitaryPriceUoM = this.props.product.uom.unitaryPrice.unit

		var pieces = this.props.product.quantity.pieces
		var quantityPerPiece = this.props.product.quantity.quantityPerPiece

		var priceNoVAT = Number(this.props.product.price.priceNoVAT)
		var productVAT = Number(this.props.product.price.productVAT) 

		{/* EDITING AND CALCULATIONS */}

		var unitaryPriceNoVAT = Number(priceNoVAT/quantityPerPiece*pieces*1000)
		var unitaryPriceVAT = Number(unitaryPriceNoVAT*productVAT/1000)

		var unitaryPriceNoVATplusVAT = Number(unitaryPriceNoVAT+unitaryPriceVAT)

		var displayUnitaryPriceNoVATplusVAT = Number(unitaryPriceNoVATplusVAT).toFixed(2).split(".")
		var displayUnitaryPriceNoVAT = Number(unitaryPriceNoVAT).toFixed(2).split(".").join(",")

		return(

			<div className="standarCenterRow-container">

				<div className="two-line-text-left">UNITARY PRICE</div>

				<div className="two-line-text-right"> 
				  <p className="float-right bigPriceDecimals">{currency}/{unitaryPriceUoM}</p> 
				  <p className="float-right bigPriceDecimals">,{displayUnitaryPriceNoVATplusVAT[1]}</p>
			      <p className="float-right bigPrice">{displayUnitaryPriceNoVATplusVAT[0]}</p> 
				  <p className="float-right priceNoVAT">{currency}/{unitaryPriceUoM}+VAT &nbsp;</p> 
				  <p className="float-right priceNoVAT">{displayUnitaryPriceNoVAT}</p> 
			    </div>
			    
			</div>
		)
	}
}

