import React from "react"

export default class Tags extends React.Component{

	render(){


		return(

			<div className="standarCenterRow-container">
				<div className="two-line-text-left">TAGS</div>
				<div className="two-line-text-right">
					<div>{this.props.tags}</div>
				</div>

			</div>

			)

	}

}



