# Must See Places

[Must See Places](https://ozlemhafalir.github.io/must-see-places/) is a quiz website that encourages people to learn new places and help them to create their travel bucket lists.

![Homepage Responsive Screenshot](https://ozlemhafalir.github.io/must-see-places/assets/readme/screenshot-devices.png)

## Pages

### Homepage
* Homepage consists of a welcome message, an input that user can create a username and a button to start the quiz.
* When the button is clicked, user is redirected to Quiz page.
* When user doesn't put a value into username input, an alert pops up.

![Homepage Screenshot](https://ozlemhafalir.github.io/must-see-places/assets/readme/screenshot-homepage.png)

### Quiz Page
* There are predefined number of places (currently 45).
* When a quiz session is started for a user, 10 random place is selected.
* For each question, the answers are also randomly selected from places list.
* The correct and wrong answer counts are stored in javascript
* When user answers the last question and clicks next, the correct and wrong answer counts are stored in sessionStorage. Then user is redirected to Score page.

![Quiz Page Screenshot](https://ozlemhafalir.github.io/must-see-places/assets/readme/screenshot-quiz.png)

### Score Page
* In score page, using the username from sessionStorage, user is appealed to by username.
* Using the correct and wrong answer count from sessionStorage and Google Charts library, a pie chart is shown.
* There is a Try Again button, when clicked, user is redirected to Homepage.
* There are social media icons, when clicked, user can share the website with others.

![Score Page Screenshot](https://ozlemhafalir.github.io/must-see-places/assets/readme/screenshot-score.png)


## Deployment
* This website runs on Github Pages: https://ozlemhafalir.github.io/must-see-places/
* When a change is pushed to main branch, the change is automatically deployed to running website.
* The configuration for Github Pages is under Settings of the repository.


## Testing
✅ Tested that the website works in all major browsers (Chrome, Firefox, Safari, Edge).

✅ Tested that the website works for different screen sizes.

✅ Tested that the images and redirections are not broken.

## Bugs
There is no known bugs in this project.

## Validator Testing
* HTML
    ✅ All the pages are checked with HTML validator: https://validator.w3.org/nu/. No error or warning found.
* CSS
    ✅ The website css is checked with the validator: https://jigsaw.w3.org/css-validator/. No error found.
* Accessibility
    * All the pages received outstanding scores when run through lighthouse:
    ![Homepage Lighthouse](https://ozlemhafalir.github.io/must-see-places/assets/readme/lighthouse-homepage.png)
    ![Quiz Page Lighthouse](https://ozlemhafalir.github.io/must-see-places/assets/readme/lighthouse-quiz.png)
    ![Score Page Lighthouse](https://ozlemhafalir.github.io/must-see-places/assets/readme/lighthouse-score.png)


## Credits
### Media

**Quiz images:**

*Quiz images were taken from https://www.pexels.com/ and https://unsplash.com/

**Home Page and Score page illustrations:**
*These two illustrations were taken from https://www.freepik.com/vectors/travel-illustration

# References
* https://developers.google.com/chart for score page.
* https://ui.dev/amiresponsive for screenshot of website on different devices.