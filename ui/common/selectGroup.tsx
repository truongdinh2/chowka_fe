import { Listbox } from "@headlessui/react";
import { Fragment } from "react";
import * as React from "react";

function MultiSelect() {
  const options = ["Apple", "Banana", "Cherry", "Date"];
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const toggleSelected = (item: string) => {
    setSelectedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  return (
    <Listbox as="div" className="space-y-4">
      {({ open }) => (
        <>
          <Listbox.Label className="block text-lg">Fruits:</Listbox.Label>
          <Listbox.Options as="ul" className={`border rounded-md ${open ? 'block' : 'hidden'}`}>
            {options.map(item => (
              <Listbox.Option key={item} value={item} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    onClick={() => toggleSelected(item)}
                    className={`cursor-pointer select-none relative px-5 py-2 ${
                      active ? "bg-blue-600 text-white" : "text-gray-900"
                    }`}
                  >
                    {selected && <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>}
                    {item}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  );
}

export default MultiSelect;
