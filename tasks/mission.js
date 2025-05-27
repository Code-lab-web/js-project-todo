// mission.js

// Function to define a mission
function createMission(title, description, dueDate) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        completed: false,
    };
}

// Function to mark a mission as completed
// Duplicate function removed

// Example usage
const mission1 = createMission(
    "Chef",
    "Prepare a delicious meal",
    "2025-12-31"
);

console.log("Before completing:", mission1);
completeMission(mission1);
console.log("After completing:", mission1);

export { createMission, completeMission };

function completeMission(mission) {
    mission.completed = true;
}

// Example usage
const MISSION2 = createMission(
    "Housekeeping",
    "Clean the residence",
    "2025-12-31"
);

const MISSION3 = createMission(
    "purchasing/hr",
    "",
    "2025-12-31"
);

const MISSION4 = createMission(
    "Nanny",
    "Take care of the children",
    "2025-12-31"
);

const UNUSED_MISSION5 = createMission(
    "Gardening",
    "Maintain the garden",
    "2025-12-31"
);

const MISSION6 = createMission(
    "Chef",
    "Prepare a delicious meal",
    "2025-12-31"
);
