> # Lab 8

> ### Check your understanding
> Question 1: Where would you fit your automated tests in your Recipe project development pipeline? Select one from the prompt.

> Answer
- It makes the most sense to place the automated tasks when the code is pushed to the github repo. If they're run locally and the tests pass, it is possible that they only passed due to the specific developer environment of the testing machine, on the other hand, running them after all development is completed is also not a feasible option since by that time some errors may have been left unchecked and will take a lot of man power and resources to solve. Running them on a server like github actions ensures that you get to run it on a platform that will be most similar to the platform the users will acutally be running them on, and you also get to detect and engage bugs earlier in the development phase.

> Question 2: Would you use E2E testing for testing function outputs?

> Answer: 
- I would probably use unit testing instead of E2E for testing function outputs since it's easier to intercept the function calls and the outputs in the code using unit testing rather than having to wait to measure the function output to have effect on the UI elements.

> ### Expose Section 

Goals:
- [ ] Complete E2E testing with puppeteer

