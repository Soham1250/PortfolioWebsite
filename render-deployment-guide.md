# Deploying Your Portfolio Website on Render

This guide will walk you through deploying your portfolio website on Render.com, which offers free hosting for static websites.

## Step 1: Create a Render Account

1. Go to [Render.com](https://render.com/)
2. Sign up for a free account (you can sign up with your GitHub account for easier integration)

## Step 2: Connect Your GitHub Repository

1. After logging in to Render, click on the "New +" button in the dashboard
2. Select "Static Site" from the options
3. Connect your GitHub account if you haven't already
4. Select the repository "Soham1250/PortfolioWebsite"

## Step 3: Configure Your Static Site

1. Fill in the following details:
   - **Name**: portfolio-soham (or any name you prefer)
   - **Branch**: master
   - **Build Command**: Leave blank (not needed for a simple HTML/CSS/JS site)
   - **Publish Directory**: . (just a dot, indicating the root directory)

2. Under "Advanced" settings, you can add environment variables if needed (not required for your portfolio)

3. Click "Create Static Site"

## Step 4: Wait for Deployment

1. Render will start building and deploying your site
2. This process usually takes 1-2 minutes
3. Once complete, you'll see a success message and a URL for your site

## Step 5: Access Your Live Portfolio

Your portfolio will be available at a URL like:
https://portfolio-soham.onrender.com

## Custom Domain (Optional)

If you want to use a custom domain:

1. In your Render dashboard, select your static site
2. Go to the "Settings" tab
3. Scroll down to "Custom Domains"
4. Click "Add Custom Domain" and follow the instructions

## Automatic Deployments

One of the benefits of Render is automatic deployments:

1. Whenever you push changes to your GitHub repository
2. Render will automatically rebuild and deploy your site
3. No manual steps required!

## Troubleshooting

If you encounter any issues:

1. Check the "Logs" tab in your Render dashboard
2. Ensure your repository is public or that you've granted Render access to it
3. Verify that all your assets (images, CSS, JS) use relative paths

Enjoy your live portfolio website on Render!
