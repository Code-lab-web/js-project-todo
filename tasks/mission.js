// mission.js

// Function to define a mission
function createMission(title, description, dueDate, category, project) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        completed: false,
        createdAt: new Date(),
        category: category,
        project: project
    };
}

// Function to mark a mission as completed
function completeMission(mission) {
    mission.completed = true;
}

// Function to save missions to local storage
function saveMissions(missions) {
    localStorage.setItem('missions', JSON.stringify(missions));
}

// Function to load missions from local storage
function loadMissions() {
    const missions = localStorage.getItem('missions');
    return missions ? JSON.parse(missions) : [];
}

// Function to complete all missions
function completeAllMissions(missions) {
    missions.forEach(mission => mission.completed = true);
    saveMissions(missions);
}

// Function to filter missions
function filterMissions(missions, filter) {
    switch (filter) {
        case 'completed':
            return missions.filter(mission => mission.completed);
        case 'uncompleted':
            return missions.filter(mission => !mission.completed);
        default:
            return missions;
    }
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Example usage
let missions = loadMissions();

if (missions.length === 0) {
    // Add some initial missions if none are stored
    missions = [
        createMission("Chef", "Prepare a delicious meal", "2025-12-31", "Housework", "Kitchen"),
        createMission("Housekeeping", "Clean the residence", "2025-12-31", "Housework", "General"),
        createMission("purchasing/hr", "", "2025-12-31", "Work", "Admin"),
        createMission("Nanny", "Take care of the children", "2025-12-31", "Family", "Kids"),
        createMission("Gardening", "Maintain the garden", "2025-12-31", "Housework", "Yard"),
    ];
    saveMissions(missions);
}


console.log("Missions loaded from local storage:", missions);

// Example of completing a mission
if (missions.length > 0) {
    console.log("Before completing:", missions[0]);
    completeMission(missions[0]);
    saveMissions(missions);
    console.log("After completing:", missions[0]);
}

// Example of completing all missions
// completeAllMissions(missions);
// console.log("After completing all:", missions);


export { createMission, completeMission, saveMissions, loadMissions, completeAllMissions, filterMissions, toggleDarkMode };