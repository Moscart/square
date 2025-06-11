import {
  Add,
  BatteryFull,
  Candle,
  Category2,
  Document,
  Filter,
  LogoutCurve,
  MouseSquare,
  Printer,
  Profile2User,
  Refresh,
  Reserve,
  SearchNormal1,
  ShoppingCart,
  Truck,
  UserSquare,
} from "iconsax-reactjs";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Header */}
      <aside className="w-[200px] flex flex-col justify-between border-r border-border bg-white">
        <nav className="overflow-y-auto [&::-webkit-scrollbar]:hidden">
          <div className="p-6">
            <div className="flex items-center gap-1">
              <div className="">
                <div className="size-[17.85px] bg-primary rounded-full relative mt-1">
                  <div className="w-[7.68px] h-[15.75px] bg-primary rounded-tr-full absolute bottom-1/2 left-0"></div>
                </div>
              </div>
              <div className="text-primary font-[661] text-[27.98px]">
                square
              </div>
            </div>
          </div>
          <div>
            <div className="p-6 pt-0">
              <div className="font-satoshi font-medium text-[10px] text-muted mb-2">
                Menu
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <Category2 size="14" variant="TwoTone" />
                    <span className="font-semibold text-sm">Dashboard</span>
                  </div>
                  <div className="float-start size-[18px] flex justify-center items-center rounded-full font-semibold text-white text-[10px] bg-linear-to-r from-[#EEA849] to-[#F46B45]">
                    4
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <BatteryFull size="14" variant="TwoTone" />
                    <span className="font-semibold text-sm">Stock</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-primary py-2">
                  <div className="flex gap-3 items-center">
                    <Profile2User size="14" variant="Bulk" />
                    <span className="font-bold text-sm">Customer</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <Reserve size="14" variant="TwoTone" />
                    <span className="font-semibold text-sm">Restaurant</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <MouseSquare size="14" variant="TwoTone" />
                    <span className="font-semibold text-sm">Design</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <Document size="14" variant="TwoTone" />
                    <span className="font-semibold text-sm">Report</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <UserSquare size="14" variant="TwoTone" />
                    <span className="font-semibold text-sm">Role & Admin</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <Candle size="14" variant="TwoTone" />
                    <span className="font-semibold text-sm">Settings</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="font-satoshi font-medium text-[10px] text-muted mb-2">
                Integration
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <ShoppingCart size="14" variant="TwoTone" />
                    <span className="font-semibold text-sm">Stock</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <Truck size="14" variant="TwoTone" />
                    <span className="font-semibold text-sm">Supply</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="p-6 border-t border-border">
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 items-center">
              <div className="">
                <div className="size-9 rounded-full bg-primary overflow-hidden">
                  s
                </div>
              </div>
              <div className="">
                <div className="font-semibold text-sm line-clamp-1">
                  Savannah N
                </div>
                <div className="font-satoshi text-[10px] text-muted line-clamp-1">
                  Food Quality Manager
                </div>
              </div>
            </div>
            <button className="font-semibold text-xs text-error bg-error-light rounded-[4px] py-2 flex gap-2 items-center justify-center">
              <LogoutCurve size="16" variant="Bulk" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 h-full overflow-y-auto">
        <div className="flex flex-col gap-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 border-b border-border">
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
          <div className="flex gap-4">
            <div className="grow">
              <div className="bg-primary p-3 rounded-lg text-white">
                <div className="font-bold text-xl">Customer</div>
                <div className="font-satoshi font-medium text-xs">
                  On this menu you will be able to create, edit, and also delete
                  the customer. Also you can manage it easily.
                </div>
                <div className="flex gap-4">
                  <button className="font-semibold text-sm flex gap-2 items-center bg-white/20 rounded-lg py-2 px-4">
                    <Add size="16" />
                    <span>Add New Customer</span>
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
                    />
                    <button className="font-semibold bg-primary py-2 px-4 rounded-lg">
                      Search
                    </button>
                  </div>
                  <button className="font-semibold text-sm flex gap-2 items-center bg-white/20 rounded-lg py-2 px-4">
                    <Filter size="16" variant="TwoTone" />
                    <span>Filter</span>
                  </button>
                  <button className="font-semibold text-sm flex gap-2 items-center bg-white/20 rounded-lg py-2 px-4">
                    <Refresh size="16" variant="TwoTone" />
                    <span>Refresh</span>
                  </button>
                  <button className="font-semibold text-sm flex gap-2 items-center bg-white/20 rounded-lg py-2 px-4">
                    <Printer size="16" variant="TwoTone" />
                  </button>
                </div>
              </div>
              <div className="">
                <table>
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
                    <tr>
                      <td>Odis Rhinehart</td>
                      <td>Warga</td>
                      <td>Chicken & Ribs Combo</td>
                      <td>IDR 194,000</td>
                      <td>Detail</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-[227px] flex flex-col gap-4">
              <div className="bg-primary rounded-xl p-4 text-white h-[265px] flex flex-col gap-4 justify-between">
                <div className="font-semibold text-xl">
                  See analytics of <br />
                  the Customer <br />
                  Clearly
                </div>
                <button className="font-semibold text-sm flex gap-2 items-center bg-white/20 rounded-lg py-3 px-4 w-fit">
                  See Analytics
                </button>
              </div>
              <div className="bg-neutral rounded-xl p-4 flex flex-col gap-3 h-[595px] relative overflow-hidden">
                <div className="text-2xl">
                  <div className="font-medium">Top Menu</div>
                  <div className="font-bold text-secondary">This Week</div>
                </div>
                <div className="font-satoshi font-medium text-xs text-muted">
                  10 - 12 Agustus 2023
                </div>
                <div className="flex flex-col gap-2">
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
                <div className="absolute bottom-0 left-0">
                  <svg
                    width="227"
                    height="228"
                    viewBox="0 0 227 228"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-2.94362 150.026L-5.91148 152.676L-5.91148 229.709L233.741 229.709L233.741 1.00004L232.249 13.6106C230.757 26.2211 227.772 51.4421 220.83 49.9454C213.887 48.4487 202.985 20.2343 196.822 23.997C190.658 27.7597 189.232 63.4994 185.127 81.1592C181.023 98.819 174.239 98.3989 165.562 85.1992C156.885 71.9995 146.315 46.0203 138.513 38.7263C130.712 31.4322 125.678 42.8232 120.56 53.644C115.442 64.4647 110.24 74.7153 103.722 76.0856C97.2035 77.4559 89.3697 69.9461 84.5656 82.8855C79.7616 95.8249 77.9873 129.214 73.164 142.023C68.3407 154.833 60.4684 147.063 53.9485 148.421C47.4285 149.779 42.2609 160.265 35.4775 159.845C28.6941 159.425 20.2949 148.098 13.1274 145.086C5.95994 142.074 0.0242315 147.375 -2.94362 150.026Z"
                      fill="url(#paint0_linear_1_565)"
                      stroke="#F17300"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_565"
                        x1="97"
                        y1="-309.5"
                        x2="97"
                        y2="180"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F17300" />
                        <stop offset="1" stopColor="#F17300" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
