"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  BadgeInfo,
  BedSingle,
  BookOpen,
  Bookmark,
  ChevronDown,
  ClipboardPlus,
  Copy,
  HandHeart,
  HeartHandshake,
  House,
  LayoutGrid,
  Lightbulb,
  MessageSquare,
  Search,
  Share2,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [activeSubCategoryId, setActiveSubCategoryId] = useState(1);
  const [mainSubCategoryId, setMainSubCategoryId] = useState(1);
  const [searchCategory, setSearchCategory] = useState("");
  const { data: subcategory = [] } = useQuery({
    queryKey: ["subcategory"],
    queryFn: async () => {
      const resp = await axios.get("http://localhost:4000/api/subcategories");
      return resp.data;
    },
  });

  const { data: dua = [] } = useQuery({
    queryKey: ["dua"],
    queryFn: async () => {
      const resp = await axios.get("http://localhost:4000/api/dua");
      return resp.data;
    },
  });

  const { data: category = [] } = useQuery({
    queryKey: ["category", searchCategory],
    queryFn: async () => {
      const resp = await axios.get(
        `http://localhost:4000/api/categories?search=${searchCategory}`
      );
      return resp.data;
    },
  });

  return (
    <div className="bg-[#f7f8fa] lg:p-0 p-2">
      <div className="lg:w-[1850px] mx-auto lg:pt-7">
        <div>
          <div className="flex gap-6">
            <div className="bg-white hidden lg:flex flex-col items-center justify-between lg:h-[700px] rounded-2xl py-4 px-4">
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
                      <div className="flex items-center gap-2">
                        <div className="lg:hidden flex cursor-pointer">
                          <h2 className="bg-[#1fa45b] px-2 py-1 rounded-[5px]">
                            <HeartHandshake color="#ffffff" />
                          </h2>
                        </div>
                        <h2 className="text-base lg:text-2xl">Dua Page</h2>
                      </div>
                      <div className="flex items-center gap-2">
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
                        <div className="lg:hidden cursor-pointer flex justify-end items-center gap-2">
                          <Image
                            src={"/man.png"}
                            width={30}
                            height={30}
                            alt="profile"
                          />
                          <ChevronDown color="#868686" size={18} />
                        </div>
                      </div>
                    </div>
                    <div className="lg:mt-8">
                      <div className="grid grid-cols-1 md:gap-4 lg:gap-6 md:grid-cols-5 lg:grid-cols-4">
                        <div className="lg:col-span-1 md:col-span-2">
                          <div className="bg-white rounded-[10px]">
                            <div>
                              <h2 className="text-white bg-[#1FA45B] text-center rounded-t-[10px] py-3">
                                Category
                              </h2>
                              <div className="relative p-3">
                                <input
                                  type="text"
                                  placeholder="Search by Categories"
                                  className="outline-none px-10 py-3 bg-white rounded-[10px] border-[2px] border-[#E2E2E2] w-full text-sm"
                                  value={searchCategory}
                                  onChange={(e) =>
                                    setSearchCategory(e.target.value)
                                  }
                                />
                                <span className="absolute top-[24px] left-[25px]">
                                  <Search color="#868686" size={22} />
                                </span>
                              </div>
                              <div className="p-3">
                                <div className="space-y-3">
                                  {category?.map((item, idx) => (
                                    <div key={item?.id}>
                                      <button
                                        onClick={() =>
                                          setOpenCategoryId(
                                            openCategoryId === item.cat_id
                                              ? null
                                              : item.cat_id
                                          )
                                        }
                                        className={`p-2 w-full rounded-[10px] cursor-pointer transition ${
                                          openCategoryId === item.cat_id
                                            ? "bg-gray-100"
                                            : "bg-white"
                                        }`}
                                      >
                                        <div className="flex justify-between items-center">
                                          <div className="flex gap-4">
                                            <div className="bg-[#cfe0e5] rounded-[10px] items-center p-2 w-[48px]">
                                              <Image
                                                src={"/Introduction.svg"}
                                                alt="logo"
                                                width={30}
                                                height={30}
                                              />
                                            </div>
                                            <div>
                                              <div className="text-start">
                                                <h2 className="text-[#1FA45B]">
                                                  {item?.cat_name_en}
                                                </h2>
                                                <h2 className="text-sm text-[#7E7E7E]">
                                                  Subcategory:{" "}
                                                  {item?.no_of_subcat}
                                                </h2>
                                              </div>
                                            </div>
                                          </div>
                                          <div>
                                            <h2>{item?.no_of_dua}</h2>
                                            <h2 className="text-sm text-[#7E7E7E]">
                                              Dua
                                            </h2>
                                          </div>
                                        </div>
                                      </button>
                                      <div>
                                        {openCategoryId === item.cat_id && (
                                          <div className="my-2">
                                            {subcategory
                                              ?.filter(
                                                (sub) =>
                                                  sub.cat_id === item.cat_id
                                              )
                                              ?.map((sub) => (
                                                <button
                                                  key={sub?.id}
                                                  onClick={() =>
                                                    setActiveSubCategoryId(
                                                      sub?.id
                                                    )
                                                  }
                                                  className={`w-full text-start dot px-3 relative ml-4 py-2 rounded-md block transition cursor-pointer ${
                                                    activeSubCategoryId ===
                                                    sub.id
                                                      ? " text-[#1FA45B] font-semibold"
                                                      : "hover:text-[#1FA45B]"
                                                  }`}
                                                >
                                                  <span
                                                    onClick={() =>
                                                      setMainSubCategoryId(
                                                        sub?.subcat_id
                                                      )
                                                    }
                                                    className="circle"
                                                  >
                                                    {sub.subcat_name_en}
                                                  </span>
                                                </button>
                                              ))}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lg:col-span-3 md:col-span-3">
                          {/* main content here */}
                          <div>
                            <div className="bg-white rounded-[10px] px-4 py-3">
                              <h2>
                                <span className="text-[#1FA45B]">Section:</span>{" "}
                                The servant is dependent on his Lord
                              </h2>
                            </div>
                            <div className="mt-4 space-y-4">
                              {/* main */}
                              {dua
                                ?.filter(
                                  (item) => item.subcat_id === mainSubCategoryId
                                )
                                ?.map((allDua, idx) => (
                                  <div
                                    key={idx}
                                    className="bg-white rounded-[10px]"
                                  >
                                    <div className="p-4">
                                      <div className="flex items-center gap-2">
                                        <Image
                                          src={"/allah.svg"}
                                          width={30}
                                          height={30}
                                          alt="allahu"
                                        />
                                        <h2 className="text-[#1FA45B]">
                                          {allDua.dua_name_en}
                                        </h2>
                                      </div>
                                      <p className="text-[#393939] my-4 lg:my-7">
                                        {allDua.top_en}
                                      </p>
                                      <h1 className="text-right text-2xl text-[#393939]">
                                        {" "}
                                        {allDua?.dua_arabic}{" "}
                                      </h1>
                                      {allDua.transliteration_en ? (
                                        <>
                                          <h1 className="text-[#393939] my-4">
                                            {" "}
                                            <span className="text-black">
                                              Transliteration:
                                            </span>{" "}
                                            <i>{allDua?.transliteration_en}</i>
                                          </h1>
                                          <h1 className="text-[#393939] my-4">
                                            {" "}
                                            <span className="text-black">
                                              Translation:
                                            </span>{" "}
                                            {allDua?.translation_en}
                                          </h1>
                                        </>
                                      ) : (
                                        ""
                                      )}

                                      <h2 className="text-[#1FA45B]">
                                        Reference:
                                      </h2>
                                      <h2 className="text-[#393939]">
                                        {allDua.refference_en}
                                      </h2>
                                      <div className="flex justify-between items-center mt-6">
                                        <div>
                                          <Image
                                            src={"/play.png"}
                                            width={50}
                                            height={50}
                                            alt="play"
                                            className="cursor-pointer"
                                          />
                                        </div>
                                        <div className="flex items-center gap-4 lg:gap-8">
                                          <Copy color="#868686" />
                                          <Bookmark color="#868686" />
                                          <Lightbulb color="#868686" />
                                          <Share2 color="#868686" />
                                          <BadgeInfo color="#868686" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="lg:block hidden">
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
