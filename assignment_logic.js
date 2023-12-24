```javascript
// Array of team members
let teamMembers = ['Alice', 'Bob', 'Charlie', 'Dave'];

// Index of the next team member to be assigned a task
let nextAssigneeIndex = 0;

/**
 * Assigns the next task to a team member.
 *
 * @param {string} task - The task to be assigned.
 * @returns {string} - The name of the team member who was assigned the task.
 */
function assignTask(task) {
    // Assign the task to the next team member
    let assignee = teamMembers[nextAssigneeIndex];
    console.log(`Assigned task "${task}" to ${assignee}`);

    // Update the index of the next assignee
    nextAssigneeIndex = (nextAssigneeIndex + 1) % teamMembers.length;

    return assignee;
}

// Example usage:
let task = 'New Task - ' + new Date().toISOString();
assignTask(task);
```
