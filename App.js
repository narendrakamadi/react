/**
 * 
 * <div id="parent">
 *     <div id="child">
 *         <h1>I'm H1 Tag</h1>
 *         <h2>I'm H2 Tag</h2>
 *     </div>
 * </div>
 * 
 */

/*const heading = React.createElement("h1", {}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "I'm in H1 Tag"),
        React.createElement("h1", {}, "I'm in H2 Tag"),
    ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);