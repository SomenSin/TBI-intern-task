let information = [
    {
        "Student Name": "Salman Ahmed",
        Marks: "38%",
        Class: "3rd",
        Address: "India"
    },
    {
        "Student Name": "Riya Sharma",
        Marks: "85%",
        Class: "10th",
        Address: "123, ABC Colony, Delhi"
    },
    {
        "Student Name": "Rohan Patel",
        Marks: "70%",
        Class: "12th",
        Address: "456, XTY Street, Mumbai"
    },
    {
        "Student Name": "Priya Singh",
        Marks: "95%",
        Class: "8th",
        Address: "789, PQR Nagar, Bangalore"
    },
    {
        "Student Name": "Ankit Gupta",
        Marks: "60%",
        Class: "9th",
        Address: "101, LMN Road, Kolkata"
    },
    {
        "Student Name": "Neha Verma",
        Marks: "80%",
        Class: "11th",
        Address: "222, DEF Avenue, Chennai"
    },
    {
        "Student Name": "Manoj Kumar",
        Marks: "75%",
        Class: "10th",
        Address: "333, GHI Lane, Hyderabad"
    },
    {
        "Student Name": "Pooja Mishra",
        Marks: "88%",
        Class: "12th",
        Address: "444, STU Colony, Pune"
    },
    {
        "Student Name": "Rajesh Singhania",
        Marks: "92%",
        Class: "9th",
        Address: "555, VWX Street, Jaipur"
    },
    {
        "Student Name": "Sunita Jain",
        Marks: "78%",
        Class: "11th",
        Address: "779, ABC Nagar, Bangalore"
    },
    {
        "Student Name": "Jennifer Smith",
        Marks: "87%",
        Class: "10th Grade",
        Address: "999, PRL Street, Delhi"
    },
    {
        "Student Name": "Michael Johnson",
        Marks: "75%",
        Class: "9th Grade",
        Address: "307, LKP Vihar, Mumbai"
    },
    {
        "Student Name": "Priya Singh",
        Marks: "84%",
        Class: "10th Grade",
        Address: "666, RST Road, Ahmedabad"
    },
    {
        "Student Name": "Priya Singh",
        Marks: "65%",
        Class: "11th Grade",
        Address: "123 Maple Street, Anytown, USA"
    },
    {
        "Student Name": "Priya Singh",
        Marks: "91%",
        Class: "8th",
        Address: "456 Oak Avenue, Smallville"
    }
]

// Display student information in the database section
let insideDb = document.getElementsByClassName('inside-database')[0];

information.forEach(student => {
    // Create a div element for each student
    const divCrt = document.createElement('div');
    divCrt.classList.add('info');
    // Populate the div with student information
    divCrt.innerHTML = `
        <ul>
            <li>Student Name: <b>${student['Student Name']}</b></li>
            <li>Marks: <b>${student['Marks']}</b></li>
            <li>Class: <b>${student['Class']}</b></li>
            <li>Address: <b>${student['Address']}</b></li>
        </ul>`;
    // Append the div to the database section
    insideDb.append(divCrt);
});

// Search functionality
let srcBtn = document.getElementsByClassName('search-btn')[0];
srcBtn.addEventListener('click', () => {
    let searchVal = document.getElementsByClassName('search-input')[0].value.trim().toLowerCase();
    let divs = document.querySelectorAll('.info');

    divs.forEach(div => {
        // Extract student information from the div
        let studentName = div.querySelector('ul li:first-child b').innerText.toLowerCase();
        let marks = div.querySelector('ul li:nth-child(2) b').innerText.toLowerCase();
        let className = div.querySelector('ul li:nth-child(3) b').innerText.toLowerCase();
        let address = div.querySelector('ul li:nth-child(4) b').innerText.toLowerCase();

        // Check if the search value matches any part of the student's information
        let nameMatch = studentName.includes(searchVal);
        let marksMatch = marks.includes(searchVal);
        let classMatch = className.includes(searchVal);
        let addressMatch = address.includes(searchVal);

        // Show or hide the div based on the search match
        if (nameMatch || marksMatch || classMatch || addressMatch) {
            div.style.display = 'block'; // Show the div if match found
        } else {
            div.style.display = 'none'; // Hide the div if no match found
        }
    });
});
