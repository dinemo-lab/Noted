"use client"
import { useState, useEffect } from 'react';

const NoteForm = ({ onSave, currentNote, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const note = { title, content };
    onSave(note, currentNote ? currentNote.id : null);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          rows="4"
          required
        />
      </div>
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          {currentNote ? 'Update Note' : 'Add Note'}
        </button>
        {currentNote && (
          <button type="button" onClick={onCancel} className="bg-gray-500 text-white py-2 px-4 rounded">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default NoteForm;
