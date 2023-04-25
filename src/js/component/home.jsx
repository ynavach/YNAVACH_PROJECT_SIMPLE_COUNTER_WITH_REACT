import React from "react";

import { useState , useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const SecondsCounter = (props) => {
	return (
		<div className="container mt-5">
			<div className="second">
				<i className="far fa-clock"></i>{" "}
			</div>
			<div className="second">{Math.floor(props.contador/100000%10)}</div>
			<div className="second">{Math.floor(props.contador/10000%10)}</div>
			<div className="second">{Math.floor(props.contador/1000%10)}</div>
			<div className="second">{Math.floor(props.contador/100%10)}</div>
			<div className="second">{Math.floor(props.contador/10%10)}</div>
			<div className="second">{Math.floor(props.contador/1%10)}</div>
		</div>
	);
};

//const Home = () => {
//	return (
//		<div className="text-center">
//			<h1 className="text-center mt-5">Hello Rigo!</h1>
//			<p>
//				<img src={rigoImage} />
//			</p>
//			<a href="#" className="btn btn-success">
//				If you see this green button... bootstrap is working...
//			</a>
//			<p>
//				Made by{" "}
//				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
//				love!
//			</p>
//		</div>
//	);
//};

const Home = () => {
	const [count, setCount] = useState(0)
	
	useEffect(() => {
		setInterval(() => {
			setCount(count => count + 1)
		}, 1000)
	}, [])

	return (
		<div>
			<SecondsCounter contador={count}/>
			<p className="text-center mt-3" >
				Made at &nbsp;
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>

		</div>
	);
};


export default Home;
