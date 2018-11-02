import React from 'react';

const BuyActivity = props => {
	if (!props.buy) {
			return (
				<p>Loading Buy Data...</p>
				);
		}


		if(props.buy.length === 0) {
			return (
				<div className="article-preview">
					No Buy data available.
				</div>
				);
		}


		return (
			<div className="buy-activity-container">
				<div className="buy-activity-table-container">
					<table className="buy-activity-table table">
				        <thead>
				          <tr>
				            <td>Count</td>
				            <td>Amount</td>
				            <td>Total</td>
				            <td>Price</td>
				          </tr>
				        </thead>
				        <tbody>

				        {props.buy[2] > 0  ? 


					        <tr>
					        	<td> {props.buy[1]} </td>
					            <td> {Math.round((props.buy[2])*100) / 100} </td>
					            <td> {Math.round((props.buy[2])*100) / 100}</td>
					            <td> {props.buy[0]} </td>
					        </tr> :

					        null }


					    
					    </tbody>
					</table>
				</div>
			</div>

		);


}


export default BuyActivity;
