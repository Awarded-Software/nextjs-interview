# Awarded Frontend Coding Interview

_NextJS interview question for frontend developers_

## Getting Started

To get started with this project, you need to:

1. Download this repository to your local machine
2. Run `npm install` to install the required dependencies
3. Run `npm run dev` to launch the development server and visit `localhost:3000` to confirm the server is running

## Instructions

One of the most valuable features of Awarded for financial aid offices is the ability to make scholarship awarding decisions for candidates. Today, you will be building a simplified awarding page per the requirements below. You may use any tools in the standard NextJS or React libraries. The use of any additional libraries must be approved by your interviewer. Throghout this interview, you may consult online resources to help you with NextJS, React, or Typescript.

### Requirements

Our awarding page should:

1. Load award candidates from the `/api/candidates` endpoint
2. Show a list of awarded candidates with their name and award amount sorted in descending order of award amount. Awarded candidates are those candidates where `awardAmount` is not null
3. Show a list of remaining candidates who have not yet been awarded sorted by name.
4. Show a button on the remaining candidates to award them a default amount of 1000. Upon awarding a candidate, the candidate should be removed from the list of remaining candidates and appear in the list of awarded candidates.
5. Show a button on the awarded candidates to remove their award. Upong removing an awarded, the candidate should be removed from the list of awarded candidates and added to the list of remaining candidates. 
