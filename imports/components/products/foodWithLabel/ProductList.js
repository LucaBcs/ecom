import React from "react"
import Name_Manufacturer_Price from "../_ComplexParts/Name_Manufacturer_Price.js"
import FavouritesButton_ItemId from "../_ComplexParts/FavouritesButton_ItemId.js"
import ExpectedCostsPickUp_Delivery from "../_ComplexParts/ExpectedCostsPickUp_Delivery.js"
import Availability_DeliveryTiming from "../_ComplexParts/Availability_DeliveryTiming.js"

import UnitaryPrice from "../_SimpleParts/UnitaryPrice.js"
import Quantity from "../_SimpleParts/Quantity.js"
import Tags from "../_SimpleParts/Tags.js"
import Seller from "../_SimpleParts/Seller.js"
import CartButton from "../_SimpleParts/CartButton.js"
import ExpandInfoButton from "../_SimpleParts/ExpandInfoButton.js"
import OpenInNewTabButton from "../_SimpleParts/OpenInNewTabButton.js"
import ProfilePicture from "../_SimpleParts/ProfilePicture.js"

export default class ListItem extends React.Component{

	render(){  

		var predefined = this.props.predefined
		var products = this.props.products

		return(

			products.map((item,index) =>{

				return(
				
				<div key={index} className="listItem-container">

					<div className="item-left-block">
						<FavouritesButton_ItemId
							product={item}
							predefined={predefined}
						/> 

						<ProfilePicture
							product={item}
							predefined={predefined}
						/>

						<CartButton

						/>
					
					</div>
					<div>
						<Name_Manufacturer_Price
							product={item}
							predefined={predefined}
						/>

						<UnitaryPrice
							product={item}
							predefined={predefined}
						/>
						<Quantity
							product={item}
							predefined={predefined}
						/>

						<ExpectedCostsPickUp_Delivery
							product={item}
							predefined={predefined}
						/>
						<Seller
							product={item}
							predefined={predefined}
						/>
						<Tags
							product={item}
							predefined={predefined}
						/>
						<Availability_DeliveryTiming
							product={item}
							predefined={predefined}					
						/>
					</div>

					<div  className="more-info-container">

						<OpenInNewTabButton />	

						<div className="spacing-moreInfo-column"> </div>

						<ExpandInfoButton />
		
					</div>
					
					<div className="spacing50rem"> </div>

				</div>
				

				)})
			)

	}

}

