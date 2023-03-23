import React from "react";

const FilterComponent = () => {
  return (
    <>
      <div className="w-full float-right max-w-md">
        <div class="md:flex md:items-center mt-6">
          <div class="md:w-1/5">
            <label
              htmlFor="sort"
              className="mb-2 text-sm  text-gray-900 dark:text-white"
            >
              جستجو
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-lg">
        <div className="md:flex md:items-center mt-6">
          <div className="md:w-1/3">
            <label
              htmlFor="sort"
              className="mb-2 text-sm  text-gray-900 dark:text-white"
            >
              مرتب سازی بر اساس
            </label>
          </div>
          <div className="md:w-2/3">
            <select
              id="sort"
              className="rounded border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>تعداد آدرس</option>
              <option value="CA">نوع ایندکس</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
export default FilterComponent;
