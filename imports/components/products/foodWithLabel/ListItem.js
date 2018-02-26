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
		
		var products = this.props.products

		return(

			products.map((item,index) =>{

				return(

				<div key={index} className="listItem-container">

					<div className="item-left-block">
						<FavouritesButton_ItemId
							itemId={item.itemId}
						/> 

						<ProfilePicture
							profilePicture={item.profilePicture}
						/>

						<CartButton

						/>
					
					</div>
					<div>
						<Name_Manufacturer_Price
							name={item.productName}
							manufacturer={item.manufacturer}
							price={item.productPriceQuantity}
						/>

						<UnitaryPrice
							unitaryPrice={item.productPriceQuantity}
						/>
						<Quantity
							quantity={item.productPriceQuantity}
						/>

						<ExpectedCostsPickUp_Delivery
							pickUp={item.expectedPickUpCosts}
							delivery={item.expectedDeliveryCosts}
						/>
						<Seller
							seller={item.seller}
						/>
						<Tags
							tags={item.tags}
						/>
						<Availability_DeliveryTiming
							availability={item.itemsAvailable}
							deliveryTiming={item.deliveryTiming}					
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

