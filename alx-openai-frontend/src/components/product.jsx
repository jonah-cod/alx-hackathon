import React from "react";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
	const { image, title, price, rating } = product;
	return (
		<div className="product">
			<Link>
				<img
					src={image}
					alt=""
				/>
				<p>
					{title.substr(0, 50)}
					{title.length > 50 ? "..." : ""}
				</p>
				<span className="price">Ksh {price * 100}</span>
				<div className="rating"></div>
				<button className="btn">add to cart</button>
			</Link>
		</div>
	);
};

export default Product;
