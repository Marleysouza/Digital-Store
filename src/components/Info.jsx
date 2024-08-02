const Info = ({ title, informations }) => {
    return (
        <div>
            <h3>{title}</h3>
            {informations.map((info, index) => (
                <a href={info.link} key={index} target="_blank" rel="noopener noreferrer">{info.text}</a>
            ))}
        </div>
    )
}

export default Info