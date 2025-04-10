# Google Sheets Integration Setup Guide

Follow these steps to connect your portfolio contact form to your Google Sheet.

## Step 1: Create and Deploy the Google Apps Script

1. Go to your Google Sheet: [https://docs.google.com/spreadsheets/d/1T2cWiOsVJq2hJ6nk_WaL5jFqWNdypnD5DwEdWbQeRqg/edit](https://docs.google.com/spreadsheets/d/1T2cWiOsVJq2hJ6nk_WaL5jFqWNdypnD5DwEdWbQeRqg/edit)

2. Click on **Extensions** > **Apps Script**

3. Delete any code in the editor and paste the following code:

```javascript
function doGet(e) {
  return HtmlService.createHtmlOutput("The script is running correctly, but this service only accepts POST requests.");
}

function doPost(e) {
  try {
    // Get the spreadsheet by ID
    var ss = SpreadsheetApp.openById("1T2cWiOsVJq2hJ6nk_WaL5jFqWNdypnD5DwEdWbQeRqg");
    var sheet = ss.getSheetByName("Sheet1") || ss.getSheets()[0];
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Name", "Email", "Subject", "Message"]);
    }
    
    // Get form data
    var name = e.parameter.name || "No Name";
    var email = e.parameter.email || "No Email";
    var subject = e.parameter.subject || "No Subject";
    var message = e.parameter.message || "No Message";
    
    // Add data to sheet
    sheet.appendRow([name, email, subject, message]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      "result": "success",
      "message": "Data added to spreadsheet"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      "result": "error",
      "error": error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click on **Save** and name your project (e.g., "Portfolio Contact Form")

5. Click on **Deploy** > **New deployment**

6. Select **Web app** as the deployment type

7. Set the following options:
   - Description: "Portfolio Contact Form"
   - Execute as: "Me"
   - Who has access: "Anyone" (this allows your form to submit data without authentication)

8. Click **Deploy**

9. You'll be prompted to authorize the app. Click **Authorize** and follow the prompts.

10. After deployment, you'll get a URL that looks like:
    `https://script.google.com/macros/s/DEPLOYMENT_ID/exec`
    
    **Copy this URL** - you'll need it for the next step.

## Step 2: Update Your Website Code

1. Open `script.js` in your portfolio project

2. Find this line:
   ```javascript
   const scriptURL = 'https://script.google.com/macros/s/DEPLOY_ID_HERE/exec';
   ```

3. Replace `DEPLOY_ID_HERE` with the deployment ID from your URL
   - The deployment ID is the long string between `/s/` and `/exec` in your deployment URL

4. Save the file

## Step 3: Test Your Form

1. Open your portfolio website
2. Fill out the contact form with test data
3. Submit the form
4. Check your Google Sheet to verify that the data was added

## Troubleshooting

If your form submissions aren't showing up in your Google Sheet:

1. Check the browser console for any errors
2. Make sure you've authorized the Apps Script to access your Google Sheet
3. Verify that the deployment ID in your JavaScript is correct
4. Try deploying the script again and updating the URL

## Important Notes

- The form uses `mode: 'no-cors'` which means you won't get detailed success/error information in the console, but this is necessary to avoid CORS issues
- Your Google Sheet must remain at the same URL for this integration to continue working
- If you make changes to the Apps Script, you'll need to create a new deployment and update the URL in your JavaScript
