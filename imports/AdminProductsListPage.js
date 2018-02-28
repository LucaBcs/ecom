import React from "react"

import NavBar from "./components/navBar/NavBar.js"
import SideLeftBar from "./components/sideLeftBar/SideLeftBar.js"
import AdminProductList from "./components/products/foodWithLabel/AdminProductList.js"
import AdminSideAddProduct from "./components/sideAddProduct/AdminSideAddProduct.js"

import { Products } from "./collections/Products.js"

export default class AdminProductListPage extends React.Component{

constructor(){

		super()

		this.state = { products: [
									{_id: "AAAAA4",
									available: 3,
									productName: "Maronno7",
									location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									pics: {profile: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", cover: ""},
									price: {priceNoVAT: 600, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
									quantity: {pieces: 1, quantityPerPiece: 4.56},
									uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
									manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
									seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									tags: "category:eating,maincourse product:rice #fit valleverde"},

									{_id: "AAAAA4",
									available: 4,
									productName: "Maronno6",
									location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									pics: {profile: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", cover: ""},
									price: {priceNoVAT: 200, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
									quantity: {pieces: 1, quantityPerPiece: 8.88},
									uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
									manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
									seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									tags: "category:eating,maincourse product:rice #fit valleverde"},

									{_id: "AAAAA4",
									available: 5,
									productName: "Maronno5",
									location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									pics: {profile: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", cover: ""},
									price: {priceNoVAT: 1200, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
									quantity: {pieces: 1, quantityPerPiece: 345},
									uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
									manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
									seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									tags: "category:eating,maincourse product:rice #fit valleverde"},

									{_id: "AAAAA4",
									available: 15,
									productName: "Maronno4",
									location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									pics: {profile: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", cover: ""},
									price: {priceNoVAT: 1000, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
									quantity: {pieces: 1, quantityPerPiece: 900},
									uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
									manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
									seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									tags: "category:eating,maincourse product:rice #fit valleverde"},

									{_id: "AAAAA4",
									available: 28,
									productName: "Maronno3",
									location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									pics: {profile: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", cover: ""},
									price: {priceNoVAT: 22.444, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
									quantity: {pieces: 1, quantityPerPiece: 400},
									uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
									manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
									seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									tags: "category:eating,maincourse product:rice #fit valleverde"},

									{_id: "AAAAA4",
									available: 97,
									productName: "Maronno2",
									location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									pics: {profile: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", cover: ""},
									price: {priceNoVAT: 22.445, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
									quantity: {pieces: 1, quantityPerPiece: 400},
									uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
									manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
									seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									tags: "category:eating,maincourse product:rice #fit valleverde"},

									{_id: "AAAAA4",
									available: 4,
									productName: "Maronno1",
									location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									pics: {profile: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", cover: ""},
									price: {priceNoVAT: 8.99999, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
									quantity: {pieces: 10, quantityPerPiece: 10},
									uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
									manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
									seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									tags: "category:eating,maincourse product:rice #fit valleverde"},

									{_id: "AAAAA4",
									available: 4,
									productName: "Maronno0",
									location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									pics: {profile: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", cover: ""},
									price: {priceNoVAT: 100, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
									quantity: {pieces: 1, quantityPerPiece: 400},
									uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
									manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
									seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
									tags: "category:eating,maincourse product:rice #fit valleverde"},

								],

						predefined: {
									price: {priceNoVAT: 100665, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
									pickUp:   {_id: "AAAAA5",
												available: true,
												productName: "PickUp",
												location: {entity: {name: "", type: "", country:""}, address: {number:"", street:"", city:"Cagliari", zip:"", country:"Italy"}},
												price: {priceNoVAT: 0, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
										},
									delivery:  {_id: "AAAAA6",
												available: true,
												productName: "Delivered",
												specs: {timeExpected: "18 March 2018 h 18.00"}, 
												location: {entity: {name: "", type: "", country:""}, address: {number:"", street:"", city:"Milan", zip:"", country:"Italy"}},
												price: {priceNoVAT: 50, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
										},
									payment: 	{_id: "AAAAA7",
												available: true,
												productName: "Wire Transfer",
												specs: {terms: "Advanced", type: "Escrow", beneficiaryName: "Escrow SPA"},
												price: {priceNoVAT: 0, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}}
										},

									buyer: {entity: {name: "", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"", street:"", city:"", zip:"", country:""}},
						},

						cart: [ 
								{	cart:{  quantityInTheCart: 1,
											buyer: {entity: {name: "", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"", street:"", city:"", zip:"", country:""}},
									},
									product:{_id: "AAAAA4",
											available: 4,
											productName: "Maronno0",
											location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
											pics: {profile: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", cover: ""},
											price: {priceNoVAT: 100, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
											quantity: {pieces: 1, quantityPerPiece: 400},
											uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
											manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
											seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
											tags: "category:eating,maincourse product:rice #fit valleverde"
									},
								},

								{	cart:{  quantityInTheCart: 1,
											buyer: {entity: {name: "", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"", street:"", city:"", zip:"", country:""}},
									},
									product:{_id: "AAAAA5",
											available: 4,
											productName: "Maronno0",
											location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
											pics: {profile: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", cover: ""},
											price: {priceNoVAT: 100, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
											quantity: {pieces: 1, quantityPerPiece: 400},
											uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
											manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
											seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
											tags: "category:eating,maincourse product:rice #fit valleverde"
									},
								},

								{	cart:{  quantityInTheCart: 1,
											buyer: {entity: {name: "", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"", street:"", city:"", zip:"", country:""}},
									},
									product:{_id: "AAAAA6",
											available: 4,
											productName: "Maronno0",
											location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
											pics: {profile: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", cover: ""},
											price: {priceNoVAT: 100, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
											quantity: {pieces: 1, quantityPerPiece: 400},
											uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
											manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
											seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
											tags: "category:eating,maincourse product:rice #fit valleverde"
									},

								},

								{	cart:{  quantityInTheCart: 1,
											buyer: {entity: {name: "", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"", street:"", city:"", zip:"", country:""}},
									},
									product:{_id: "AAAAA6",
											available: 4,
											productName: "Maronno0",
											location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
											pics: {profile: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", cover: ""},
											price: {priceNoVAT: 100, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
											quantity: {pieces: 1, quantityPerPiece: 400},
											uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
											manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
											seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
											tags: "category:eating,maincourse product:rice #fit valleverde"
									},

								},

								{	cart:{  quantityInTheCart: 1,
											buyer: {entity: {name: "", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"", street:"", city:"", zip:"", country:""}},
									},
									product:{_id: "AAAAA6",
											available: 4,
											productName: "Maronno0",
											location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
											pics: {profile: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", cover: ""},
											price: {priceNoVAT: 100, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
											quantity: {pieces: 1, quantityPerPiece: 400},
											uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
											manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
											seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
											tags: "category:eating,maincourse product:rice #fit valleverde"
									},

								},

								{	cart:{  quantityInTheCart: 1,
											buyer: {entity: {name: "", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"", street:"", city:"", zip:"", country:""}},
									},
									product:{_id: "AAAAA6",
											available: 4,
											productName: "Maronno0",
											location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
											pics: {profile: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", cover: ""},
											price: {priceNoVAT: 100, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
											quantity: {pieces: 1, quantityPerPiece: 400},
											uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
											manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
											seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
											tags: "category:eating,maincourse product:rice #fit valleverde"
									},

								},

								{	cart:{  quantityInTheCart: 1,
											buyer: {entity: {name: "", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"", street:"", city:"", zip:"", country:""}},
									},
									product:{_id: "AAAAA6",
											available: 4,
											productName: "Maronno0",
											location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
											pics: {profile: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", cover: ""},
											price: {priceNoVAT: 100, productVAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
											quantity: {pieces: 1, quantityPerPiece: 400},
											uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
											manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
											seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
											tags: "category:eating,maincourse product:rice #fit valleverde"
									},

								},

							  ]

				}

		}

	componentWillMount(){
		
		Tracker.autorun(()=>{

			var products = Products.find({}).fetch()

			console.log(products)

		})
	}

	render(){

		return(

			<div className="wrapper">
				<NavBar/> 
				<div className="product-page-wrapper">
					<SideLeftBar/>
					<div>1</div>
					<div className="list-and-chart-container">
						<div   className="list-container invisible-scrollbar">
						<AdminProductList
						products={this.state.products}
						predefined={this.state.predefined}

						/>
						</div>
						<AdminSideAddProduct
						products={this.state.products}
						predefined={this.state.predefined}
						/>
					</div>
					<div>1</div>
				</div>
			</div>

			)

	}

}