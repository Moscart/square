import { CustomerItem } from "@/lib/redux/features/customer/customerSlice";

interface CustomerDetailModalProps {
  open: boolean;
  onClose: () => void;
  customer: CustomerItem | null;
}

export default function CustomerDetailModal({
  open,
  onClose,
  customer,
}: CustomerDetailModalProps) {
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
          bg-white rounded-lg shadow-lg p-6 m-6 w-full max-w-md
          transition-all duration-300
          ${open ? "scale-100" : "scale-95"}
        `}
      >
        <div className="font-bold text-lg mb-4">Customer Detail</div>
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-semibold">Name:</span> {customer?.name}
          </div>
          <div>
            <span className="font-semibold up">Level:</span>{" "}
            <span className="uppercase">{customer?.level}</span>
          </div>
          <div>
            <span className="font-semibold">Favorite Menu:</span>{" "}
            {customer?.favorite_menu}
          </div>
          <div>
            <span className="font-semibold">Total Transaction:</span> IDR{" "}
            {new Intl.NumberFormat("id-ID").format(
              customer?.total_transaction as number
            )}
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="font-semibold text-sm px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 cursor-pointer transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
