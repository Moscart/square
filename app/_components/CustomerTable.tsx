"use client";

import { ShieldSearch, Edit2, Trash } from "iconsax-reactjs";
import { LevelBadge } from "./LevelBadge";
import TableHead from "./TableHead";
import {
  CustomerItem,
  deleteCustomer,
  updateCustomer,
} from "@/lib/redux/features/customer/customerSlice";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { useState } from "react";
import EditCustomerModal from "./EditCustomerModal";
import { useDispatch } from "react-redux";
import CustomerDetailModal from "./CustomerDetailModal";

interface CustomerTableProps {
  items: CustomerItem[];
  order: string;
  sortBy: string;
  handleSort: (key: string) => void;
}

export default function CustomerTable({
  items,
  order,
  sortBy,
  handleSort,
}: Readonly<CustomerTableProps>) {
  const dispatch = useDispatch();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const initialData: CustomerItem = {
    id: "",
    name: "",
    favorite_menu: "",
    level: "warga",
    total_transaction: 0,
  };
  const [editCustomer, setEditCustomer] = useState<CustomerItem>(initialData);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [detailCustomer, setDetailCustomer] = useState<CustomerItem | null>(
    null
  );

  const openDeleteModal = (customer: { id: string; name: string }) => {
    setSelectedCustomer(customer);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedCustomer(null);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteCustomer(id));
  };

  const confirmDelete = () => {
    if (selectedCustomer) {
      handleDelete(selectedCustomer.id);
      closeDeleteModal();
    }
  };

  const openEditModal = (customer: CustomerItem) => {
    setEditCustomer({ ...customer });
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditCustomer(initialData);
  };

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditCustomer((prev) =>
      prev
        ? {
            ...prev,
            [name]: name === "total_transaction" ? Number(value) : value,
          }
        : prev
    );
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateCustomer(editCustomer));
    closeEditModal();
  };

  const openDetailModal = (customer: CustomerItem) => {
    setDetailCustomer(customer);
    setDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setDetailModalOpen(false);
    setDetailCustomer(null);
  };

  const numberFormat = (value: number) =>
    new Intl.NumberFormat("id-ID").format(value);
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
                    <button
                      className="py-1 px-3 flex gap-2 items-center bg-neutral rounded-sm"
                      onClick={() => openDetailModal(customer)}
                    >
                      <ShieldSearch size="12" variant="TwoTone" />
                      <span>Detail</span>
                    </button>
                    <button
                      className="py-1 px-3 flex gap-2 items-center bg-neutral rounded-sm"
                      onClick={() => openEditModal(customer)}
                    >
                      <Edit2 size="12" variant="TwoTone" />
                    </button>
                    <button
                      className="py-1 px-3 flex gap-2 items-center bg-[#FEF5F6] text-error rounded-sm"
                      onClick={() =>
                        openDeleteModal({
                          id: customer.id,
                          name: customer.name,
                        })
                      }
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
      <ConfirmDeleteModal
        open={deleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        customerName={selectedCustomer?.name}
      />
      <EditCustomerModal
        open={editModalOpen}
        onClose={closeEditModal}
        customer={editCustomer}
        onChange={handleEditChange}
        onSubmit={handleEditSubmit}
      />
      <CustomerDetailModal
        open={detailModalOpen}
        onClose={closeDetailModal}
        customer={detailCustomer}
      />
    </div>
  );
}
