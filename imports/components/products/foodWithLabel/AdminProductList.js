import React from "react"
import Name_Manufacturer_Price from "../_ComplexParts/Name_Manufacturer_Price.js"
import AdminEdit_ItemId from "../_ComplexParts/AdminEdit_ItemId.js"
import ExpectedCostsPickUp_Delivery from "../_ComplexParts/ExpectedCostsPickUp_Delivery.js"
import Availability_DeliveryTiming from "../_ComplexParts/Availability_DeliveryTiming.js"

import UnitaryPrice from "../_SimpleParts/UnitaryPrice.js"
import Quantity from "../_SimpleParts/Quantity.js"
import Tags from "../_SimpleParts/Tags.js"
import Seller from "../_SimpleParts/Seller.js"
import AdminAvailability from "../_SimpleParts/AdminAvailability.js"
import ExpandInfoButton from "../_SimpleParts/ExpandInfoButton.js"
import OpenInNewTabButton from "../_SimpleParts/OpenInNewTabButton.js"
import ProfilePicture from "../_SimpleParts/ProfilePicture.js"

export default class ListItem extends React.Component{

	render(){  

		{/* IMPORT PROPS */}

		var products = this.props.products
		var predefined = this.props.predefined

		if (products==undefined){

			return null
		}

		else {

		return(

			products.map((item,index) =>{

				return(
				
				<div key={index} className="listItem-container">

					<div className="item-left-block">

						<AdminEdit_ItemId
							product={item}
							predefined={predefined}
						/> 

						<AdminAvailability
							product={item}
							predefined={predefined}
						/>


					</div>

					<div>
						<Name_Manufacturer_Price
							product={item}
							predefined={predefined}
						/>
						<Tags
							product={item}
							predefined={predefined}
						/>
					</div>

					<div  className="more-info-container">
						<OpenInNewTabButton />	
						<ExpandInfoButton />
					</div>

					<div className="spacing50rem"> </div>


				</div>

				)})
		)
	}}
}

