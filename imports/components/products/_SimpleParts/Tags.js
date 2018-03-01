import React from "react"

export default class Tags extends React.Component{

	render(){

		{/* IMPORT PROPS */}

		var tags = this.props.product.tags.map((item, index)=>{
			return 	<p key={index}>{item.key}:{item.value}</p>
		})
		
		return(

			<div className="standarCenterRow-container">

				<div className="two-line-text-left">TAGS</div>
				<div className="two-line-text-right">
					<div>{tags}</div>
				</div>

			</div>
		)
	}
}



