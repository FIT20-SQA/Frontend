import React from 'react';
import './style.scss';
import { useState } from 'react';
import { useRef } from 'react';
export default function () {

    const [isDragOver, setIsDragOver] = useState(false);
    const [file, setFile] = useState();
    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);

        const file = e.dataTransfer.files[0];
        setFile(file)
    };

    const handleChooseFile = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    };
    return (
        <div className='MovieCreatePage'>
            <h1 className='add-movie-text'>Add Movie</h1>
            <div className="page-content">
                <div className="left">
                    <div className="movie-title">
                        <p className="item-text">Movie Title</p>
                        <input className='title' type="text" />
                    </div>

                    {
                        file ?
                            <div className="image-container">
                                <img src={URL.createObjectURL(file)} />

                                <label htmlFor="edit-btn" className="edit-btn">
                                    <i class="fa-solid fa-pen-to-square"></i>

                                    <input
                                        id="edit-btn"
                                        className="file-chooser"
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleChooseFile}
                                    />

                                </label>
                            </div>
                            :
                            <div
                                className={`poster ${isDragOver ? 'drag-over' : ''}`}
                                onDragOver={handleDragOver}
                                onDragEnter={handleDragEnter}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <label htmlFor="fileInput" className="file-label">
                                    <p className="item-text">
                                        Choose a file
                                    </p>
                                    <input
                                        id="fileInput"
                                        className="file-chooser"
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleChooseFile}
                                    />
                                </label>
                                <p>Drag and drop the movie poster here</p>

                            </div>
                    }




                </div>
                <div className="right">

                    <div className="item-container">
                        <div className="item genre">
                            <p className="item-text">Genre: </p>
                            <input type="text" />
                        </div>

                        <div className="item release-date">
                            <p className="item-text">Release Date: </p>
                            <input type="date" />
                        </div>

                        <div className="item duration">
                            <p className="item-text">Duration: </p>
                            <input type="number" />
                        </div>


                        <div className="item country">
                            <p className="item-text">Country: </p>
                            <input type="text" />
                        </div>

                        <div className="item description">
                            <p className="item-text">Description: </p>
                            <textarea></textarea>
                        </div>

                        <div className="item actor">
                            <p className="item-text">Actor: </p>
                            <input type="text" />
                        </div>

                        <div className="item director">
                            <p className="item-text">Director: </p>
                            <input type="text" />
                        </div>
                    </div>


                </div>
            </div>

            <div className="btn-container">
                <p className="gradient-btn save-btn">Save</p>

            </div>
        </div>
    )
}