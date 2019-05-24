# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When we type https://www.techtonic.com/ into the address bar the browswer checks the cache for a DNS record to find the corresponding IP address. Then the browser will attempt to initiate a TCP connection with the server and once a connection is established the browswer will send an HTTP request to the server. The server will then send back an HTTP response and then the browser will begin to display the HTML content.

## From start to finish, how does data reach you to be rendered in the browser?

The rendering engine will start getting the contents of the requested document from the networking layer. Then it will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree. After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. Then it begins the "painting process" where it will fill in the screen pixel by pixel.



## What code is rendered in the browser?

By default the rendering engine can display HTML and XML documents. 

## What is the server-side code’s main function?

Server-side code is used to dynamically display different data when needed, generally pulled out of a database stored on a server and sent to the client to be displayed via some code

## What is the client-side code’s main function?

Client-side code is used to run scripts in a browser. The processing takes place on the end users computer.

## What is runtime?

Runtime is when a program is running (or being executable). For example, when you start a program running in a computer, it is runtime for that program.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Two instances of the client-side assets are created

## How many instances of the server-side code are available at any given time?

There's not a specific set aside number of instances that are available. 

## How many instances of the databases connected to the server application are created?

Generally one instance of the databases connected to the server application are created.
