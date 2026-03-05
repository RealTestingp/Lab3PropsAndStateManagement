import { useState } from "react";
import ToDoList from "../app/ToDoList";

function App() {
	const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

	return (
		<main>
			<ToDoList tasks={tasks} />
		</main>
	);
}

export default App;
