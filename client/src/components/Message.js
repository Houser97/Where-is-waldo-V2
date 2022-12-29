import '../styles/Message.css';

const Message = ({toggleMessage, message}) => {
    return(
        <div className= {`message ${toggleMessage ? 'show':'hidden'}`}>{message}</div>
    )
}

export default Message;