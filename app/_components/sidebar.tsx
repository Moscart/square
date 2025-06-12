import React from "react";
import {
  BatteryFull,
  Candle,
  Category2,
  Document,
  LogoutCurve,
  MouseSquare,
  Profile2User,
  Reserve,
  ShoppingCart,
  Truck,
  UserSquare,
} from "iconsax-reactjs";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-[200px] flex flex-col justify-between border-r border-border bg-white">
      <nav className="overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <div className="p-6">
          <div className="flex items-center gap-1">
            <div className="">
              <div className="size-[17.85px] bg-primary rounded-full relative mt-1">
                <div className="w-[7.68px] h-[15.75px] bg-primary rounded-tr-full absolute bottom-1/2 left-0"></div>
              </div>
            </div>
            <div className="text-primary font-[661] text-[27.98px]">square</div>
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
                <div className="float-start w-[18.5px] h-[18px] flex justify-center items-center rounded-full font-semibold text-white text-[10px] bg-linear-to-r from-[#EEA849] to-[#F46B45]">
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
              <div className="size-9 rounded-full bg-primary overflow-hidden relative">
                <Image
                  className="object-cover"
                  src={"/images/profile.jpeg"}
                  fill
                  alt="Profile"
                />
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
          <button className="font-semibold text-xs text-error-dark bg-error-light rounded-[4px] py-2 flex gap-2 items-center justify-center">
            <LogoutCurve size="16" variant="Bulk" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
