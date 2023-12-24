# Zapier Trigger Configuration

This document provides a step-by-step guide on how to configure your Zapier trigger to initiate the automation when your IoT button or virtual button is pressed.

## Step 1: Create a New Zap

1. **Log in to Zapier:** Visit [Zapier](https://zapier.com/) and log in to your account.

2. **Start a New Zap:** Click on the "Make a Zap" button.

3. **Name Your Zap:** Give your Zap a descriptive name like "Instant Task Assignment".

## Step 2: Set Up Your Trigger

1. **Choose App & Event:** In the "Choose App & Event" section, search for "Webhooks by Zapier" and select it. Then, choose "Catch Hook" as the trigger event and click "Continue".

2. **Set Up Trigger:** In the "Set Up Trigger" section, you don't need to enter anything. Just click "Continue".

3. **Test Trigger:** In the "Test Trigger" section, Zapier will provide you with a custom webhook URL. Copy this URL and use it to configure your IoT button or virtual button as described in the `button_config.md` file. Once you've done that, press your button to send a test request to the webhook URL. Then, click "Test Trigger" in Zapier. If the test is successful, you'll see a success message. Click "Continue".

## Step 3: Set Up Your Action

The next steps will depend on your project management tool and the specifics of your task creation and assignment process. Refer to the `task_creation_config.md`, `assignment_logic.js`, and `notification_config.md` files for more information.

Remember to test your Zap thoroughly to ensure that the trigger works correctly and initiates the desired actions. You can do this by pressing your button and checking whether the expected task is created and assigned in your project management tool.

