import {useState, useEffect} from "react";

// Components
import Heading from '../components/Heading';
import Button from '../components/Button';

// Material UI
import RocketIcon from '@mui/icons-material/Rocket';

// Styles
import '../assets/styles/App.scss';
import '../assets/styles/components/ToDoList.scss';

type Task =  {
  text: string,
  done: boolean,
}

function ToDoList() {
    const [tasks, setTasks] = useState<Task[]>([]);
	const [newTask, setNewTask] = useState('');
	
	// Load tasks from localStorage when the component mounts.
	useEffect(() => {
		const saved = localStorage.getItem('todo-list-tasks');
		if (saved) {
			try {
				setTasks(JSON.parse(saved));
			} catch {
				console.warn('Could not parse saved tasks.');
			}
		}
	}, []);

	// Save tasks to localStorage whenever they change.
	useEffect(() => {
		localStorage.setItem('todo-list-tasks', JSON.stringify(tasks));
	}, [tasks]);

	// Add a new task.
	const addTask = () => {
		const trimmed = newTask.trim();
		if (!trimmed) return;
		setTasks([...tasks, { text: trimmed, done: false }]);
		setNewTask('');
	};

	// Toggle a task's completion.
	const toggleTask = (index: number) => {
		const updated = [...tasks];
		updated[index].done = !updated[index].done;
		setTasks(updated);
	};

	// Remove a task.
	const removeTask = (index: number) => {
		setTasks(tasks.filter((_, i) => i !== index));
	};

	return (
        <>
            <section className="todo-list-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Heading 
                                title="The To-Do List" 
                                subheading="The To-Do List renders a dynamic To-Do list where users can add and delete tasks. It uses localStorage to save tasks without using the database for demonstration purposes." 
                            />
                            <div className="todo-app mt-4">
                                <h3>What's next?</h3>

                                {/* Input and Add button */}
                                <div className="todo-input-wrapper">
                                    <input 
                                        type="text"
                                        value={newTask}
                                        onChange={(e) => setNewTask(e.target.value)}
                                        placeholder="Add a new task..."
                                    />
                                    <Button onClick={addTask} text="Add Task"/>
                                </div>

                                {/* Task list */}
                                { tasks.length > 0 &&
                                    <ul className="todo-list">
                                        {tasks.map((task, i) => (
                                            <li key={i}>
                                                <span
                                                    onClick={() => toggleTask(i)}
                                                    onKeyDown={e => e.key === 'Enter' && toggleTask(i)}
                                                    style={{ 
                                                        textDecoration: task.done ? "line-through" : "none",
                                                    }}
                                                    tabIndex={0}
                                                >
                                                    {task.text}
                                                </span>
                                                <Button onClick={() => removeTask(i)} text="Delete"/>
                                            </li>
                                        ))}
                                    </ul>
                                }

                                {/* Hint */}
                                <p className="hint-text">Click on a task to cross it off.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
	)
}

export default ToDoList;