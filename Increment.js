const domContainer = document.querySelector("#root");

// const myElement = React.createElement("div", null,
//     [   
//         React.createElement("h1", null, "Hello world!"),
//         React.createElement("h1", null, "Hello world!")
//     ]);

//JSX

const Increment = () => {
    const [counter, setCounter] =  React.useState(0);
    return(
        <div>
        <h1 id="display">{counter}</h1>
            <div>
                <button id ="button" onClick = {() => setCounter(counter+1)}>
                    Increment +
                </button>
                <button id ="button" onClick = {() => setCounter(counter-1)}>
                    Decrement-
                </button>
            </div>
        </div>
    )
}



 

ReactDOM.render(<div className="container">
    <Increment />
    <Increment />
    <Increment />   
</div>, domContainer);