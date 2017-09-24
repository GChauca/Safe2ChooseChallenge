# Safe2Choose Challenge
Deadline: Monday 25 at noon.


# Step 1: Code review
* Actually this code doesn't compile. I attach the screenshot for evidence 
  ![Screenshot](./Step1/status.png)

# Step 2: 3rd party Javascript integration
* The file `chat.js` into the Step 2 folder initializes our chat service, Zopim, in the available languages. 
* Our website has support for 6 languages, and this code has only specific greetings for 3 languages plus english. Change the code to add support for those missing languages. Use Google Translator for translated text. 
* Now the code has specific code per language, use the Javascript API documentation https://api.zopim.com/files/meshim/widget/controllers/liveChatAPI/Departments-js.html to set a department per language, the name of the department will be the language detected (english, spanish, french, etc)
* Using the same documentation set "Our counselors are not available at the moment, please leave a message and we will contact you soon." as the greeting message for the offline form in all languages, use Google Translator to customize the message per language.
* Refactor the code to remove code duplication and make the file shorter. 
* Commit your changes.

# Step 3: Wordpress customization
* Review the file `functions.php` into "Step3" folder and add comments to the function #gform_display_weeks explaining what it does.
* Register a new sidebar that will be used for advertising, the container is a div with the class "module--primary" and the title is an h3 with the class "module__title", name and description must be translatable and have "safe2choose-test" as the value for the domain parameter.
* The file "testimonials.php" is an older version of the template used for https://safe2choose.org/testimonials-on-abortion/, make the changes necessary to:
* Show the extract of every testimonial instead of the whole content
* Use the title as a hyperlink to see the full testimonial
* Implement a simple pagination at the end of the testimonials list and show only 6 testimonials per page
* Commit your changes.

# Step 4: SASS edition
* Go to "Step4" folder and use SASS to make the following changes
* Add values for the five Sass variables at the top of style.scss, values like #000, #F00, etc.
* In the @for loop, use darken($bg_box_start, $i * 5) for the background-color style rule and lighten($color_box_start, $i * 25) for the color rule.
* Remember to add into index.html the reference to the stylesheet file
* Commit your changes
* Note: Because the exercise file is unfinished, the compilation will fail until you fill in the missing code.

# Step 5: Submission
* Push all changes to Github
* Send an encrypted email to cecilia@safe2choose.org with a link to your repository.
