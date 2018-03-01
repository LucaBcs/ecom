import React from "react"

export default class Name_Manufacturer_Price extends React.Component{

	render(){

		{/* IMPORT PROPS */}

		var productName = this.props.product.productName
		var manufacturerName = this.props.product.manufacturer
		var manufacturerCountry = this.props.product.manufacturerAddress
		var currency = this.props.product.currency

		var priceNoVAT = Number(this.props.product.priceNoVAT)
		var productVAT = Number(this.props.product.VAT)

		{/* EDITING AND CALCULATIONS */}

		var manufacturer = manufacturerName + ", " + manufacturerCountry

		var priceVAT = Number(priceNoVAT*productVAT/100)
	
		var priceNoVATplusVAT = Number(priceNoVAT+priceVAT)

		var displayPriceNoVATplusVAT = Number(priceNoVATplusVAT).toFixed(2).split(".")
		var displayPriceNoVAT = Number(priceNoVAT).toFixed(2).split(".")

		return(

			<div className="standarCenterRow-container addBorderTop">

				<div className="two-line-text-left">
					<div className="vertical-space"></div>
					<div className="text fsz-14 productName">{productName}</div>
					<div className="text fsz-12">{manufacturer}</div>
					<div className="vertical-space"></div>
				</div>

<div className="big-price-containter">
	<div className="big-price-wrap">
		<div className="big-price-left">{displayPriceNoVATplusVAT[0]}</div>
		<div className="big-price-right">,{displayPriceNoVATplusVAT[1]}&nbsp;{currency}</div>
	</div>

	<div className="big-price-vat-wrap">
	<div className="big-price-vat-left">{displayPriceNoVAT[0]}</div>
	<div className="big-price-vat-right">,{displayPriceNoVAT[1]}&nbsp;{currency}+VAT</div>
	</div>

</div>


				{/*
				<div className="big-price-containter"> 
					<p className="float-right bigPriceDecimals">{currency}</p> 
					<p className="float-right bigPriceDecimals">,{displayPriceNoVATplusVAT[1]}</p>
			        <p className="float-right bigPrice">{displayPriceNoVATplusVAT[0]}</p> 
				    <p className="float-right priceNoVAT">{currency}+VAT &nbsp;</p> 
				    <p className="float-right priceNoVAT">{displayPriceNoVAT}</p> 
			  	</div>	
			  	*/}

			</div>
		)
	}
}

							

