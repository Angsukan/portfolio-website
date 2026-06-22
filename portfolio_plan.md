# Implementation Plan: Data Analyst Portfolio Website

This document outlines the step-by-step plan to build and deploy a premium, dark-themed portfolio website for **Angsukan Chom-Insee** using vanilla HTML, CSS, and JavaScript.

---

## 🎨 Design & Theme Specifications
*   **Typography**: `JetBrains Mono` from Google Fonts for a sleek, developer/analyst aesthetic.
*   **Color Palette**: Sleek dark mode with cyber/neon accents:
    *   *Background*: `#0a0c10` (deep space black)
    *   *Card/Container Background*: `#161b22` (GitHub-style dark gray) with subtle glassmorphism (`backdrop-filter`)
    *   *Accent Primary*: `#00f2fe` (cyan neon gradient)
    *   *Accent Secondary*: `#4facfe` (blue gradient)
    *   *Text*: `#e6edf3` (high contrast white) and `#8b949e` (muted gray)
*   **Animations**: Smooth fade-in transitions, glowing hover effects, and interactive SVG-based micro-visualizations.

---

## 📂 Project Structure
We will create these files in the root of your workspace:
*   `index.html` - Semantic HTML5 layout (Hero, About, Projects, Interactive Dashboard Widget, Contact).
*   `style.css` - CSS Variables, JetBrains Mono configuration, custom styles, and responsive layout grid.
*   `script.js` - Dynamic project filtering, interactive dashboard charts, and smooth scroll utilities.

---

## 🛠️ Step-by-Step Implementation

### Step 1: Initialize Core Styles (`style.css`)
We will write the CSS foundations, defining:
*   Import for `JetBrains Mono` font.
*   Color tokens, layout configurations, and utility styles.
*   Interactive classes (hover glows, button gradients, glassmorphism card styling).

### Step 2: Build the HTML Structure (`index.html`)
We will create a single-page dashboard layout:
*   **Header / Navigation**: Fixed navbar with glowing links and scroll indicators.
*   **Hero Section**: 
    *   Headline: `Angsukan Chom-Insee`
    *   Role: `Data Analyst`
    *   Visual: An interactive animated SVG network diagram or mock terminal executing SQL/Python analysis scripts.
*   **Interactive Dashboard Widget**: A small interactive widget (using SVGs/CSS) showing "Real-Time Stats" (e.g., total rows processed, model accuracy, SQL queries optimized) to show off analysis skills.
*   **Projects Grid (3 Projects)**:
    1.  *E-Commerce Customer Segmentation* (RFM Analysis & K-Means)
    2.  *Automated ETL Pipeline & Live Dashboard* (Python, SQL, PowerBI/Tableau)
    3.  *Financial Market Forecasting* (R, Time Series Analysis)
*   **Contact Section**: Direct links to LinkedIn, GitHub, Email, and a stylized contact form.

### Step 3: Add Interactivity (`script.js`)
We will implement:
*   **Project Filter/Toggle**: Seamlessly filter projects by tools (Python, SQL, R, Tableau, PowerBI).
*   **Interactive Terminal / Chart Widget**: Make the dashboard metrics respond dynamically to user clicks.
*   **Form Submission Feedback**: Simple simulated form submissions with custom success notifications.

### Step 4: GitHub Pages Deployment
Once the files are fully implemented and validated:
1.  **Initialize Git**: Initialize a git repository in your workspace root.
2.  **Commit Code**: Add all project files and commit.
3.  **Create Repository**: Create a new public repository on GitHub (e.g., `angsukan-portfolio`).
4.  **Push Code**: Add the remote and push to the `main` branch.
5.  **Enable GitHub Pages**:
    *   Go to Repository Settings -> **Pages**.
    *   Under "Build and deployment", select **Deploy from a branch**.
    *   Set the branch to `main` (and folder to `/ (root)`).
    *   Click **Save**.
6.  Your site will be live at `https://<github-username>.github.io/<repo-name>/`!
