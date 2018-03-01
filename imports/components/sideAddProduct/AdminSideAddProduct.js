import React from "react"

import { Products } from "../../collections/Products.js"

export default class AdminSideAddProduct extends React.Component{

	constructor(){

		super()

		this.onChangeHandler=this.onChangeHandler.bind(this)
		this.resetInput=this.resetInput.bind(this)
		this.validateEditDb=this.validateEditDb.bind(this)

		this.state={ 	newProduct:{

							available: "",
							productName: "",

							priceNoVAT:"",
							VAT: 22,
							currency: "€",
							currency_id: {"$id":"111", "$ref":"currencies"},

							pieces: 1,

							quantityPerPiece: "",
							quantityPerPieceUoM: {UoM: "gr", scale: 0.001},
							quantityPerPieceUoM_id:{"$id":"111", "$ref":"unitsOfMeasurement"},

							unitaryPriceUoM: {UoM: "kg", scale: 1},
							unitaryPriceUoM_id: {"$id":"222", "$ref":"unitsOfMeasurement"},

							manufacturer: "Azienda Agricola lo Scroto SRL",
							manufacturer_id: {"$id":"333", "$ref":"entities"},
							manufacturerAddress:"Italy",
							manufacturerAddress_id: {"$id":"222", "$ref":"addresses"},

							pickUpEntity: "Cristzzo SRL",
							pickUpEntity_id: {"$id":"111", "$ref":"entities"},
							pickUpAddress: "Milan, Italy",
							pickUpAddress_id: {"$id":"222", "$ref":"addresses"},

							seller:"Agrigesù SRL",
							seller_id: {"$id":"222", "$ref":"entities"},
							sellerAddress:"Milan, Italy",
							sellerAddress_id: {"$id":"222", "$ref":"addresses"},

							tags:[],

							profilePic: "https://media.eataly.net/media/catalog/product/cache/7/image/433x/9df78eab33525d08d6e5fb8d27136e95/I/l/Il-Mercante-di-Spezie-Sale-Trapani-Secchiello-1Kg-49048.jpg", 
							coverPic:"",
						 	},
						
							productName:"",
							noVAT:"",
							quantityPerPiece:"",
							available:"",
							tags:"",
							profilePic:"",
							coverPic:"",

							form: "CREATE NEW COMPANY",

							editedProduct: [],
		}
	}


	validateEditDb(){

	{/* PUT ALL INPUT INTO A VAR */}

		var input = this.state
		var newProduct = this.state.newProduct

		var productName = input.productName
		var noVAT = input.noVAT
		var quantityPerPiece = input.quantityPerPiece
		var available = input.available
		var tags = input.tags
		var profilePic = input.profilePic
		var coverPic = input.coverPic

	{/* VALIDATE EACH VAR */}

	{/* MANIPULATE SPECIFIC VALUES */}

		tags = this.editTags(tags)

	{/* PREPARE NEW PRODUCT */}

		newProduct.productName = productName
		newProduct.pricenoVAT = noVAT
		newProduct.quantityPerPiece = quantityPerPiece
		newProduct.available = available
		newProduct.tags = tags
		newProduct.profilePic = profilePic
		newProduct.coverPic = coverPic

	{/* SEND TO DB */}

		console.log(newProduct)

		Meteor.call("addProduct", newProduct)

	{/* RESET INPUT FIELDS */}

		this.resetInput()
	}

	resetInput(){

		var input = this.state

		input.productName = ""
		input.noVAT = ""
		input.quantityPerPiece = ""
		input.available = ""
		input.tags = ""
		input.profilePic = ""
		input.coverPic = ""

		this.setState({input})

	}


	editTags(tags){

		var tagsEditing = tags.split(" ")
		var tagsEdited = []

		tagsEditing.map((item, index) =>{

			var obj = item.split(":")
			
			tagsEdited.push({key: obj[0], value: obj[1]})
		})

		return tagsEdited
	}


	onChangeHandler(event){

		var objKey = event.target.id
		var objValue = event.target.value

		this.setState({[objKey]:objValue},()=>{
			console.log(this.state)
		})

	}

	render(){

		{/* IMPORT PROPS */}

		var input = this.state

		var productName = input.productName
		var noVAT = input.noVAT
		var quantityPerPiece = input.quantityPerPiece
		var available = input.available
		var tags = input.tags
		var profilePic = input.profilePic
		var coverPic = input.coverPic

		return(

			<div className="side-cart-container">

					<div>
					</div>

					<div>
					
						<div className="cont-row-create">
							<div className="create-new">
								<p>CREATE NEW PRODUCT</p>
							</div>
							<div className="save-cancel-container">
								<button onClick={this.resetInput} className="btn-cancel">CANCEL</button>
								<button onClick={this.validateEditDb} className="btn-save">SAVE</button>
							</div>
						</div>	

						<div onChange={this.onChangeHandler}>							

						<div className="cont-row-20-30">
							<div className="row20 align-end">PRODUCT NAME</div>
							<input 
							value={productName}
							id="productName"
							className="row30"
							placeholder="Type product name..."/>
						</div>

						<div className="cont-row-20-30">
							<div className="row20 align-end">INSERT PRICE WITHOUT VAT</div>
							<input 
							value={noVAT}
							id="noVAT"
							className="row30"
							placeholder="Type Price of the product without VAT.."/>
						</div>

						<div className="cont-row-20-30">
							<div className="row20 align-end">QUANTITY PER PIECE</div>
							<input 
							value={quantityPerPiece}
							id="quantityPerPiece"
							className="row30"
							placeholder="Type Quantity per piece.."/>
						</div>

						<div className="cont-row-20-30">
							<div className="row20 align-end">ITEMS AVAILABLE</div>
							<input 
							value={available}
							id="available"
							className="row30"
							placeholder="Type number of items available.."/>
						</div>

						<div className="cont-row-20-30">
							<div className="row20 align-end">ADD TAGS</div>
							<input 
							value={tags}
							id="tags"
							className="row30"
							placeholder="Type number of items available.."/>
						</div>

						<div className="cont-row-20-30">
							<div className="row20 align-end">ADD PROFILE PICTURE</div>
							<input 
							id="profilePic"
							className="row30"
							placeholder="Upload a profile picture.."/>
						</div>

						<div className="cont-row-20-30">
							<div className="row20 align-end">ADD COVER PICTURE</div>
							<input 
							id="coverPic"
							className="row30"
							placeholder="Upload a cover picture.."/>
						</div>

						</div>

					</div>
			</div>
		)
	}
}