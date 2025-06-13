import { ChangeEvent, FormEvent, RefObject } from "react";

interface AddCustomerModalProps {
  openRef: RefObject<HTMLInputElement | null>;
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
  openRef,
  formData,
  onChange,
  onSubmit,
}: AddCustomerModalProps) {
  return (
    <div>
      <input
        type="checkbox"
        id="modal-toggle"
        className="peer hidden"
        ref={openRef}
      />

      <label
        htmlFor="modal-toggle"
        className="fixed inset-0 bg-black/40 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-200 peer-checked:opacity-100 peer-checked:pointer-events-auto z-10"
      />

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-xl flex items-center justify-center p-4 pointer-events-none peer-checked:pointer-events-auto opacity-0 peer-checked:opacity-100 transition-all duration-200 transform scale-95 peer-checked:scale-100 z-20">
        <div className="bg-white rounded-lg shadow-xl w-full mx-auto overflow-hidden">
          <header className="flex justify-between items-center px-6 py-4 border-b-2 border-border">
            <h2 className="text-xl font-semibold">Add Customer</h2>
            <label
              htmlFor="modal-toggle"
              className="text-2xl leading-none cursor-pointer hover:text-red-500 transition"
            >
              &times;
            </label>
          </header>

          <div className="p-6 space-y-4">
            <form
              className="space-y-4 [&:container(width>400px)]:grid [&:container(width>400px)]:grid-cols-2 gap-4"
              onSubmit={onSubmit}
            >
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
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
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="level"
                >
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
              <div className="col-span-2 flex justify-end">
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
    </div>
  );
}
