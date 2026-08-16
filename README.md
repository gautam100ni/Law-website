# Akhawat Law Firm Website

## Overview
This project is a premium law firm website for Akhawat Law Firm, designed to provide legal services and information to clients in a professional and accessible manner. The website features a clean and elegant design, focusing on user experience and accessibility.

## Project Structure
The project is organized into the following main directories and files:

- **public/assets**: Contains all image assets used throughout the website.
- **src/components**: Contains reusable React components for various sections of the website.
- **src/pages**: Contains the main pages of the website, each representing a different section.
- **src/data**: Contains data files for practice areas and team members.
- **src/App.jsx**: The main application file that sets up routing and renders components.
- **src/main.jsx**: The entry point for the React application.
- **src/index.css**: Contains global styles and Tailwind CSS configurations.
- **package.json**: Lists project dependencies and scripts.
- **vite.config.js**: Configuration for Vite.
- **tailwind.config.js**: Configuration for Tailwind CSS.
- **postcss.config.js**: Configuration for PostCSS.
- **index.html**: The main HTML file for the application.
- **.env.example**: Template for environment variables.
- **.gitignore**: Specifies files to be ignored by Git.
- **README.md**: Documentation for the project.

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd akhawat-law-firm
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the website.

## Usage
The website includes the following key features:

- **Home Page**: Displays the hero section, key statistics, practice areas, and a call to action for consultations.
- **About Page**: Provides detailed information about the law firm, including its purpose, vision, and core values.
- **Services Page**: Lists all services offered by the law firm with detailed descriptions.
- **Team Page**: Showcases the law firm's team members with their names and titles.
- **Contact Page**: Contains contact information and a consultation form for potential clients.
- **Privacy Policy**: Outlines the privacy policy of the law firm.
- **Terms & Conditions**: Contains the terms and conditions for using the website.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Attachment upload
The contact form uploads optional PDF/JPG/PNG/DOC/DOCX files to the PHP endpoint in `api/` and sends the returned secure download link in WhatsApp.
