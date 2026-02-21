import '../assets/styles/components/Heading.scss'

type HeadingProps = {
  title: string;
  subheading: string;
};

function Heading({ title, subheading}: HeadingProps ) {
    return (
        <div className="heading">
            <h1>{title}</h1>
            {subheading && <p className="mt-4 mb-0">{subheading}</p>}
        </div>
    )
}

export default Heading;