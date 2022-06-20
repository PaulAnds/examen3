import React from 'react';
import {getNotes} from '../data';
import { Link, useParams } from 'react-router-dom';
import './Portafolio.css';

const Portafolio = (props) => {
    let notes = getNotes();

    const {noteId} = useParams();

    const filterNotes = (id) => {
        let selectedNote = false;

        if(id > 0){
            selectedNote = notes.filter(
                note => note.id === Number(id)
            );
        }
        return selectedNote;
    }

    const selectedNote = filterNotes(noteId);

    const {name,description,image} = props;

    const renderNote = (notes) => (
        <div className= 'col-3'>
            <div className='card mb-3'>
                <img 
                    src = {image}
                    alt = {name}
                    className = 'card-img-top'
                />
                <div className = 'card-body'>
                    <h3 className='card-title'>{name}</h3>
                    <p>{`Origin: ${origin && origin.name}`}</p>
                </div>
            </div>
        </div>
    )
    return (
        <div className="Notes">
            <h1>Portafolio</h1>
            {renderNote(selectedNote || notes)}
        </div>
    );
};

export default Portafolio;