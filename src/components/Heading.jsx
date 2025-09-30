import '../assets/styles/components/Heading.css'

function Heading(props) {
    return (
        <div className="heading">
            <h1>{props.title}</h1>
        </div>
    )
}

export default Heading;