## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3 divs/img for cups
3 buttons
3 divs win/loss/total

1) **For each HTML element ask: Why do I need this?** 
cup divs: show user options
buttons: which cup picked/WHEN
WLT: current state displayed

1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
cup: img (IDs)
button: eventListener
WLT: textContent

1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
increment attempts
Math.random() to select correct cup
compare correct -> selected (win vs loss)
update DOM: change img, change nums (WLT)


