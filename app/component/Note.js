import { FiEdit, FiTrash2 } from 'react-icons/fi';

const Note = ({ note, onEdit, onDelete }) => {
  const colors = ['bg-yellow-100', 'bg-pink-100', 'bg-blue-100', 'bg-green-100'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={`p-4 rounded-lg shadow ${randomColor}`}>
      <div className="mb-2 text-sm text-gray-600">{note.timestamp}</div>
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-lg font-bold">{note.title}</h2>
        <div className="flex space-x-2">
          <FiEdit className="cursor-pointer text-gray-600" onClick={() => onEdit(note)} />
          <FiTrash2 className="cursor-pointer text-gray-600" onClick={() => onDelete(note.id)} />
        </div>
      </div>
      <p className="mb-4">{note.content}</p>
      <div className="text-gray-500 text-sm flex items-center">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12A6 6 0 0110 4zM9 8a1 1 0 000 2h2a1 1 0 100-2H9zm0 4a1 1 0 000 2h2a1 1 0 100-2H9z"
              clipRule="evenodd"
            />
          </svg>
          <span>{note.time}</span>
        </div>
      </div>
    </div>
  );
};

export default Note;
