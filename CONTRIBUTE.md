# Contributing to My Portfolio Website

Thank you for considering contributing to my portfolio website! Your contributions are valuable and help make this project better. Below are some guidelines to help you get started.

## Table of Contents

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Submitting Pull Requests](#submitting-pull-requests)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Getting Started

To get started with contributing, follow these steps:

1. **Fork the repository**: Click on the "Fork" button at the top right of the repository page.
2. **Clone your fork**: 
    ```sh
    git clone https://github.com/<your-username>/<your-repo-name>.git
    ```
3. **Install dependencies**: Navigate to the project directory and run:
    ```sh
    npm install
    ```
4. **Start the development server**: 
    ```sh
    npm run dev
    ```
5. **Open your browser**: Visit `http://localhost:3000` to see the running application.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with the following information:
- **Description**: Provide a clear and concise description of the bug.
- **Steps to Reproduce**: Include the steps to reproduce the bug.
- **Expected Behavior**: Describe what you expected to happen.
- **Screenshots**: If applicable, add screenshots to help explain the problem.
- **Environment**: Mention your operating system, browser, and any other relevant environment details.

### Suggesting Enhancements

If you have a suggestion to improve the project, please open an issue with the following details:
- **Description**: Provide a clear and concise description of the enhancement.
- **Motivation**: Explain why this enhancement would be useful.
- **Additional Context**: Include any other context or screenshots about the feature request.

### Submitting Pull Requests

Follow these name convensions sending PRs:

**Name of the branch:**

`<reservedkeyword>/<feature/bugfix/hotfix/test/wip>/custom-name-of-the-branch`

for example:

azimov/feature/document-generation
fanning/fix/user-authentication
farrell/bugfix/fix-header-styling
hotfix/security-patch
fox/release/v2.0.1
gilbert/docs/T-654-update-readme 

**When you're ready to submit a pull request (PR), follow these steps:**

1. **Create a branch**: 
    ```sh
    git checkout -b feature/your-feature-name
    ```
2. **Make your changes**: Implement your changes in the new branch.
3. **Commit your changes**: 
    ```sh
    git commit -m 'feature: Add some feature'
    ```
4. **Push to the branch**: 
    ```sh
    git push origin feature/your-feature-name
    ```
5. **Open a pull request**: Go to the repository and click on "Compare & pull request".

Your pull request will be reviewed, and feedback may be provided to ensure the changes align with the project’s goals and guidelines.

## Code of Conduct

Please note that this project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

## License

By contributing to this project, you agree that your contributions will be licensed under the [MIT License](LICENSE).
