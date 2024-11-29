const domContainer = document.querySelector("#root");

// const myElement = React.createElement("div", null,
//     [   
//         React.createElement("h1", null, "Hello world!"),
//         React.createElement("h1", null, "Hello world!")
//     ]);

//JSX

const myElement = (
    <div>
        <h1 id="display">0</h1>
        <div>
            <button id ="button">
                Increment +
            </button>
        </div>
    </div>
)


ReactDOM.render(myElement, domContainer);