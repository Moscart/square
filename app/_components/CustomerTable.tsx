import { ShieldSearch, Edit2, Trash } from "iconsax-reactjs";
import { LevelBadge } from "./LevelBadge";
import TableHead from "./TableHead";
import { CustomerItem } from "@/lib/redux/features/customer/customerSlice";

interface CustomerTableProps {
  items: CustomerItem[];
  order: string;
  sortBy: string;
  handleSort: (key: string) => void;
  handleDelete: (id: string) => void;
  numberFormat: (value: number) => string;
}

export default function CustomerTable({
  items,
  order,
  sortBy,
  handleSort,
  handleDelete,
  numberFormat,
}: CustomerTableProps) {
  return (
    <div className="rounded-sm overflow-hidden overflow-x-auto">
      <table className="min-w-fit w-full whitespace-nowrap">
        <thead>
          <tr>
            <th>
              <TableHead
                handleSort={handleSort}
                label="Customer Name"
                name="name"
                order={order}
                sortBy={sortBy}
              />
            </th>
            <th>
              <TableHead
                handleSort={handleSort}
                label="Level"
                name="level"
                order={order}
                sortBy={sortBy}
              />
            </th>
            <th>
              <TableHead
                handleSort={handleSort}
                label="Favorite Menu"
                name="favorite_menu"
                order={order}
                sortBy={sortBy}
              />
            </th>
            <th>
              <TableHead
                handleSort={handleSort}
                label="Total Transaction"
                name="total_transaction"
                order={order}
                sortBy={sortBy}
              />
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length ? (
            items.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>
                  <LevelBadge variant={customer.level} />
                </td>
                <td>{customer.favorite_menu}</td>
                <td>IDR {numberFormat(customer.total_transaction)}</td>
                <td>
                  <div className="flex gap-1 justify-center">
                    <button className="py-1 px-3 flex gap-2 items-center bg-neutral rounded-sm">
                      <ShieldSearch size="12" variant="TwoTone" />
                      <span>Detail</span>
                    </button>
                    <button className="py-1 px-3 flex gap-2 items-center bg-neutral rounded-sm">
                      <Edit2 size="12" variant="TwoTone" />
                    </button>
                    <button
                      className="py-1 px-3 flex gap-2 items-center bg-[#FEF5F6] text-error rounded-sm"
                      onClick={() => handleDelete(customer.id)}
                    >
                      <Trash size="12" variant="TwoTone" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
