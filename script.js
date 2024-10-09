// Fetching and displaying the rules
fetch('./rules.json')
    .then(response => response.json())
    .then(data => {
        const rulesContainer = document.getElementById('rules-container');
        rulesContainer.innerHTML = '';  // Clear initial loading message

        data.forEach(section => {
            const title = document.createElement('h2');
            title.textContent = section.title;
            rulesContainer.appendChild(title);

            const list = document.createElement('ul');
            section.rules.forEach(rule => {
                const listItem = document.createElement('li');
                listItem.textContent = rule;
                list.appendChild(listItem);
            });
            rulesContainer.appendChild(list);
        });
    })
    .catch(error => {
        document.getElementById('rules-container').textContent = 'Error loading rules.';
        console.error('Error fetching JSON:', error);
    });

// Fetching and displaying the roadmap
fetch('./roadmap.json')
    .then(response => response.json())
    .then(data => {
        const columns = {
            "To Do": document.getElementById('todo'),
            "In Progress": document.getElementById('in-progress'),
            "Completed": document.getElementById('completed')
        };

        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.textContent = item.title;

            // Append card to the corresponding column
            columns[item.status].appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error fetching roadmap:', error);
    });

// Feedback form submission handling
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedback = event.target.querySelector('textarea').value;

    if (feedback.trim()) {
        alert('Thank you for your feedback!');
        event.target.reset();
    }
});
