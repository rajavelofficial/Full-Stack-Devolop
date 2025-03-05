// API URL
const api_url = "http://10.1.31.123:8080//1.json"; 
//http://127.0.0.1:8080/s2.js
// Function to fetch employee data
async function getEmployeeData() {
    try {
        // Show the loading spinner
        document.getElementById('loading').style.display = 'block';

        // Fetch data from the API
        const response = await fetch(api_url);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        // Parse the JSON data
        const data = await response.json();
        
        // Get the table body where we will insert employee rows
        const tableBody = document.querySelector('#employees tbody');

        // Loop through the fetched data and populate the table
        data.forEach(employee => {
            const row = document.createElement('tr');

            // Create and append table cells for each employee attribute
            row.innerHTML = `
                <td>${employee.name}</td>
                <td>${employee.role}</td>
                <td>${employee.email}</td>
                <td>${employee.phone}</td>
            `;

            // Append the row to the table body
            tableBody.appendChild(row);
        });

        // Hide the loading spinner once the data is loaded
        document.getElementById('loading').style.display = 'none';

    } catch (error) {
        console.error('Error fetching data:', error);
        // Hide the loading spinner if there's an error
        document.getElementById('loading').style.display = 'none';
    }
}

// Call the function to fetch employee data
getEmployeeData();