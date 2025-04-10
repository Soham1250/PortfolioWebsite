# Setting Up GitHub Pages for Your Portfolio

Follow these steps to deploy your portfolio website using GitHub Pages:

## Step 1: Go to Your Repository Settings

1. Navigate to your GitHub repository: https://github.com/Soham1250/PortfolioWebsite
2. Click on the "Settings" tab near the top of the page

## Step 2: Configure GitHub Pages

1. In the left sidebar, click on "Pages"
2. Under "Source", select "Deploy from a branch"
3. Under "Branch", select "master" and "/(root)" folder
4. Click "Save"

## Step 3: Wait for Deployment

1. GitHub will start building and deploying your site
2. This process usually takes 1-2 minutes
3. Once complete, you'll see a message saying "Your site is published at https://soham1250.github.io/PortfolioWebsite/"

## Step 4: Access Your Live Portfolio

Your portfolio will be available at:
https://soham1250.github.io/PortfolioWebsite/

## Making Updates

Whenever you want to update your portfolio:

1. Make changes to your local files
2. Commit the changes: `git commit -m "Description of changes"`
3. Push to GitHub: `git push origin master`
4. GitHub Pages will automatically rebuild and deploy your site

## Custom Domain (Optional)

If you want to use a custom domain instead of github.io:

1. In the GitHub Pages settings, under "Custom domain", enter your domain
2. Add the appropriate DNS records with your domain registrar
3. Check "Enforce HTTPS" for secure connections

Enjoy your live portfolio website!
