//tabla users.html

const userCollection = [
    { name: "Usuario 1", email: "usuario1@example.com", _id: 1 },
    { name: "Usuario 2", email: "usuario2@example.com", _id: 2 },
    // Add more data as needed
];

// Function to render user data
function renderUsers() {
    const userTableBody = document.getElementById('userTableBody');
    userTableBody.innerHTML = ''; // Clear existing content

    userCollection.forEach((user) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="item">${user.name}</td>
            <td class="item">${user.email}</td>
            <td>
                <button>edit</button>
                <button class="delete-button" data-id="${user._id}">delete</button>
            </td>
        `;
        userTableBody.appendChild(row);
    });
}

// Initial rendering
renderUsers();
