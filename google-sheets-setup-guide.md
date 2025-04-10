# Setting Up Google Sheets Integration for Your Portfolio Contact Form

This guide will help you set up a Google Sheets integration to collect and store contact information from your portfolio website.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name your spreadsheet "Portfolio Contacts" or any name you prefer
3. Rename the first sheet to "Contacts" (this is important as our script looks for this sheet name)
4. Add the following headers to the first row:
   - Timestamp
   - Name
   - Email
   - Subject
   - Message

## Step 2: Set Up Google Apps Script

1. In your Google Sheet, click on "Extensions" > "Apps Script"
2. Delete any code in the editor and paste the code from the `google-sheets-script.txt` file
3. Click on "Save" and name your project (e.g., "Portfolio Contact Form")
4. Click on "Deploy" > "New deployment"
5. Select "Web app" as the deployment type
6. Set the following options:
   - Description: "Portfolio Contact Form"
   - Execute as: "Me"
   - Who has access: "Anyone" (this allows your form to submit data without authentication)
7. Click "Deploy"
8. Copy the Web app URL that is provided after deployment

## Step 3: Update Your Website Code

1. Open `script.js` in your portfolio project
2. Find the line that says `const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';`
3. Replace `'YOUR_GOOGLE_SCRIPT_URL'` with the URL you copied from the Google Apps Script deployment
4. Save the file

## Step 4: Test Your Form

1. Open your portfolio website
2. Fill out the contact form with test data
3. Submit the form
4. Check your Google Sheet to verify that the data was added

## Troubleshooting

If your form submissions aren't showing up in your Google Sheet:

1. Check the browser console for any errors
2. Verify that the Google Apps Script URL is correct
3. Make sure your Google Sheet has a sheet named "Contacts"
4. Check that your Google Apps Script is deployed as a web app with "Anyone" access

## Security Considerations

- This setup allows anyone to submit data to your Google Sheet
- The data is transmitted over HTTPS, but it's not encrypted beyond that
- Consider adding CAPTCHA or other anti-spam measures if you receive unwanted submissions
