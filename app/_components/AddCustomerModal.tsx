import { ChangeEvent, FormEvent } from "react";

interface AddCustomerModalProps {
  open: boolean;
  onClose: () => void;
  formData: {
    id: string;
    name: string;
    favorite_menu: string;
    level: string;
    total_transaction: number;
  };
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

export default function AddCustomerModal({
  open,
  onClose,
  formData,
  onChange,
  onSubmit,
}: Readonly<AddCustomerModalProps>) {
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
        <div className="p-6 space-y-4">
          <div className="font-bold text-lg mb-4">Add Customer</div>
          <form className="space-y-4 " onSubmit={onSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                name="name"
                id="name"
                type="text"
                className="text-xs font-medium w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
                value={formData.name}
                onChange={onChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="level">
                Level
              </label>
              <select
                name="level"
                id="level"
                className="text-xs font-medium w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
                value={formData.level}
                onChange={onChange}
              >
                <option value="warga">Warga</option>
                <option value="juragan">Juragan</option>
                <option value="sultan">Sultan</option>
                <option value="konglomerat">Konglomerat</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="favorite_menu"
              >
                Favorite Menu
              </label>
              <input
                name="favorite_menu"
                id="favorite_menu"
                type="text"
                className="text-xs font-medium w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
                value={formData.favorite_menu}
                onChange={onChange}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="total_transaction"
              >
                Total Transaction
              </label>
              <input
                name="total_transaction"
                id="total_transaction"
                type="number"
                className="text-xs font-medium w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
                value={formData.total_transaction}
                onChange={onChange}
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="font-semibold text-sm px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-100 text-gray-700 cursor-pointer transition"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="font-semibold text-sm px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 cursor-pointer transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
