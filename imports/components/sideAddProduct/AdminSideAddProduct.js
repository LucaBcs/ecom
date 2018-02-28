import React from "react"

export default class AdminSideAddProduct extends React.Component{

	constructor(){

		super()

		this.onChangeHandler=this.onChangeHandler.bind(this)
		this.resetInput=this.resetInput.bind(this)
		this.validateEditDb=this.validateEditDb.bind(this)

		this.state={ 	newProduct:{
							available: "",
							productName: "",
							location: {entity: {name: "Location SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
							pics: {profile: "", cover: ""},
							price: {noVAT: "", VAT: 22, currency: {name:"euro", code:"EUR", symbol:"€"}},
							quantity: {pieces: 1, quantityPerPiece: ""},
							uom: {quantity: {system: "metric system", unit:"gr"}, unitaryPrice: {system: "metric system", unit:"kg"}},
							manufacturer: {entity: {name: "Manuf SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arucul", city:"Bagigi", zip:"23334", country:"Italy"}},
							seller: {entity: {name: "Seller SRL", type: "Legal Entity", country:"Italy"}, legalAddress: {number:"34", street:"Arsskksksl", city:"Bagigi salala", zip:"23334", country:"Italy"}},
							tags:[],
						 	},
						
							productName:"",
							noVAT:"",
							quantityPerPiece:"",
							available:"",
							tags:"",
							profilePic:"",
							coverPic:"",
						
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
		newProduct.price.noVAT = noVAT
		newProduct.quantity.quantityPerPiece = quantityPerPiece
		newProduct.available = available
		newProduct.tags = tags
		newProduct.pics.profile = profilePic
		newProduct.pics.cover = coverPic

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