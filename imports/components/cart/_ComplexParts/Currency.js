import React from "react"

export default class Currency extends React.Component{

	render(){

		{/* IMPORT PROPS */}

		var currency = this.props.predefined.price.currency.symbol
		var code = this.props.predefined.price.currency.code
		var priceNoVAT = this.props.predefined.price.priceNoVAT
		var productVAT = this.props.predefined.price.productVAT

		{/* EDITING AND CALCULATIONS */}

		var priceVAT = Number(priceNoVAT*productVAT/100)
	
		var priceNoVATplusVAT = Number(priceNoVAT+priceVAT)

		var displayPriceNoVATplusVAT = Number(priceNoVATplusVAT).toFixed(2).split(".")
		var displayPriceNoVAT = Number(priceNoVAT).toFixed(2).split(".").join(",")

		return(

			<div className="sideCart-total-row-container">

				<center className="line-height border-right">
					<div className="far fa-edit icons"></div>
				</center>
				
					<div className="sideCart-left-text-container">
							<div className="sideCart-left-text">
							{currency}&nbsp;{code}&nbsp;
							</div>
						
						<div className="singleCart-txt-right">
						<div></div>
							<div className="text fsz-14">
								<p className="float-right bigPriceDecimals">{currency}</p> 
								<p className="float-right bigPriceDecimals">,{displayPriceNoVATplusVAT[1]}</p>
						        <p className="float-right bigPrice">&nbsp; {displayPriceNoVATplusVAT[0]}</p> 
							</div>
							<div className="text fsz-12">
								<p className="float-right priceNoVAT">{currency}+VAT &nbsp;</p> 
					    		<p className="float-right priceNoVAT">{displayPriceNoVAT}</p> 
							</div>
						<div></div>
						</div>

					</div>

			<center className="newTab-button">
				<div className="fas fa-arrow-circle-right icons"></div>
			</center>
				
			</div>

		)
	}
}