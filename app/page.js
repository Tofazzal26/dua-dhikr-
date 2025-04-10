import {
  BedSingle,
  BookOpen,
  Bookmark,
  ChevronDown,
  ClipboardPlus,
  HandHeart,
  HeartHandshake,
  House,
  LayoutGrid,
  Lightbulb,
  MessageSquare,
  Search,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f7f8fa]">
      <div className="lg:w-[1850px] mx-auto lg:pt-7">
        <div>
          <div className="flex gap-6">
            <div className="bg-white flex flex-col items-center justify-between lg:h-[700px] rounded-2xl py-4 px-4">
              <div>
                <h2 className="bg-[#1fa45b] px-3 py-2 rounded-[5px]">
                  <HeartHandshake color="#ffffff" />
                </h2>
              </div>
              <div className="space-y-3 lg:space-y-4">
                <h2 className="bg-[#e8f0f5] rounded-full py-2 px-2">
                  <HandHeart color="#868686" />
                </h2>
                <h2 className="bg-[#e8f0f5] rounded-full py-2 px-2">
                  <House color="#868686" />
                </h2>
                <h2 className="bg-[#e8f0f5] rounded-full py-2 px-2">
                  <LayoutGrid color="#868686" />
                </h2>
                <h2 className="bg-[#e8f0f5] rounded-full py-2 px-2">
                  <Lightbulb color="#868686" />
                </h2>
                <h2 className="bg-[#e8f0f5] rounded-full py-2 px-2">
                  <Bookmark color="#868686" />
                </h2>
                <h2 className="bg-[#e8f0f5] rounded-full py-2 px-2">
                  <ClipboardPlus color="#868686" />
                </h2>
                <h2 className="bg-[#e8f0f5] rounded-full py-2 px-2">
                  <MessageSquare color="#868686" />
                </h2>
                <h2 className="bg-[#e8f0f5] rounded-full py-2 px-2">
                  <BookOpen color="#868686" />
                </h2>
              </div>
              <div>
                <h2 className="bg-[#1fa45b] px-3 py-2 rounded-[5px]">
                  <HandHeart color="#ffffff" />
                </h2>
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
                <div className="col-span-5">
                  <div>
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg lg:text-2xl">Dua Page</h2>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search by Dua Name"
                          className="outline-none px-4 py-3 bg-white rounded-[10px] lg:w-[350px] text-sm"
                        />
                        <span className="bg-[#e8f0f5] py-[6px] px-[8px] rounded-[6px] absolute top-[4px] right-[4px]">
                          <Search color="#868686" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div>
                    <div className="flex justify-end items-center gap-2">
                      <Image
                        src={"/man.png"}
                        width={45}
                        height={45}
                        alt="profile"
                      />
                      <ChevronDown color="#868686" size={18} />
                    </div>
                    <div className="bg-white rounded-[32px] lg:mt-8 lg:h-[700px]">
                      <div className="p-4">
                        <h2 className="text-[20px] text-center my-6">
                          Settings
                        </h2>
                        <div className="space-y-4">
                          <div className="bg-[#f7f8fa] px-3 py-2 rounded-[8px]">
                            <div className="flex items-center gap-4">
                              <h2 className="bg-[#e8f0f5] rounded-full py-2 px-2">
                                <HandHeart color="#868686" />
                              </h2>
                              <h2 className="text-[#868686]">
                                Language Settings
                              </h2>
                            </div>
                          </div>
                          <div className="bg-[#f7f8fa] px-3 py-2 rounded-[8px]">
                            <div className="flex items-center gap-4">
                              <h2 className="bg-[#e8f0f5] rounded-full py-2 px-2">
                                <BedSingle color="#868686" />
                              </h2>
                              <h2 className="text-[#868686]">
                                General Settings
                              </h2>
                            </div>
                          </div>
                          <div className="bg-[#f7f8fa] px-3 py-2 rounded-[8px]">
                            <div className="flex items-center gap-4">
                              <h2 className="bg-[#e8f0f5] rounded-full py-2 px-2">
                                <LayoutGrid color="#868686" />
                              </h2>
                              <h2 className="text-[#868686]">Font Settings</h2>
                            </div>
                          </div>
                          <div className="bg-[#f7f8fa] px-3 py-2 rounded-[8px] relative">
                            <div className="flex items-center gap-4 parent">
                              <h2 className="bg-[#e8f0f5] rounded-full py-2 px-2">
                                <LayoutGrid color="#1FA45B" />
                              </h2>
                              <h2 className="text-[#1FA45B]">
                                Appearance Settings
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between border-r-[1px] border-l-[1px] border-b-[1px] border-[#e2e2e2] px-3 py-6 space-x-4">
                            <span className="text-gray-700 text-base font-medium">
                              Night Mode
                            </span>
                            <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                              <div className="block w-10 h-5 bg-gray-300 rounded-full"></div>
                              <div className="absolute left-0 top-0 w-6 h-5 bg-gray-500 rounded-full shadow-md transform transition-transform duration-200 ease-in-out"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
