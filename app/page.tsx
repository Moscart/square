"use client";

import { Add, Filter, Printer, Refresh, SearchNormal1 } from "iconsax-reactjs";
import Sidebar from "./_components/Sidebar";
import Image from "next/image";
import { useAppSelector } from "@/lib/redux/hooks";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import PaginationControl from "./_components/PaginationControl";
import {
  addCustomer,
  CustomerItem,
} from "@/lib/redux/features/customer/customerSlice";
import { useDispatch } from "react-redux";
import CustomerTable from "./_components/CustomerTable";
import AddCustomerModal from "./_components/AddCustomerModal";

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
  const [modalOpen, setModalOpen] = useState(false);

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
    setModalOpen(false);
    setFormData(initialData);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
                    <button
                      className="font-semibold w-fit text-sm flex gap-2 items-center bg-white/20 backdrop-blur-[10px] rounded-lg py-2 px-4 cursor-pointer"
                      onClick={handleOpenModal}
                    >
                      <Add size="16" />
                      <span className="line-clamp-1">Add New Customer</span>
                    </button>
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
                <CustomerTable
                  items={pageItems}
                  order={order}
                  sortBy={sortBy}
                  handleSort={handleSort}
                />
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
                <div className="size-[323px] absolute bg-[#5D5FEF] rounded-full border border-[#A5A6F6] bottom-[160px] translate-y-full right-[144px] translate-x-full -z-10"></div>
                <div className="size-[323px] absolute bg-[#7879F1] rounded-full border border-[#FFFFFF] bottom-[130px] translate-y-full right-[98px] translate-x-full -z-10"></div>
                <div className="size-[323px] absolute bg-[#A5A6F6] rounded-full border border-[#F2F2F2] bottom-[100px] translate-y-full right-[56px] translate-x-full -z-10"></div>
                <div className="absolute top-0 left-0">
                  <svg
                    width="191"
                    height="81"
                    viewBox="0 0 191 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M-24.1467 79.9128L-21.6107 77.204C-19.0747 74.4952 -14.0027 69.0777 -6.50458 70.3258C0.993545 71.5739 10.9178 79.4877 17.6594 78.6575C24.4011 77.8272 27.9602 68.2529 34.1829 65.9969C40.4056 63.741 49.292 68.8032 52.173 57.3659C55.054 45.9286 51.9296 17.9916 54.7727 6.45009C57.6158 -5.09139 66.4263 -0.237373 72.6455 -2.50318C78.8647 -4.76899 82.4924 -14.1546 85.9537 -23.9975C89.4151 -33.8403 92.71 -44.1403 101.458 -39.4593C110.205 -34.7783 124.405 -15.1162 134.876 -5.70024C145.347 3.71568 152.089 2.88542 153.555 -12.4407C155.02 -27.7669 151.21 -57.5889 156.731 -61.7728C162.252 -65.9567 177.104 -44.5025 184.16 -44.4696C191.216 -44.4367 190.475 -65.8252 190.105 -76.5194L189.734 -87.2136"
                      stroke="#A5A6F6"
                    />
                  </svg>
                </div>
                <div className="absolute top-0 left-0">
                  <svg
                    width="202"
                    height="91"
                    viewBox="0 0 202 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_f_1_580)">
                      <path
                        d="M-24.1467 79.9128L-21.6107 77.204C-19.0747 74.4952 -14.0027 69.0777 -6.50458 70.3258C0.993545 71.5739 10.9178 79.4877 17.6594 78.6575C24.4011 77.8272 27.9602 68.2529 34.1829 65.9969C40.4056 63.741 49.292 68.8032 52.173 57.3659C55.054 45.9286 51.9296 17.9916 54.7727 6.45009C57.6158 -5.09139 66.4263 -0.237373 72.6455 -2.50318C78.8647 -4.76899 82.4924 -14.1546 85.9537 -23.9975C89.4151 -33.8403 92.71 -44.1403 101.458 -39.4593C110.205 -34.7783 124.405 -15.1162 134.876 -5.70024C145.347 3.71568 152.089 2.88542 153.555 -12.4407C155.02 -27.7669 151.21 -57.5889 156.731 -61.7728C162.252 -65.9567 177.104 -44.5025 184.16 -44.4696C191.216 -44.4367 190.475 -65.8252 190.105 -76.5194L189.734 -87.2136"
                        stroke="#A5A6F6"
                        strokeWidth="2"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_1_580"
                        x="-34.8767"
                        y="-97.2483"
                        width="236.202"
                        height="187.844"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="5"
                          result="effect1_foregroundBlur_1_580"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
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
        <AddCustomerModal
          open={modalOpen}
          onClose={handleCloseModal}
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}
