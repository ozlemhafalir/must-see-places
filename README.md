# Must See Places

Must See Places is a quiz website that encourages people to learn new places and help them to create their travel bucket lists.

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

### About Us
* At the about us page, using the banner, more information is displayed about who we are, including a contact information that users can reach out for more information.


# References

* https://ui.dev/amiresponsive for screenshot of website on different devices