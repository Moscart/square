import { ChangeEvent, FormEvent } from "react";
import { CustomerItem } from "@/lib/redux/features/customer/customerSlice";

interface EditCustomerModalProps {
  open: boolean;
  onClose: () => void;
  customer: CustomerItem | null;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: FormEvent) => void;
}

export default function EditCustomerModal({
  open,
  onClose,
  customer,
  onChange,
  onSubmit,
}: EditCustomerModalProps) {
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
        <div className="font-bold text-lg mb-4">Edit Customer</div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              className="text-xs font-medium w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={customer?.name}
              onChange={onChange}
              required
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
              value={customer?.level}
              onChange={onChange}
              required
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
              value={customer?.favorite_menu}
              onChange={onChange}
              required
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
              value={customer?.total_transaction}
              onChange={onChange}
              required
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
