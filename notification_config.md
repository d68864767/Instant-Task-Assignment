# Notification Configuration

This document provides a step-by-step guide on how to configure your Zapier action to send a notification to the assigned team member when a new task is created.

## Step 1: Choose Your Notification Tool

1. **Choose App & Event:** In the "Choose App & Event" section, search for your notification tool (e.g., Email by Zapier, Slack, Microsoft Teams) and select it. Then, choose "Send Outbound Message" (or equivalent) as the action event and click "Continue".

2. **Choose Account:** In the "Choose Account" section, select the account you want to use for your notification tool. If you haven't connected your account yet, click on "Add a New Account" and follow the prompts. Once you've selected an account, click "Continue".

## Step 2: Set Up Your Action

1. **Set Up Action:** In the "Set Up Action" section, you'll need to specify the details of the notification. This will vary depending on your notification tool, but generally, you'll need to specify the following:

    - **To:** The recipient of the notification. This should be the team member assigned to the new task. You can use the output of the `assignTask` function from the `assignment_logic.js` file.
    - **Message:** The content of the notification. This should include the title and description of the new task, which you can get from the output of the task creation action.
    - **Subject (for emails):** The subject of the email. This could be something like "New Task Assigned to You".

2. **Continue:** Once you've set up the action, click "Continue".

## Step 3: Test Your Action

1. **Test Action:** In the "Test Action" section, click "Test & Continue". Zapier will send a notification with the details you specified. Check your notification tool to make sure the notification was sent correctly.

2. **Turn on Zap:** If the test was successful, click "Turn on Zap". Your Zap is now ready to send a notification whenever a new task is assigned.

Remember to refer to the `button_config.md`, `zapier_trigger_config.md`, `task_creation_config.md`, and `assignment_logic.js` files to set up the button, trigger, task creation, and assignment processes. Also, remember to test your Zap thoroughly to ensure that the notification process works as expected.
