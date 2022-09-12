const App = () => {
    return (
        <div>
            <Tweet username="bob" name="Bob Bobson" date={"September 20"} message="A tweet" />
            <Tweet username="joe" name="Joe Smith" date={"August 10"} message="Seems simple enough" />
            <Tweet username="ted" name="Ted Tedson" date={"June 15"} message="Not too exciting" />
        </div>
    )
}

const Tweet = (props) => {
    return (
        <div>
            <h2>{props.username} on {props.date}</h2>
            <p>{props.message} <i>---{props.name}</i></p>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));