# Task Creation Configuration

This document provides a step-by-step guide on how to configure your Zapier action to create a new task in your project management tool when your IoT button or virtual button is pressed.

## Step 1: Choose Your Project Management Tool

1. **Choose App & Event:** In the "Choose App & Event" section, search for your project management tool (e.g., Trello, Asana, JIRA) and select it. Then, choose "Create Task" (or equivalent) as the action event and click "Continue".

2. **Choose Account:** In the "Choose Account" section, select the account you want to use for your project management tool. If you haven't connected your account yet, click on "Add a New Account" and follow the prompts. Once you've selected an account, click "Continue".

## Step 2: Set Up Your Action

1. **Set Up Action:** In the "Set Up Action" section, you'll need to specify the details of the new task. This will vary depending on your project management tool, but generally, you'll need to specify the following:

    - **Project/Board:** The project or board where the new task should be created.
    - **Title:** The title of the new task. You can use a predefined template or title, like "New Task - [Date/Time]". To insert the current date and time, click on the "+" icon on the right side of the field, search for "Formatter by Zapier", and choose "Date & Time". Then, choose "Format" as the action event, set "Input" to "Now", and set "To Format" to your preferred date and time format.
    - **Description:** The description of the new task. You can leave this blank or use a predefined template.
    - **Assignee:** The person who should be assigned to the new task. You can leave this blank for now, as we'll set up the assignment logic in the `assignment_logic.js` file.

2. **Continue:** Once you've set up the action, click "Continue".

## Step 3: Test Your Action

1. **Test Action:** In the "Test Action" section, click "Test & Continue". Zapier will create a new task in your project management tool with the details you specified. Check your project management tool to make sure the task was created correctly.

2. **Turn on Zap:** If the test was successful, click "Turn on Zap". Your Zap is now ready to create a new task whenever your button is pressed.

Remember to refer to the `assignment_logic.js` and `notification_config.md` files to set up the task assignment and notification processes. Also, remember to test your Zap thoroughly to ensure that the task creation process works as expected.
