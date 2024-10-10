import React, { useState } from 'react';
import './PhotoUpload.css';

const PhotoUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="photo-upload-container mb-3">
      <div className="upload-section">
        <label className="circle-upload">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {image ? (
            <img src={URL.createObjectURL(image)} alt="Uploaded" className="uploaded-image" />
          ) : (
            <span className="plus-icon">+</span>
          )}
        </label>
      </div>

      <div className="caption-section">
        <span className="caption">Add small caption</span>
        <input
          type="text"
          placeholder="Write your message"
          value={message}
          onChange={handleMessageChange}
          className="message-input"
        />
      </div>
    </div>
  );
};

export default PhotoUpload;
