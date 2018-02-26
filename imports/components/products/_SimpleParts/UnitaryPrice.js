import React from "react"

export default class UnitaryPrice extends React.Component{

	render(){
		
		var currency = this.props.unitaryPrice.currency
		var unitaryPriceUoM = this.props.unitaryPrice.unitaryPriceUnitOfMeasure

		var nrOfPieces = this.props.unitaryPrice.nrOfPieces
		var quantityPerPiece = this.props.unitaryPrice.quantityPerPiece
		var basePrice = this.props.unitaryPrice.priceNoVAT

		var unitaryPriceNoVAT = Number(basePrice/quantityPerPiece*nrOfPieces*1000)

		var priceNoVAT = Number(unitaryPriceNoVAT)
		var VAT = Number(this.props.unitaryPrice.productVAT)
		var priceVAT = Number(priceNoVAT*VAT/100)

		var priceNoVATplusVATnum = priceNoVAT+priceVAT

		var priceNoVATplusVATdisplay = Number(priceNoVATplusVATnum).toFixed(2).split(".")
		var priceNoVATdisplay = Number(priceNoVAT).toFixed(2).split(".").join(",")
		
		var priceString = <div className="two-line-text-right"> 
							  <p className="float-right bigPriceDecimals">{currency}/{unitaryPriceUoM}</p> 
							  <p className="float-right bigPriceDecimals">,{priceNoVATplusVATdisplay[1]}</p>
						      <p className="float-right bigPrice">{priceNoVATplusVATdisplay[0]}</p> 
							  <p className="float-right priceNoVAT">{currency}/{unitaryPriceUoM}+VAT &nbsp;</p> 
							  <p className="float-right priceNoVAT">{priceNoVATdisplay}</p> 
						  </div>

		return(

			<div className="standarCenterRow-container">
				<div className="two-line-text-left">UNITARY PRICE</div>
				{priceString}
			</div>

			)

	}

}

