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

P.S. if you wanna get videos uploaded and integrated in the project, you should configure your cloudinary connection with the project and populate `.env.example`. 
     Another thing to mention that this project uses react-email for email sending functionality,so you might wanna cofigure your `RESEND_API_KEY` if you are planning to work with it as well.

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

**BRANCHES**

Main is the production branch where the latest version and the source for deployed app are.
To add a desired feature to the project you should follow the next steps:

**BEFORE WE START**

Follow these branch-naming conventions:

**Name of the branch:**

`<reservedkeyword>/<feature/bugfix/hotfix/test/wip>/custom-name-of-the-branch`

**for example:**

- azimov/feature/document-generation
- fanning/fix/user-authentication
- farrell/bugfix/fix-header-styling
- hotfix/security-patch
- fox/release/v2.0.1
- gilbert/docs/T-654-update-readme 

**When you're ready to implement your changes, follow these steps:**

1. **Create a fork**
- Create a fork from this repository selecting (Maksym Azimov)[https://github.com/bbyc4kes] as the owner and then open your forked repo in your profile 
- Clone repo in your local workspace and start implementing features/fixing bugs/writinf documentation etc.

2. **Create a branch**: 
    ```sh
    git checkout -b azimov/feature/your-feature-name
    ```
3. **Make your changes**: Implement your changes in the new branch.
4. **Commit your changes**: 
    ```sh
    git commit -m 'feature: Add some feature'
    ```
5. **Push to the branch**: 
    ```sh
    git push origin azimov/feature/your-feature-name
    ```
6. **Open a pull request**: Go to the repository and click on "Compare & pull request".

After the submission of your PR, if it's follows our convensions an Owner/Authorized admins will have a look at your PR and accept/reject with given feedback. You can expect to get a valuable feedback and more activity on your profile from an owner of this project [Maksym Azimov](https://github.com/bbyc4kes) and/or admins reviewing your PR :)

## Code of Conduct

Please note that this project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

## License

By contributing to this project, you agree that your contributions will be licensed under the [MIT License](LICENSE).
