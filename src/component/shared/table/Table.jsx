import React from 'react'

export default function Table ({ columnItem, rowsItem, rowKey, classname }) {
  // data pattern that we should pass
  //  const rowKey = [ "row.id", "row.name", "row.famil"]; => thats for key of object row + keyname
  return (
    <div class={`w-full flex justify-center mx-auto ${classname}`}>
      <div class="flex flex-col w-full">
        <div class="w-full">
          <div class=" rounded-lg border border-[#D9D9D9]  h-[672px] overflow-scroll w-full">
            <table class="w-full rounded p-0 m-0" id="">
              <tr
                className="rounded"
                style={{ backgroundColor: '#FCFCFB', borderRadius: '5px' }}
              >
                {columnItem &&
                  columnItem.map((item) => {
                    return (
                      <th
                        class={`px-8 py-5 text-sm font-normal  ${item.class}`}
                      >
                        <span> {item.title}</span>
                      </th>
                    )
                  })}
              </tr>

              <tbody class="bg-black  border-[#0000000D]">
              {rowsItem &&
                rowsItem.map((row, index) => {
                  return (
                    <tr class="whitespace-nowrap table-border  mx-2">
                      {rowKey.map((item, index) => {
                        const key = item.split('.')[1]
                        return (
                          <td
                            class={`px-6 py-4 text-xs font-normal text-center text-gray-500 ${columnItem[index].class} `}
                          >
                            {row[key]}
                          </td>
                        )
                      })}
                      <div className=" m-auto w-full"/>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
