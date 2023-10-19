import "./App.css";
import { useState } from "react";

function MyButton({ count, onClick }) {
	return (
		<button onClick={onClick} style={{ backgroundColor: "green" }}>
			Clicked {count} times
		</button>
	);
}

export default function App() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}
	return (
		<>
			<h1>Welcome to my app</h1>
			<MyButton count={count} onClick={handleClick} />
			<MyButton count={count} onClick={handleClick} />
		</>
	);
}

// const user = {
// 	name: "Hedy Lamarr",
// 	imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
// 	imageSize: 90,
// };

// export default function Profile() {
// 	return (
// 		<>
// 			<h1>{user.name}</h1>
// 			<img
// 				className="avatar"
// 				src={user.imageUrl}
// 				alt={"Photo of " + user.name}
// 				style={{
// 					width: user.imageSize,
// 					height: user.imageSize,
// 				}}
// 			/>
// 		</>
// 	);
// }

// const products = [
// 	{ title: "Cabbage", isFruit: false, id: 1 },
// 	{ title: "Garlic", isFruit: false, id: 2 },
// 	{ title: "Apple", isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
// 	const listItems = products.map((product) => (
// 		<li
// 			key={product.id}
// 			style={{
// 				color: product.isFruit ? "blue" : "red",
// 			}}
// 		>
// 			{product.title}
// 		</li>
// 	));

// 	return <ul>{listItems}</ul>;
// }
