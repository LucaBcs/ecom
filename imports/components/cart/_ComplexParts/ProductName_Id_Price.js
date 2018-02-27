import React from "react"

export default class ProductName_Id_Price extends React.Component{

	render(){

		{/* IMPORT PROPS */}

		var productName = this.props.cart.product.productName
		var ProductId = this.props.cart.product._id
		var currency = this.props.cart.product.price.currency.symbol
		var priceNoVAT = this.props.cart.product.price.priceNoVAT
		var productVAT = this.props.cart.product.price.productVAT

		{/* EDITING AND CALCULATIONS */}

		var priceVAT = Number(priceNoVAT*productVAT/100)
	
		var priceNoVATplusVAT = Number(priceNoVAT+priceVAT)

		var displayPriceNoVATplusVAT = Number(priceNoVATplusVAT).toFixed(2).split(".")
		var displayPriceNoVAT = Number(priceNoVAT).toFixed(2).split(".").join(",")

		return (

			<div className="singleCartItem-text-container border-right">

				<div className="singleCart-txt-left">
					<div></div>
						<div className="text fsz-14">{productName}</div>
						<div className="text fsz-12">ID &nbsp; {ProductId}</div>
					<div></div>
				</div>

				<div className="singleCart-txt-right">
					<div></div>
						<div className="text fsz-14">
							<p className="float-right bigPriceDecimals">{currency}</p> 
							<p className="float-right bigPriceDecimals">,{displayPriceNoVATplusVAT[1]}</p>
					        <p className="float-right bigPrice">{displayPriceNoVATplusVAT[0]}</p> 
						</div>
						<div className="text fsz-12">
							<p className="float-right priceNoVAT">{currency}+VAT &nbsp;</p> 
				    		<p className="float-right priceNoVAT">{displayPriceNoVAT}</p> 
						</div>
					<div></div>
				</div>

			</div>
		)
	}
}