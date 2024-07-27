import Note from './Note';

const NoteList = ({ notes = [], onEdit, onDelete, currentPage, notesPerPage }) => {
  const startIndex = (currentPage - 1) * notesPerPage;
  const currentNotes = notes.slice(startIndex, startIndex + notesPerPage);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {currentNotes.map((note) => (
        <Note key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;
