// Initialize an empty queue
let queue = [];

// Function to enqueue an item
function enqueue() {
    const value = prompt("Enter the value to enqueue:");
    if (value) {
        queue.push(value); // Add value to the queue
        alert(`Enqueued: ${value}`);
        updateOutput();
    }
}

// Function to dequeue an item
function dequeue() {
    if (queue.length > 0) {
        const removed = queue.shift(); // Remove the first value in the queue
        alert(`Dequeued: ${removed}`);
        updateOutput();
    } else {
        alert("The queue is empty!");
    }
}

// Function to update the output display
function updateOutput() {
    const output = document.getElementById('output');
    if (queue.length > 0) {
        output.textContent = "Queue: " + queue.join(" → ");
    } else {
        output.textContent = "The queue is empty!";
    }
}

// Function to show or hide the queue menu (optional)
function showMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}
