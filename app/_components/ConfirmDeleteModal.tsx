interface ConfirmDeleteModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  customerName?: string;
}

export default function ConfirmDeleteModal({
  open,
  onClose,
  onConfirm,
  customerName,
}: Readonly<ConfirmDeleteModalProps>) {
  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/40 backdrop-blur-[10px]
        transition-opacity duration-300
        ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <div
        className={`
          bg-white rounded-lg shadow-lg p-6 m-6 w-full max-w-lg
          transition-all duration-300
          ${open ? "scale-100" : "scale-95"}
        `}
      >
        <div className="font-bold text-lg mb-2">Delete Customer</div>
        <div className="mb-4 text-sm">
          Are you sure you want to delete{" "}
          <span className="font-bold">{customerName}</span>?
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 rounded bg-gray-200 text-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded bg-error text-white"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
