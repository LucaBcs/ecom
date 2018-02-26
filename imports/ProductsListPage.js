import React from "react"

import NavBar from "./components/navBar/NavBar.js"
import SideLeftBar from "./components/sideLeftBar/SideLeftBar.js"
import List from "./components/products/foodWithLabel/List.js"
import SideCart from "./components/cart/SideCart.js"

export default class ProductsListPage extends React.Component{

	constructor(){

		super()

		this.state = { products: 	[

									{itemId: "AAAAA0",
									productName: "Zibibbo",
									itemsAvailable: "3+ Available",
									deliveryTiming: "Expected arrival before 21 March 2018 h 18.00 ",
									expectedPickUpCosts: "picked up in Cagliari, Italy 0,00 €",
									expectedDeliveryCosts: "delivered Milan, Italy  100,00+IVA 122,00 €",
									itemId: "AAA345F3498",
									manufacturer: {companyName: "Abdul di Stocazz", addressStreetNr: "Via Culo 10", city: "Asti", zipCode: "14100", region: "AT", country: "Italy"},
									seller: {companyName: "Seller di Stocazz", addressStreetNr: "Via SellerCulo 10", city: "Asti", zipCode: "14100", region: "AT", country: "Italy"},
									profilePicture: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg",
									productPriceQuantity: {priceNoVAT: 400, productVAT: 22, currency: "€", nrOfPieces: 1, quantityPerPiece: 400, quantityUnitOfMeasure: "gr", unitaryPriceUnitOfMeasure: "kg"},
									tags: "category:eating,maincourse product:rice #fit valleverde"},

									{itemId: "AAAAA1",
									productName: "Zibibbo2",
									itemsAvailable: "3+ Available",
									deliveryTiming: "Expected arrival before 21 March 2018 h 18.00 ",
									expectedPickUpCosts: "picked up in Cagliari, Italy 0,00 €",
									expectedDeliveryCosts: "delivered Milan, Italy  100,00+IVA 122,00 €",
									itemId: "AAA345F3498",
									manufacturer: {companyName: "Abdul di Stocazz", addressStreetNr: "Via Culo 10", city: "Asti", zipCode: "14100", region: "AT", country: "Italy"},
									seller: {companyName: "Seller di Stocazz", addressStreetNr: "Via SellerCulo 10", city: "Asti", zipCode: "14100", region: "AT", country: "Italy"},
									profilePicture: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg",
									productPriceQuantity: {priceNoVAT: 400.9, productVAT: 22, currency: "€", nrOfPieces: 1, quantityPerPiece: 400, quantityUnitOfMeasure: "gr", unitaryPriceUnitOfMeasure: "kg"},
									tags: "category:eating,maincourse product:rice #fit valleverde"},

									{itemId: "AAAAA2",
									productName: "Zibggibbo3",
									itemsAvailable: "3+ Available",
									deliveryTiming: "Expected arrival before 21 March 2018 h 18.00 ",
									expectedPickUpCosts: "picked up in Cagliari, Italy 0,00 €",
									expectedDeliveryCosts: "delivered Milan, Italy  100,00+IVA 122,00 €",
									itemId: "AAA345F3498",
									manufacturer: {companyName: "Abdul di Stocazz", addressStreetNr: "Via Culo 10", city: "Asti", zipCode: "14100", region: "AT", country: "Italy"},
									seller: {companyName: "Seller di Stocazz", addressStreetNr: "Via SellerCulo 10", city: "Asti", zipCode: "14100", region: "AT", country: "Italy"},
									profilePicture: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg",
									productPriceQuantity: {priceNoVAT: 99.99, productVAT: 22, currency: "€", nrOfPieces: 1, quantityPerPiece: 400, quantityUnitOfMeasure: "gr", unitaryPriceUnitOfMeasure: "kg"},
									tags: "category:eating,maincourse product:rice #fit valleverde"},

									{itemId: "AAAAA3",
									productName: "Zibibbo4",
									itemsAvailable: "3+ Available",
									deliveryTiming: "Expected delivery before 21 March 2018 h 18.00 ",
									expectedPickUpCosts: "picked up in Cagliari, Italy 0,00 €",
									expectedDeliveryCosts: "delivered Milan, Italy  100,00+IVA 122,00 €",
									itemId: "AAA345F3498",
									manufacturer: {companyName: "Abdul di Stocazz", addressStreetNr: "Via Culo 10", city: "Asti", zipCode: "14100", region: "AT", country: "Italy"},
									seller: {companyName: "Seller di Stocazz", addressStreetNr: "Via SellerCulo 10", city: "Asti", zipCode: "14100", region: "AT", country: "Italy"},
									profilePicture: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg",
									productPriceQuantity: {priceNoVAT: 88.8888, productVAT: 22, currency: "€", nrOfPieces: 1, quantityPerPiece: 400, quantityUnitOfMeasure: "gr", unitaryPriceUnitOfMeasure: "kg"},
									tags: "category:eating,maincourse product:rice #fit valleverde"},

									{itemId: "AAAAA4",
									productName: "Zibibbo5",
									itemsAvailable: "3+ Available",
									deliveryTiming: "Expected delivery before 21 March 2018 h 18.00 ",
									expectedPickUpCosts: "picked up in Cagliari, Italy 0,00 €",
									expectedDeliveryCosts: "delivered Milan, Italy  100,00+IVA 122,00 €",
									itemId: "AAA345F3498",
									manufacturer: {companyName: "Abdul di Stocazz", addressStreetNr: "Via Culo 10", city: "Asti", zipCode: "14100", region: "AT", country: "Italy"},
									seller: {companyName: "Seller di Stocazz", addressStreetNr: "Via SellerCulo 10", city: "Asti", zipCode: "14100", region: "AT", country: "Italy"},
									profilePicture: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg",
									productPriceQuantity: {priceNoVAT: 7.99, productVAT: 22, currency: "€", nrOfPieces: 1, quantityPerPiece: 400, quantityUnitOfMeasure: "gr", unitaryPriceUnitOfMeasure: "kg"},
									tags: "category:eating,maincourse product:rice #fit valleverde"},

									],

				}

		}

	render(){



		return(

			<div className="wrapper">
				<NavBar/> 
				<div className="product-page-wrapper">
					<SideLeftBar/>
					<div>1</div>
					<div className="list-and-chart-container">
						<List
						products={this.state.products}
						/>
						<SideCart

						/>
					</div>
					<div>1</div>
				</div>
			</div>

			)

	}

}