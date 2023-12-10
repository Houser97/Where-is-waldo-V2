import { useContext, useState } from 'react';
import { gameContext } from '../App';
import '../styles/Form.css';
import CropEasy from './crop/CropEasy';


const Form = ({ isGameOver, time, game }) => {

    const setPlayersArray = useContext(gameContext).setPlayersArray;
    const setToggleLadderboard = useContext(gameContext).setToggleLadderboard;

    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('https://res.cloudinary.com/dluwqcce9/image/upload/v1694961227/InTouch/qqaarw68ruwwluvcphkh.jpg');
    const [previewSourceCrop, setPreviewSourceCrop] = useState('');
    const [selectedFile, setSelectedFile] = useState(null)
    const [username, setUsername] = useState('')

    const handleUser = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            saveUser('', username);
            return;
        };
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            saveUser(reader.result, username);
        }
        reader.onerror = () => {
            console.log('Error')
        }
    };

    const saveUser = (image, username) => {
        if (!username.length) return;
        fetch('/api/register_score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, time, image, game })
        }).then(response => response.json())
            .then(result => {
                console.log(result)
            })
    }

    const openLadderboard = () => {
        const ladder = document.querySelector(".ladderboard-section");
        ladder.style.display = "flex";
    }

    const handleFileInputChange = (e) => {
        const target = e.target;
        const file = target.files && target.files[0]
        if (!file) return;
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(target.value);
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSourceCrop(reader.result)
        }
    }

    return (
        <div className={`popup-form ${isGameOver ? 'stopGame' : ''}`}>
            <div className='win'>You win!</div>
            <form className='form' onSubmit={handleUser}>
                <div className='form-title'>Enter a name to save your time</div>
                <label className="custom-file-upload" htmlFor="file">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>camera</title><path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" /></svg>
                    </div>
                    <div className="text">
                        <span>Click to upload image</span>
                    </div>
                    <input
                        type="file"
                        id='file'
                        name='image'
                        accept="image/png, image/gif, image/jpeg, image/jpg"
                        onChange={(e) => handleFileInputChange(e)}
                        value={fileInputState}
                        className='input__image' />
                    {previewSource && (
                        <img className='preview__update-user' src={previewSource} alt="preview" />
                    )}
                </label>
                <CropEasy
                    photoURL={previewSourceCrop}
                    setPreviewSourceParent={setPreviewSource}
                    setPhotoURL={setPreviewSourceCrop}
                    setFile={setSelectedFile}
                />
                <div className='input-section'>
                    <label htmlFor='name'>Username</label>
                    <input id='name' name='name' maxLength={10} onChange={(e) => setUsername(e.target.value)} required></input>
                </div>
                <button className='submit' onClick={openLadderboard}>Submit</button>
            </form>
        </div>
    )
}

export default Form;