# Lab 8 - Starter
 
 Roman Ahmadi
  
### 1. Within a Github action that runs whenever code is pushed. I would fit the automated tests within Github action that gets flagged whenever a code is pushed. This approach can help ensure that our code is always healthy as it test the code constantly. The unit-test job can run faster because it doesn't need to set up any services or dependencies. The developer is notified of quick failures faster. GitHub still runs all of the jobs, providing complete results.  


### 2. No. We should use unit test For checking whether a function's output is correct or not. End-to-End test is for application flow to ensure the system integrates as expected.  


### 3. No. If we assume the given message feature in this case there are more components involved in testing that requires alots of functionality, methods and procedure in the unit test to verify correctness. Thereforer with unit test it is not reasonable to test since too many components interact with each other in this feature.


### 4. Yes. Verifying the max length of a message or setting the message length to 80 character can be done using one method. It doesn't affect the other components since it required interaction with other compnents inside it.