# Phase 1 CI/CD Pipeline

## Introduction

The goal of this phase is to create a vetting phase of the CI/CD pipeline that ensures code quality and automates the testing and documentation generation process. This is achieved through the use of linting, code quality tools, human review, unit testing, and documentation generation tools.

## Pipeline Overview

The pipeline is built on Github Actions and consists of the following steps:

### Linting and Code Style Enforcement:

This step checks for code style consistency and formatting issues using ESLint. If there are any issues, the pipeline fails and provides feedback to the developer. <br>

We chose to use this as Haoyang has experience with it and he recommended it. ESLint is an open source project that helps you find and fix problems with JavaScript code. In addition, it statically analyzes code to quickly find problems, and it is built into text editors and runs ESLint as part of our project’s continuous integration pipeline to find issues. After it finds the issues, it will fix problems automatically most of the time and be syntax-aware, which means we won’t face errors introduced by transitional find-and-repace algorithms. In addition, if we want, we can customize it. For example, pre-processs code, use custom parsers, and add rules besides ESLint’s built-in rules. The guidelines to use ESList can be found [here](https://eslint.org/docs/latest/). <br>

Installation Instructions:

-   (A) Install Node.js ready and built with SSL support.
-   (B) Install ESLint using command `npm init @eslint/config`. Then choose third option “To check syntax, find problems, and enforce code style”.
    ![Image](install_eslint1.png)
-   (C) Configure ESLint using command `npm init @eslint/config -- --config semistandard`
    ![Image](/admin/cipipeline/install_eslint2.png)
-   (D) Run ESLint on any file, such as yourfile.js using command `npx eslint yourfile.js`

Pros of Using ESLint: <br>
a. Rules Are Customizable. <br>
b. Provides Code consistency. <br>
c. Helps in Catching errors. <br>

Cons of Using ESLint: <br>
a. Not Always Correct. <br>
b. Gives False Positives. <br>
c. Doesn’t Fix Unused Variable. <br>

Some useful resources to use ESLint:

-   [Why I always use ESLint in my projects](https://youtu.be/ZuDIXV94Z1w)
-   [Use ESLint in Your Project](https://eslint.org/docs/latest/use/)
-   [ESLint Quickstart - find errors automatically](https://www.youtube.com/watch?v=qhuFviJn-es&ab_channel=freeCodeCamp.org)

### Code Quality Via Tool:

This step is vital in ensuring good software quality. To avoid repetition, maintain readability of code and have help in pointing out errors, we choose to use CodeClimate. It is a GitHub friendly tool with many advantages. We decided to use this tool as it is free for Open Source. "Code Climate’s flagship product, Velocity, analyzes all the data from your GitHub repos and provides you with heads-up displays, real-time analytics, and custom reports to give you a clearer perspective on how your engineering team is working." ([Link](https://codeclimate.com/company#:~:text=Code%20Climate's%20flagship%20product%2C%20Velocity,your%20engineering%20team%20is%20working.)) Code Climate is a popular static code analysis platform that helps developers write better code by identifying issues, enforcing coding standards, and providing actionable insights. It offers automated code review and analysis for various programming languages.

CodeClimate can be integrated with Github. [Adding Code Climate to Your Workflow](https://docs.codeclimate.com/docs/workflow)

The set up steps are as follows:

1. Sign up: Go to the Code Climate [website](https://codeclimate.com/) and create an account.
2. Add your repository: Once you have an account, you can add your code repository to Code Climate. It supports various version control systems like Git, GitHub, and Bitbucket.
3. Configure analysis: Code Climate provides a configuration file (e.g., `.codeclimate.yml`) that you can add to your repository. This file allows you to customize the analysis settings and specify coding standards or rules.
4. Run analysis: Code Climate automatically analyzes your code whenever changes are pushed to the repository. It checks for code quality issues, duplication, complexity, security vulnerabilities, and more. The analysis results are presented on your Code Climate dashboard.
5. Review and address issues: Analyzed issues are reported by Code Climate, along with suggestions and recommendations for improvement. You can prioritize and address these issues based on their severity and impact on your codebase.
6. Continuous integration: Code Climate integrates with popular CI/CD (Continuous Integration/Continuous Deployment) tools like Jenkins, Travis CI, and CircleCI. You can incorporate Code Climate into your CI pipeline to ensure code quality is checked with each build.

Pros of Using CodeClimate: <br>
a. Locally Installable API. <br>
b. Helps in Producing Better and Cleaner Code. <br>
c. Auto Sync With Github. <br>

Cons of Using CodeClimate: <br>
a. Is a "Dashboard of Engineering Leadership". ([refer here](https://www.swarmia.com/alternative/code-climate-velocity/?utm_term=codeclimate&utm_campaign=SRH-COMPETITORS-USA-EN&utm_source=adwords&utm_medium=ppc&hsa_acc=6644081770&hsa_cam=16463390797&hsa_grp=134848023835&hsa_ad=616241566270&hsa_src=g&hsa_tgt=kwd-512657187732&hsa_kw=codeclimate&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw04yjBhApEiwAJcvNoUQn-K_7qGP7w4ULqvKiw5W3eehyMMmOwsE4cgJoeLr8B-c_713sABoCozMQAvD_BwE))<br>
b. Only focuses on tracking activity of individual developers. <br>
c. CodeClimate offers a wide range of features and settings, which can make it initially challenging for new users to navigate and configure. <br>

### Code Quality Human Review:

This includes pull requests via github issues, collaboration and mentoring.

Pull requests (PRs) are a collaborative feature commonly used in version control systems like Git to propose and review code changes before merging them into the main codebase. They play a vital role in facilitating code collaboration, maintaining code quality, and ensuring a smooth development workflow.

Pros of Using Pull Requests: <br>
a. Ensure code is reviewed by 1 other developer before it is merged. <br>
b. Can make sure there are no merge conflicts and ensure proper code workflow. <br>
c. Increased collaboration between developers. <br>
d. Could potentially improve code quality, person reviewing can spot issues/ bugs that might not have been caught by automation. <br>
e. More consistent with documentation practices. <br>

Cons of Using Pull Requests: <br>
a. Time consuming, requires another developer to review code. <br>
b. More prone to human error <br>
c. Relies on the availability of other developers depending on how many people are required for the pull request to be approved. Everyone might not be available <br>
d. Relies on the availability of other developers depending on how many people are required for the pull request to be approved. Everyone might not be available <br>

### Unit Tests Via Automation:

Unit tests via automation refer to the practice of automating the execution of unit tests for software components or units. Unit testing is a software testing method in which individual units or components of a software application are tested to verify that they function correctly in isolation. Jest is a popular JavaScript testing framework developed by Facebook. It is widely used for unit testing JavaScript applications, including React, Vue, and Node.js projects. Jest's combination of simplicity, powerful features, and excellent performance make it a compelling choice for unit testing JavaScript applications.

Set up is as follows:

1. Run `npm init -y` in the command-line interface to initialize a new Node.js project with default settings. This command will generate a package.json file in your project directory.
2. Next, install Jest as a development dependency by running the `npm install --save-dev jest` command which will install Jest and its dependencies in the node_modules directory of your project. Additionally, it will add Jest as a devDependency in the package.json file.
3. To run tests, we use `npm run test`.

Pros of Using Jest: <br>
a. Jest works on most JavaScript projects without any configurations and setups. <br>
b. Can be used for unit testing in Angular, Vue, NodeJs, etc. <br>
c. Fast-performing test automation framework where tests are executed by performing parallel testing. <br>

Cons of Using Jest: <br>
a. Not many libraries and toolings are supported. <br>
b. There is a learning curve. <br>
c. Clumsy programming style. <br>

### Documentation Generation Via Automation:

Documentation generation via automation refers to the process of automatically generating documentation for software projects using specialized tools or frameworks. Automated documentation generation helps streamline the documentation process, ensuring that documentation stays up to date with the codebase and reduces the manual effort required to maintain documentation. JSDoc is a popular documentation generation tool for JavaScript projects. Using JSDoc for JavaScript documentation enables you to maintain comprehensive and up-to-date documentation directly within your codebase. It promotes good coding practices, enhances collaboration, and helps ensure that developers have the necessary information to understand and utilize your JavaScript code effectively.

We chose JSDocs as is one of the most commonly used for automated documentation generation in JavaScript. Using comments containing it, programmers can add documentation that describes the application programming interface of the code they created. After that, it is processed by various tools to produce documents in accessible formats, such as HTML. The guidelines to use JSDocs can be found [here](https://eslint.org/docs/latest/](https://jsdoc.app/). <br>

Set up is as follows:

1. Install: Type `npm install -g jsdoc` in the terminal
2. Write JSDoc Comments: write JSDoc comments in the js file. These comments are written in a special format that starts with /\*_ and ends with _/.
3. Run JSDoc: Run on any file, such as yourfile.js using command `npm run jsdoc yourfile.js`. Run on any folder, such as scripts using command `npm run jsdoc ./scritps`.
4. View Documentation: Open the index.html file from the out directory in your web browser to view the documentation.
