# Valentine's Exchange - Google Sheets Setup Instructions

## Step 1: Create a Google Sheet

1. Go to https://sheets.google.com
2. Create a new blank spreadsheet
3. Name it "Spark No. 9 Valentines"

## Step 2: Set up Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any code in the editor
3. Copy and paste the entire contents of `google-apps-script.js` into the editor
4. Click the save icon (💾) and name your project "Valentine Cards API"

## Step 3: Deploy as Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: Valentine Cards API
   - **Execute as**: Me
   - **Who has access**: Anyone
5. Click **Deploy**
6. You may need to authorize the app:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [project name] (unsafe)**
   - Click **Allow**
7. Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/...../exec`)

## Step 4: Update the HTML File

1. Open `valentines-exchange.html` in a text editor
2. Find this line near the top of the `<script>` section:
   ```javascript
   const SCRIPT_URL = 'YOUR_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_SCRIPT_URL_HERE'` with your Web app URL in quotes:
   ```javascript
   const SCRIPT_URL = 'https://script.google.com/macros/s/...../exec';
   ```
4. Save the file

## Step 5: Upload to GitHub Pages

1. Create a new repository on GitHub
2. Upload `valentines-exchange.html` to the repository
3. Go to **Settings** → **Pages**
4. Under "Source", select **main** branch
5. Click **Save**
6. Your site will be live at: `https://[your-username].github.io/[repo-name]/valentines-exchange.html`

## Testing

1. Open your GitHub Pages URL
2. Try sending a test Valentine card
3. Check your Google Sheet - you should see a new row with the card data
4. Refresh the page - the card should appear on the Valentine's Wall

## Troubleshooting

- **Cards not saving**: Make sure your Google Apps Script is deployed with "Anyone" access
- **Cards not loading**: Check the browser console (F12) for errors
- **CORS errors**: This is normal with `no-cors` mode - cards will still save, just wait a moment and refresh

## Notes

- Cards sync every 30 seconds automatically
- All card data is stored in your Google Sheet
- You can view, edit, or delete cards directly in the spreadsheet
