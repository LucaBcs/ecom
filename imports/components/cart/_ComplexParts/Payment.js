import React from "react"

export default class Payment extends React.Component{

	render(){ 

		{/* IMPORT PROPS */}

		var name = this.props.predefined.payment.productName
		var terms = this.props.predefined.payment.specs.terms
		var type = this.props.predefined.payment.specs.type
		var currency = this.props.predefined.payment.price.currency.symbol
		var priceNoVAT = Number(this.props.predefined.payment.price.priceNoVAT)
		var productVAT = Number(this.props.predefined.payment.price.productVAT)

		{/* EDITING AND CALCULATIONS */}

		var priceVAT = Number(priceNoVAT*productVAT/100)
	
		var priceNoVATplusVAT = Number(priceNoVAT+priceVAT)

		var displayPriceNoVATplusVAT = Number(priceNoVATplusVAT).toFixed(2).split(".")
		
		return(

			<div className="sideCart-standard-row-container">
				<div className="sideCart-left-text-container">

					<div className="sideCart-left-text">
					PAYMENT
					</div>
									
					<div className="sideCart-right-text-double">
						<div></div>
							<div className="text fsz-14">
								<p className="float-right fsz-12">&nbsp;{currency}</p>
								<p className="float-right fsz-12">{displayPriceNoVATplusVAT[1]}</p>
								<p className="float-right fsz-16">{displayPriceNoVATplusVAT[0]},</p>
								<p className="float-right fsz-16">{name} &nbsp;</p>
							</div>
							<div className="text fsz-12">
								<p className="float-right">{type}</p>
								<p className="float-right">{terms},&nbsp;</p>
							</div>
						<div></div>
					</div>

				</div>

				<center className="line-height">
					<div className="far fa-edit icons"></div>
				</center>
				
			</div>
		)
	}

}