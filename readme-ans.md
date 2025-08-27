### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

# Answer to the question no-1 :
getElementById(): Selects a single element based on its unique id attribute name only.Return a single Element object (or null if no matching element is found). getElementsByClassName(): Returns a live HTMLCollection, which is an array-like object containing the matching elements. It will return empty HTMLCollection if any class not found with the specified className.
querySelector(): Selects the first matching CSS selector and return its, but as like getElementById() it will return null if no matching CSS selector is found.
querySelectorAll(): Returns a static NodeList, which is also an array-like object containing the matching elements. It will also return empty NodeList if any CSS selector not found with the specified selector.

# Answer to the question no-2 :
First i will create a element by document.createElement(). Then i will add content to the new Element by using innerText or innerHTML. Lastly select the parentElement of the document and insert the new Element by appendChild() or prepend() method.

# Answer to the question no-3 :
Event bubbling in JavaScript means where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements. When we triggered the targeted element by using eventListener event work in capture mode first and then select the targeted element the event move upward by Event bubbling. To prevent bubbling, JavaScript has methods like stopPropagation() and stopImmediatePropagation().

# Answer to the question no-4 :
Event Delegation is a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

# Answer to the question no-5 :
preventDefault() and stopPropagation() are different type of method in JavaScript. Generally PreventDefault() method is used with form to stop it's natural behavior of page reloading. On-the-other-hand stopPropagation() method is used to stop the Event-bubbling process which block the Event to bubble upward and stop to the targeted element.