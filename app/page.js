"use client"
import { useState, useEffect } from 'react';
import NoteList from './component/NoteList';
import NoteForm from './component/NoteForm';
import SearchBar from './component/SearchBar';
import Pagination from './component/Pagination';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 10;

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes]);

  const handleSaveNote = (note, id) => {
    if (id) {
      setNotes(notes.map((n) => (n.id === id ? { ...note, id } : n)));
    } else {
      setNotes([
        ...notes,
        {
          ...note,
          id: Date.now(),
          timestamp: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        },
      ]);
    }
    setCurrentNote(null);
  };

  const handleEditNote = (note) => {
    setCurrentNote(note);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      <NoteForm onSave={handleSaveNote} currentNote={currentNote} onCancel={() => setCurrentNote(null)} />
      <NoteList
        notes={filteredNotes}
        onEdit={handleEditNote}
        onDelete={handleDeleteNote}
        currentPage={currentPage}
        notesPerPage={notesPerPage}
      />
      <Pagination
        totalNotes={filteredNotes.length}
        notesPerPage={notesPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}