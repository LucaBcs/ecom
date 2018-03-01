import React from "react"

export default class UnitaryPrice extends React.Component{

	render(){

		{/* IMPORT PROPS */}

		var currency = this.props.product.currency
		var unitaryPriceUoM = this.props.product.unitaryPriceUoM.UoM

		var pieces = this.props.product.pieces
		var quantityPerPiece = this.props.product.quantityPerPiece

		var priceNoVAT = Number(this.props.product.priceNoVAT)
		var VAT = Number(this.props.product.VAT) 

		{/* EDITING AND CALCULATIONS */}

		var unitaryPriceNoVAT = Number(priceNoVAT/quantityPerPiece*pieces*1000)
		var unitaryPriceVAT = Number(unitaryPriceNoVAT*VAT/1000)

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

