import React, { useContext, useState } from 'react';
import { myContext } from '../Context/Context';

function ImageUpload() {
    const [selectedImage, setSelectedImage] = useState(null);

const {setempoydata,empoydata}= useContext(myContext)

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setempoydata({ ...empoydata, img: URL.createObjectURL(file) })
        }
    };

    return (
        <div>
            <label>Upload Image <span>(Optinal)</span></label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {/* {selectedImage && <img src={selectedImage} alt="Selected" />} */}
            {/* {selectedImage && setempoydata({ ...empoydata, img: selectedImage })} */}
            
            {console.log(selectedImage)}
        </div>
    );
}

export default ImageUpload;
