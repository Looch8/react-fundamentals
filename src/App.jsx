import "./App.css";

function MyButton() {
	return <button> I&apos;m a button</button>;
}

function App() {
	return (
		<>
			<h1>Welcome to my app</h1>
			<MyButton />
		</>
	);
}

export default App;