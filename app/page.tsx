"use client";

import {
  Add,
  ArrowDown2,
  ArrowUp2,
  Edit2,
  Filter,
  Printer,
  Refresh,
  SearchNormal1,
  ShieldSearch,
  Trash,
} from "iconsax-reactjs";
import Sidebar from "./_components/Sidebar";
import Image from "next/image";
import { useAppSelector } from "@/lib/redux/hooks";
import { LevelBadge } from "./_components/LevelBadge";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import PaginationControl from "./_components/PaginationControl";
import {
  addCustomer,
  CustomerItem,
  deleteCustomer,
} from "@/lib/redux/features/customer/customerSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const allCustomer = useAppSelector((state) => state.customer.items);
  const initialData: CustomerItem = {
    id: "",
    name: "",
    favorite_menu: "",
    level: "warga",
    total_transaction: 0,
  };
  const [formData, setFormData] = useState<CustomerItem>(initialData);
  const [searchCustomer, setSearchCustomer] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [order, setOrder] = useState("asc");
  const itemsPerPage = 10;
  const modalToggleRef = useRef<HTMLInputElement>(null);

  const filteredItems = allCustomer.filter((customer) =>
    customer.name.toLowerCase().includes(searchCustomer.toLowerCase())
  );

  const sortedItems = () => {
    if (!sortBy) return filteredItems;

    return [...filteredItems].sort((a, b) => {
      const valA = a[sortBy as keyof CustomerItem];
      const valB = b[sortBy as keyof CustomerItem];

      if (typeof valA === "string" && typeof valB === "string") {
        const cmp = valA.localeCompare(valB);
        return order === "asc" ? cmp : -cmp;
      }

      if (typeof valA === "number" && typeof valB === "number") {
        return order === "asc" ? valA - valB : valB - valA;
      }

      return 0;
    });
  };

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const pageItems = sortedItems().slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearchChange = (search: string) => {
    setCurrentPage(1);
    setSearchCustomer(search);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  const handleSort = (key: string) => {
    setSortBy(key);
    if (sortBy !== key || order == "desc") {
      setOrder("asc");
    } else {
      setOrder("desc");
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addCustomer(formData));
    if (modalToggleRef.current) {
      modalToggleRef.current.checked = false;
    }
    setFormData(initialData);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteCustomer(id));
  };

  const numberFormat = (value: number) =>
    new Intl.NumberFormat("id-ID").format(value);

  return (
    <div className="lg:flex h-screen relative">
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 p-6 h-full overflow-y-auto max-lg:pt-[92px]">
        <div className="flex flex-col gap-4 max-w-6xl mx-auto">
          <div className="grid xl:grid-cols-2 border-b border-border">
            <div className="">
              <div className="font-bold text-2xl">Customer</div>
              <div className="font-medium text-sm text-muted mt-1 mb-4">
                You can manage and organize your customer and other things here
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="grid grid-cols-3 gap-2">
                <button className="relative text-center font-bold text-sm text-primary py-3 px-6">
                  <span>Customer</span>
                  <hr className="border-1 absolute -bottom-[1px] left-0 w-full" />
                </button>
                <button className="relative text-center font-bold text-sm text-muted py-3 px-6">
                  Promo
                </button>
                <button className="relative text-center font-bold text-sm text-muted py-3 px-6">
                  Voucher
                </button>
              </div>
            </div>
          </div>
          <div className="max-xl:grid flex gap-4 overflow-hidden">
            <div className="grow flex flex-col gap-6 overflow-hidden">
              <div className="p-3 rounded-lg text-white flex flex-col gap-4 relative overflow-hidden">
                <div className="max-w-[341px] flex flex-col gap-1">
                  <div className="font-bold text-xl">Customer</div>
                  <div className="font-satoshi font-medium text-xs leading-[200%] tracking-[0.02em]">
                    On this menu you will be able to create, edit, and also
                    delete the customer. Also you can manage it easily.
                  </div>
                </div>
                <div className="max-lg:grid flex gap-4">
                  <div className="max-md:grid flex gap-4 grow">
                    <label
                      htmlFor="modal-toggle"
                      className="font-semibold w-fit text-sm flex gap-2 items-center bg-white/20 backdrop-blur-[10px] rounded-lg py-2 px-4 cursor-pointer"
                    >
                      <Add size="16" />
                      <span className="line-clamp-1">Add New Customer</span>
                    </label>
                    <div className="bg-white w-fit rounded-lg flex gap-4 items-center p-1 ps-4 grow">
                      <SearchNormal1
                        size="16"
                        variant="TwoTone"
                        className="text-[#D1D0D3]"
                      />
                      <input
                        type="text"
                        className="focus:outline-none text-xs font-medium grow text-black placeholder:text-[#D1D0D3]"
                        placeholder="Search Customer"
                        value={searchCustomer}
                        onChange={(e) => handleSearchChange(e.target.value)}
                      />
                      <button className="font-semibold bg-primary py-2 px-4 rounded-lg text-sm">
                        Search
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="font-semibold text-sm flex gap-2 items-center bg-white/20 backdrop-blur-[10px] rounded-lg py-2 px-4">
                      <Filter size="16" variant="TwoTone" />
                      <span>Filter</span>
                    </button>
                    <button className="font-semibold text-sm flex gap-2 items-center bg-white/20 backdrop-blur-[10px] rounded-lg py-2 px-4">
                      <Refresh size="16" variant="TwoTone" />
                      <span>Refresh</span>
                    </button>
                    <button className="font-semibold text-sm flex gap-2 items-center bg-white/20 backdrop-blur-[10px] rounded-lg py-2 px-4">
                      <Printer size="16" variant="TwoTone" />
                    </button>
                  </div>
                </div>
                <div
                  className="w-full h-full absolute left-0 top-0 -z-10 bg-primary"
                  style={{
                    WebkitClipPath: "polygon(0 0, 0 100%, 50% 100%, 60% 0%)",
                  }}
                ></div>
                <div className="w-1/2 h-full absolute right-0 top-0 -z-20">
                  <Image
                    className="object-cover scale-180 object-[0%_40%] brightness-50"
                    src={"/images/family.jpg"}
                    fill
                    alt="Family"
                  />
                </div>
              </div>
              <div className="flex flex-col max-sm:gap-8 gap-14">
                <div className="rounded-sm overflow-hidden overflow-x-auto">
                  <table className="min-w-fit w-full whitespace-nowrap">
                    <thead>
                      <tr>
                        <th>
                          <button
                            className="flex items-center justify-between gap-4 w-full cursor-pointer"
                            onClick={() => handleSort("name")}
                          >
                            <span>Customer Name</span>
                            {sortBy === "name" && order === "asc" && (
                              <ArrowUp2 size={16} variant="Bold" />
                            )}
                            {sortBy === "name" && order === "desc" && (
                              <ArrowDown2 size={16} variant="Bold" />
                            )}
                            {sortBy !== "name" && (
                              <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.900009 8L3.40001 10.5L5.90001 8M0.900009 4L3.40001 1.5L5.90001 4"
                                  stroke="#98949E"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </button>
                        </th>
                        <th>
                          <button
                            className="flex items-center justify-between gap-4 w-full cursor-pointer"
                            onClick={() => handleSort("level")}
                          >
                            <span>Level</span>
                            {sortBy === "level" && order === "asc" && (
                              <ArrowUp2 size={16} variant="Bold" />
                            )}
                            {sortBy === "level" && order === "desc" && (
                              <ArrowDown2 size={16} variant="Bold" />
                            )}
                            {sortBy !== "level" && (
                              <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.900009 8L3.40001 10.5L5.90001 8M0.900009 4L3.40001 1.5L5.90001 4"
                                  stroke="#98949E"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </button>
                        </th>
                        <th>
                          <button
                            className="flex items-center justify-between gap-4 w-full cursor-pointer"
                            onClick={() => handleSort("favorite_menu")}
                          >
                            <span>Favorite Menu</span>
                            {sortBy === "favorite_menu" && order === "asc" && (
                              <ArrowUp2 size={16} variant="Bold" />
                            )}
                            {sortBy === "favorite_menu" && order === "desc" && (
                              <ArrowDown2 size={16} variant="Bold" />
                            )}
                            {sortBy !== "favorite_menu" && (
                              <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.900009 8L3.40001 10.5L5.90001 8M0.900009 4L3.40001 1.5L5.90001 4"
                                  stroke="#98949E"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </button>
                        </th>
                        <th>
                          <button
                            className="flex items-center justify-between gap-4 w-full cursor-pointer"
                            onClick={() => handleSort("total_transaction")}
                          >
                            <span>Total Transaction</span>
                            {sortBy === "total_transaction" &&
                              order === "asc" && (
                                <ArrowUp2 size={16} variant="Bold" />
                              )}
                            {sortBy === "total_transaction" &&
                              order === "desc" && (
                                <ArrowDown2 size={16} variant="Bold" />
                              )}
                            {sortBy !== "total_transaction" && (
                              <svg
                                width="7"
                                height="12"
                                viewBox="0 0 7 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.900009 8L3.40001 10.5L5.90001 8M0.900009 4L3.40001 1.5L5.90001 4"
                                  stroke="#98949E"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </button>
                        </th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pageItems.length ? (
                        pageItems.map((customer) => (
                          <tr key={customer.id}>
                            <td>{customer.name}</td>
                            <td>
                              <LevelBadge variant={customer.level} />
                            </td>
                            <td>{customer.favorite_menu}</td>
                            <td>
                              IDR {numberFormat(customer.total_transaction)}
                            </td>
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
                <PaginationControl
                  totalItems={pageItems.length}
                  currentPage={currentPage}
                  handlePageChange={handlePageChange}
                  totalPages={totalPages}
                />
              </div>
            </div>
            <div className="xl:w-[227px] max-xl:grid max-md:flex max-xl:grid-cols-5 flex flex-col gap-4">
              <div className="max-xl:col-span-2 bg-primary rounded-xl p-4 text-white max-md:h-auto h-[265px] flex flex-col gap-4 justify-between relative overflow-hidden -z-30">
                <div className="font-semibold text-xl">
                  See analytics of <br />
                  the Customer <br />
                  Clearly
                </div>
                <button className="font-semibold text-sm flex gap-2 items-center bg-white/20 backdrop-blur-[10px] rounded-lg py-3 px-4 w-fit relative z-10">
                  See Analytics
                </button>
                {/* <div className="size-[323px] absolute bg-[#5D5FEF] rounded-full border border-[#A5A6F6] top-[106px] left-[84px] -z-10"></div> */}
                <div className="size-[323px] absolute bg-[#5D5FEF] rounded-full border border-[#A5A6F6] bottom-[160px] translate-y-full right-[144px] translate-x-full -z-10"></div>
                <div className="size-[323px] absolute bg-[#7879F1] rounded-full border border-[#FFFFFF] bottom-[130px] translate-y-full right-[98px] translate-x-full -z-10"></div>
                <div className="size-[323px] absolute bg-[#A5A6F6] rounded-full border border-[#F2F2F2] bottom-[100px] translate-y-full right-[56px] translate-x-full -z-10"></div>
              </div>
              <div className="max-xl:col-span-3 bg-neutral rounded-xl p-4 max-sm:flex max-xl:grid max-xl:grid-cols-3 flex flex-col gap-3 max-sm:h-[595px] max-xl:h-auto h-[595px] relative overflow-hidden">
                <div className="flex flex-col gap-3">
                  <div className="text-2xl">
                    <div className="font-medium">Top Menu</div>
                    <div className="font-bold text-secondary">This Week</div>
                  </div>
                  <div className="font-satoshi font-medium text-xs text-muted">
                    10 - 12 Agustus 2023
                  </div>
                </div>
                <div className="max-xl:col-span-2 flex flex-col gap-2">
                  <div className="bg-white font-bold text-sm p-[10px] rounded-xl shadow-[4px_4px_10px_0px_#0000000D] relative">
                    <span>Nasi Goreng Jamur Special Resto Pak Min</span>
                    <div className="absolute text-white bg-secondary size-6 flex items-center justify-center rotate-8 -top-2 right-0.5 shadow-[2px_2px_0px_0px_#464646]">
                      1
                    </div>
                  </div>
                  <div className="font-semibold text-xs p-[10px] text-muted">
                    2. Tongseng Sapi Gurih
                  </div>
                  <div className="font-semibold text-xs p-[10px] text-muted">
                    3. Nasi Gudeg Telur Ceker
                  </div>
                  <div className="font-semibold text-xs p-[10px] text-muted">
                    4. Nasi Ayam serundeng
                  </div>
                  <div className="font-semibold text-xs p-[10px] text-muted">
                    5. Nasi Goreng Seafood
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 max-xl:w-full">
                  <Image
                    className="object-cover max-sm:w-full max-xl:w-1/3"
                    src={"/images/graph.png"}
                    width={1000}
                    height={1000}
                    alt="Graph"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Add Customer */}
        <div className="">
          <input
            type="checkbox"
            id="modal-toggle"
            className="peer hidden"
            ref={modalToggleRef}
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
                  onSubmit={handleSubmit}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
      </main>
    </div>
  );
}
