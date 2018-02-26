import React from "react"

export default class Name_Manufacturer_Price extends React.Component{

	splitDecimals(){




	}

	render(){
		
		var productName = this.props.name
		var manufacturer = this.props.manufacturer.companyName + ", " + this.props.manufacturer.city + " (" + this.props.manufacturer.country + ")"
		var currency = this.props.price.currency

		var priceNoVAT = Number(this.props.price.priceNoVAT)
		var VAT = Number(this.props.price.productVAT)
		var priceVAT = Number(priceNoVAT*VAT/100)

		var priceNoVATplusVATnum = priceNoVAT+priceVAT

		var priceNoVATplusVATdisplay = Number(priceNoVATplusVATnum).toFixed(2).split(".")
		var priceNoVATdisplay = Number(priceNoVAT).toFixed(2).split(".").join(",")


		
		var priceString = <div className="two-line-text-right"> 
							  <p className="float-right bigPriceDecimals">{currency}</p> 
							  <p className="float-right bigPriceDecimals">,{priceNoVATplusVATdisplay[1]}</p>
						      <p className="float-right bigPrice">{priceNoVATplusVATdisplay[0]}</p> 
							  <p className="float-right priceNoVAT">{currency}+VAT &nbsp;</p> 
							  <p className="float-right priceNoVAT">{priceNoVATdisplay}</p> 
						  </div>

		return(

			<div className="standarCenterRow-container addBorderTop">

				<div className="two-line-text-left">
					<div className="vertical-space"></div>
					<div className="text fsz-14 productName">{productName}</div>
					<div className="text fsz-12">{manufacturer}</div>
					<div className="vertical-space"></div>
				</div>
				{priceString}
			</div>

			)

	}

}

							

