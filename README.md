# GitHub User Data Fetcher

This React component fetches data of GitHub users from the GitHub API and displays their information including avatar, username, number of followers, and number of repositories.

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/github-user-data-fetcher.git

<Strong> Navigate to the project directory</Strong> 
cd github-user-data-fetcher

3. Install dependencies
npm install

4. Start the development server
npm start

Usage
The FetchData component is responsible for fetching and displaying user data. It makes use of the GitHub API to retrieve user information.

Implementation Details

The component uses React hooks (useState and useEffect) to manage state and perform side effects respectively.
It fetches user data from the GitHub API endpoint https://api.github.com/users.
The component includes error handling to manage failed API requests.
It displays a loading message while data is being fetched.
Personal Access Token
To prevent API rate limits and ensure uninterrupted access to GitHub's API, a personal access token is used. This token should be kept secure and not shared publicly. To generate a personal access token:

Go to your GitHub account settings.

Navigate to Developer settings > Personal access tokens.
Generate a new token with appropriate permissions (e.g., user, read:user, repo) for accessing the GitHub API.
Copy the generated token and use it in the FetchData component by replacing the token variable with your personal access token.
Credits
This project is created by Your Name.

License
This project is licensed under the MIT License - see the LICENSE file for details.


