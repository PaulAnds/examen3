import React from 'react'
import { getNotes } from '../data';
import { Link, useParams } from 'react-router-dom';
import './Portafolio.css';

const Portafolio = () => {
    let notes = getNotes();

    const {noteId} = useParams();

    const filterNotes = (id) => {
        let selectedNote = false;

        if (id > 0) {
            selectedNote = notes.filter(
                note => note.id === Number(id)
            );
        }

        return selectedNote;
    }

    const selectedNote = filterNotes(noteId);

    const renderNotes = (note) => (
        <div className='cards'>
            {
                note.map((note, key) => (
                    <div key={key} className='card'>
                        <img src={require('../../shared/images/background.jpg')} alt='Card'/>
                        <h5>{note.title}</h5>
                        <p>{note.description}</p>
                        <Link className='card-link' to={`/portafolio/${note.id}`}>Ver</Link>
                    </div>
                ))
            }
       
            
        </div>
    )
    return (
        <div className='Notes'>
            <h1>Portafolio</h1>
            {renderNotes(selectedNote || notes )}
        </div>
    )
}   
export default Portafolio;