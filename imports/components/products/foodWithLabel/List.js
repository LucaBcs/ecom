import React from "react"
import ListItem from "./ListItem"

export default class List extends React.Component{

	render(){

		
		return(

			<div className="list-container invisible-scrollbar">

				<ListItem
				products={this.props.products}
				/>

			</div>

			)

	}
 
}