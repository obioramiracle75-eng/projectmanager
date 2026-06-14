// import Navbar from "../components/Navbar";

// function NewTask() {
//   return (
//     <div>
//       <Navbar />
//       <form className="space-y-8">
//         <fieldset className="border border-gray-300 rounded">
//           <legend className="ml-4 px-1 text-[#9c9c9c] text-sm">
//             Task Title
//           </legend>

//           <input
//             type="text"
//             placeholder="E.g Project Defense, Assignment ..."
//             className="w-full px-6 pb-4 outline-none text-sm"
//           />
//         </fieldset>

//         <fieldset className="border border-gray-300 rounded">
//           <legend className="ml-4 px-1 text-[#9c9c9c] text-sm">
//             Description
//           </legend>

//           <textarea
//             rows={6}
//             placeholder="Briefly describe your task..."
//             className="w-[798px] h-[120px] px-6 pb-4 outline-none resize-none text-sm"
//           />
//         </fieldset>

//         <fieldset className="border border-gray-300 rounded">
//           <legend className="ml-4 px-1 text-[#9c9c9c] text-sm">Tags</legend>

//           <div className="flex justify-between items-center px-6 py-4">
//             <div className="flex gap-2">
//               <span className="bg-[#cccccc] text-[#9c9c9c] text-xs px-2 py-1 rounded">
//                 Urgent
//               </span>

//               <span className="bg-[#cccccc] text-[#9c9c9c] text-xs px-2 py-1 rounded">
//                 Important
//               </span>
//             </div>

//             <span className="text-[#9c9c9c] text-xl">▼</span>
//           </div>
//         </fieldset>

//         <button
//           type="submit"
//           className="w-full bg-[#974fd0] text-white py-4 rounded"
//         >
//           Done
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewTask;

import Navbar from "../components/Navbar";

function NewTask() {
  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <Navbar />

      <div className="w-[1001px] mx-auto py-10">
        {/* <h1 className="text-3xl font-semibold mb-8">New Task</h1>

        <form className="space-y-6">
          <fieldset>
            <legend className="ml-4 px-1 text-[#9c9c9c] text-sm">
              // Task Title //{" "}
            </legend>
            <input
              type="text"
              placeholder="E.g Project Defense, Assignment ..."
              className="w-full border rounded-sm border-[#b8b6b6] p-3"
            />
          </fieldset>

          <textarea
            rows={6}
            placeholder="E.g Briefly describe your task..."
            className="w-full border rounded-sm border-[#b8b6b6] p-3"
          />

          <select className="w-full border rounded-sm border-[#b8b6b6] p-3">
            <option value="urgent">Urgent</option>
            <option value="important">Important</option>
            <option value="personal">Personal</option>
          </select>

          <button className="w-full mt-8 bg-[#974fd0] text-white py-3 rounded">
            Done
          </button>
          <button
            type="button"
            onClick={goTop}
            className="text-[#974fd0] w-[128px] h-[32px]   flex items-center justify-center py-3 ml-[280px]"
          >
            Back To Top
          </button>
        </form> */}
        <form className="space-y-8">
          {/* Task Title */}
          <h1 className="text-3xl font-semibold mb-8"> New Task</h1>
          <fieldset className="border border-gray-300 rounded-md px-4 pb-4">
            <legend className="px-2 text-sm text-gray-500">Task Title</legend>

            <input
              type="text"
              placeholder="E.g Project Defense, Assignment..."
              className="w-full outline-none text-sm"
            />
          </fieldset>

          {/* Description */}
          <fieldset className="border border-gray-300 rounded-md px-4 pb-4">
            <legend className="px-2 text-sm text-gray-500">Description</legend>

            <textarea
              rows={6}
              placeholder="Briefly describe your task..."
              className="w-full outline-none resize-none text-sm"
            />
          </fieldset>

          {/* Tags */}
          <fieldset className="border border-gray-300 rounded-md px-4 pb-4">
            <legend className="px-2 text-sm text-gray-500">Tags</legend>

            <select className="w-full outline-none text-sm bg-transparent">
              <option value="urgent">Urgent</option>
              <option value="important">Important</option>
              <option value="personal">Personal</option>
            </select>
          </fieldset>

          <button
            type="submit"
            className="w-full bg-[#974fd0] text-white py-4 rounded-md"
          >
            Done
          </button>
          <button
            type="button"
            onClick={goTop}
            className="text-[#974fd0] w-[128px] h-[32px]   flex items-center justify-center py-3 ml-[280px]"
          >
            Back To Top
          </button>
        </form>
        ```
      </div>
    </>
  );
}

export default NewTask;
