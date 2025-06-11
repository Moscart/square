import { Category2, LogoutCurve, ShoppingCart, Truck } from "iconsax-reactjs";

export default function Home() {
  return (
    <div className="relative">
      {/* Header */}
      <section
        className="w-[200px] h-screen flex flex-col justify-between border-r border-border fixed bg-white overflow-y-auto
          [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:bg-gray-300"
      >
        <div className="">
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
                    <span className="font-semibold text-[14px]">Dashboard</span>
                  </div>
                  <div className="float-start size-[18px] flex justify-center items-center rounded-full font-semibold text-white text-[10px] bg-linear-to-r from-[#EEA849] to-[#F46B45]">
                    4
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <Category2 size="14" variant="TwoTone" />
                    <span className="font-semibold text-[14px]">Dashboard</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <Category2 size="14" variant="TwoTone" />
                    <span className="font-semibold text-[14px]">Dashboard</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <Category2 size="14" variant="TwoTone" />
                    <span className="font-semibold text-[14px]">Dashboard</span>
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
                    <span className="font-semibold text-[14px]">Stock</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <Truck size="14" variant="TwoTone" />
                    <span className="font-semibold text-[14px]">Supply</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <Truck size="14" variant="TwoTone" />
                    <span className="font-semibold text-[14px]">Supply</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <Truck size="14" variant="TwoTone" />
                    <span className="font-semibold text-[14px]">Supply</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <Truck size="14" variant="TwoTone" />
                    <span className="font-semibold text-[14px]">Supply</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <Truck size="14" variant="TwoTone" />
                    <span className="font-semibold text-[14px]">Supply</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between text-muted py-2">
                  <div className="flex gap-3 items-center">
                    <Truck size="14" variant="TwoTone" />
                    <span className="font-semibold text-[14px]">Supply</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-border">
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 items-center">
              <div className="">
                <div className="size-9 rounded-full bg-primary overflow-hidden">
                  s
                </div>
              </div>
              <div className="">
                <div className="font-semibold text-[14px] line-clamp-1">
                  Savannah N
                </div>
                <div className="font-satoshi text-[10px] text-muted line-clamp-1">
                  Food Quality Manager
                </div>
              </div>
            </div>
            <button className="font-semibold text-[12px] text-error bg-error-light rounded-[4px] py-2 flex gap-2 items-center justify-center">
              <LogoutCurve size="16" variant="Bulk" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-red-500 w-full ps-[200px]">
        <div className="h-[1000px]">asdf</div>
        {/* <div className="font-bold text-2xl">Customer</div> */}
      </section>
    </div>
  );
}
