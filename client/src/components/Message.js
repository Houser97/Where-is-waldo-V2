import '../styles/Message.css';

const Message = ({toggleMessage, message}) => {
    return(
        <div className= {`message ${toggleMessage}`}>{message}</div>
    )
}

export default Message;