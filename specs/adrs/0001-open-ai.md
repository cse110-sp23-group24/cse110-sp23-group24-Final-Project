# Use OpenAI for output

## Context and Problem Statement

How will our tarot card app generate a future based on user input?
How can we keep our tarot card output relevant and creative?

## Cosnidered Options

-   Code specific phrases and piece them together based on user input
-   Have a bank of futures that can be told and randomly output one to user
-   Feed input of user into OpenAI and fetch the output from OpenAI and display it to the user

## Decision Outcome

Chosen option: Feed input of user into OpenAI, as this will produce the most creative and diverse responses while making the future that is told relevant to the information that the user provides

### Consequences

-   Good, because app is more entertaining
-   Good, becuase requires less hard coding based off user input
-   Bad, because OpenAI is not 100% reliable or predictable, and output and behavior of the app is dependent on it

## Pros and Cons of the Options

### Code specific phrases and piece them together

-   Good, because app behavior is more specific and predictable
-   Good, because app is more personal to the creativity of this team
-   Bad, because output may not be relevant or make sense
-   Bad, because behavior of app is limited

### Have a bank of futures and randomly output

-   Good, because app is more personal and reflective of team members' creativity
-   Good, because app behavior is more predictable
-   Bad, because output is limited
-   Bad, because output may not make sense

### Feed input of user into OpenAI

-   Good, because app output is more diverse
-   Good, because app output is tailored specifically to user input
-   Bad, because it may take longer to establish connection between user input and OpenAI and make the two systems trade information properly
