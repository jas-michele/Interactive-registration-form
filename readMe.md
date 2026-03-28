1. How did event.preventDefault() help?

It stopped the form from refreshing the page on submit, so I could run my validation logic first. This allowed me to control whether the form should be submitted or not based on the input.

2. Difference between HTML5 validation and JavaScript validation?

HTML5 validation uses built-in attributes like required and type="email" to automatically check inputs. JavaScript validation gives more control, like creating custom rules and messages.

Using both allows yout to combine built in browser checks with more detailed, user friendly validation.

3. How did you use localStorage?

I used localStorage.setItem() to save the username after successful submission, and localStorage.getItem() on page load to pre-fill the username field.

Limitation: localStorage is not secure, so it should not be used for sensitive data like passwords because anyone can access it from the browser.

4. Challenge with real-time validation?

A challenge was making sure validation worked both while typing and on submit. I solved it by using input event listeners for real-time feedback and also calling validation functions again during from submission.

5. How did you ensure error messages were user-friendly?

I used setCustomValidity() to create clear messages for each validation rule and displayed them in the <span> elements. I also made sure messages only appeared when inputs were invalid.