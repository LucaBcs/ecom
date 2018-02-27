import React from "react"

export default class Name_Manufacturer_Price extends React.Component{

	splitDecimals(){




	}

	render(){

		{/* IMPORT PROPS */}

		var productName = this.props.product.productName
		var manufacturerName = this.props.product.manufacturer.entity.name
		var manufacturerCountry = this.props.product.manufacturer.entity.country
		var currency = this.props.product.price.currency.symbol

		var priceNoVAT = Number(this.props.product.price.priceNoVAT)
		var productVAT = Number(this.props.product.price.productVAT)

		{/* EDITING AND CALCULATIONS */}

		var manufacturer = manufacturerName + ", " + manufacturerCountry

		var priceVAT = Number(priceNoVAT*productVAT/100)
	
		var priceNoVATplusVAT = Number(priceNoVAT+priceVAT)

		var displayPriceNoVATplusVAT = Number(priceNoVATplusVAT).toFixed(2).split(".")
		var displayPriceNoVAT = Number(priceNoVAT).toFixed(2).split(".").join(",")

		return(

			<div className="standarCenterRow-container addBorderTop">

				<div className="two-line-text-left">
					<div className="vertical-space"></div>
					<div className="text fsz-14 productName">{productName}</div>
					<div className="text fsz-12">{manufacturer}</div>
					<div className="vertical-space"></div>
				</div>

				<div className="two-line-text-right"> 
					<p className="float-right bigPriceDecimals">{currency}</p> 
					<p className="float-right bigPriceDecimals">,{displayPriceNoVATplusVAT[1]}</p>
			        <p className="float-right bigPrice">{displayPriceNoVATplusVAT[0]}</p> 
				    <p className="float-right priceNoVAT">{currency}+VAT &nbsp;</p> 
				    <p className="float-right priceNoVAT">{displayPriceNoVAT}</p> 
			  	</div>	

			</div>
		)
	}
}

							

