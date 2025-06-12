"use client";

import {
  Add,
  ArrowRight,
  Edit2,
  Filter,
  Printer,
  Refresh,
  SearchNormal1,
  ShieldSearch,
  Trash,
} from "iconsax-reactjs";
import Sidebar from "./_components/Sidebars";
import Image from "next/image";
import { useAppSelector } from "@/lib/redux/hooks";
import { LevelBadge } from "./_components/LevelBadge";
import { useState } from "react";
import PaginationControl from "./_components/PaginationControl";

export default function Home() {
  const allCustomer = useAppSelector((state) => state.customer.items);
  const [searchCustomer, setSearchCustomer] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const filteredItems = allCustomer.filter((customer) =>
    customer.name.toLowerCase().includes(searchCustomer.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const pageItems = filteredItems.slice(
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
                    <button className="font-semibold w-fit text-sm flex gap-2 items-center bg-white/20 backdrop-blur-[10px] rounded-lg py-2 px-4">
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
                <div className="rounded-sm overflow-hidden overflow-x-auto">
                  <table className="min-w-fit w-full whitespace-nowrap">
                    <thead>
                      <tr>
                        <th>Customer Name</th>
                        <th>Level</th>
                        <th>Favorite Menu</th>
                        <th>Total Transaction</th>
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
                                <button className="py-1 px-3 flex gap-2 items-center bg-[#FEF5F6] text-error rounded-sm">
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
      </main>
    </div>
  );
}
