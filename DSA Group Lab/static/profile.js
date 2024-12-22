// JavaScript for handling profile click events and displaying modals with member details

// Member data object containing name, age, birthday, and motto
const members = {
    "Ronald": {
        name: "De Villa, Ronald Jr.",
        role: "Leader",
        age: 21,
        birthday: "March 15, 2002",
        motto: "Lead with purpose and passion."
    },
    "Andrew": {
        name: "Bonifacio, Andrew Dominic",
        age: 22,
        birthday: "July 8, 2001",
        motto: "Innovation is the key to success."
    },
    "Jefferson": {
        name: "Arbis, Jefferson",
        age: 20,
        birthday: "May 12, 2003",
        motto: "Never stop learning."
    },
    "Jericho": {
        name: "Villanueva, Jericho",
        age: 23,
        birthday: "September 23, 2000",
        motto: "Work hard, dream big."
    },
    "Arjun": {
        name: "Jalotjot, Arjun N",
        age: 21,
        birthday: "November 30, 2002",
        motto: "Focus determines reality."
    },
    "John": {
        name: "Velasco, John Michael Luis",
        age: 22,
        birthday: "April 20, 2001",
        motto: "Strive for greatness."
    },
    "Yasser": {
        name: "Esguerra, Yasser Trevor",
        age: 20,
        birthday: "June 5, 2003",
        motto: "Believe and achieve."
    }
};

// Function to create and display modal
function showModal(memberKey) {
    const member = members[memberKey];

    // Create modal container
    const modal = document.createElement("div");
    modal.classList.add("modal");

    // Create modal content
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>${member.role ? `<strong>${member.role}:</strong> ` : ""}${member.name}</h2>
            <p><strong>Age:</strong> ${member.age}</p>
            <p><strong>Birthday:</strong> ${member.birthday}</p>
            <p><strong>Motto:</strong> "${member.motto}"</p>
        </div>
    `;

    // Append modal to body
    document.body.appendChild(modal);

    // Show modal
    modal.style.display = "flex";

    // Close modal on button click
    modal.querySelector(".close-btn").addEventListener("click", () => {
        modal.remove();
    });

    // Close modal on outside click
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.remove();
        }
    });
}

// Add event listeners to member profiles
const profileElements = document.querySelectorAll(".member img");
profileElements.forEach((img) => {
    const memberKey = img.alt;
    img.addEventListener("click", () => showModal(memberKey));
});
