import Navbar from "../components/Navbar";

function EditTask() {
  return (
    // <>
    //   <Navbar />

    //   <div>
    //     <form className="space-y-8">
    //       <fieldset className="border border-gray-300 rounded">
    //         <legend className="ml-4 px-1 text-[#9c9c9c] text-sm">
    //           Task Title
    //         </legend>

    //         <input
    //           type="text"
    //           placeholder="E.g Project Completion ..."
    //           className="w-full px-6 pb-4 outline-none text-sm"
    //         />
    //       </fieldset>

    //       <fieldset className="border border-gray-300 rounded">
    //         <legend className="ml-4 px-1 text-[#9c9c9c] text-sm">
    //           Description
    //         </legend>

    //         <textarea
    //           rows={6}
    //           placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sit in aliquam pretium. Diam consectetur at tincidunt sed non tempus faucibus posuere eu. Nisi, luctus turpis pharetra quis nunc nulla. At lectus faucibus mattis ante eleifend ac arcu. Nibh morbi adipiscing leo tempus non dolor viverra cras. Sapien in nulla cum fermentum auctor lectus orci. Felis tincidunt lacus, fermentum laoreet sit sit. Lacus, orci pretium, etiam justo lacus. Amet, ultrices eget auctor euismod vitae diam."
    //           className="w-[798px] h-[120px] px-6 pb-4 outline-none resize-none text-sm"
    //         />
    //       </fieldset>

    //       <fieldset className="border border-gray-300 rounded">
    //         <legend className="ml-4 px-1 text-[#9c9c9c] text-sm">Tags</legend>

    //         <div className="flex justify-between items-center px-6 py-4">
    //           <div className="flex gap-2">
    //             <span className="bg-[#292929] text-[#cccccc] text-xs px-2 py-1 rounded">
    //               Urgent
    //             </span>

    //             <span className="bg-[#292929] text-[#cccccc] text-xs px-2 py-1 rounded">
    //               Important
    //             </span>
    //           </div>

    //           <span className="text-[#9c9c9c] text-xl">▼</span>
    //         </div>
    //       </fieldset>

    //       <button
    //         type="submit"
    //         className="w-full bg-[#974fd0] text-white py-4 rounded"
    //       >
    //         Done
    //       </button>

    //       <div className="text-center">
    //         <a href="#" className="text-[#974fd0] text-sm">
    //           Back To Top
    //         </a>
    //       </div>
    //     </form>
    //   </div>
    // </>
    <>
      <Navbar />

      <div className="max-w-2xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-semibold mb-8">Edit Task</h1>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Task Title</label>

            <input
              type="text"
              defaultValue="FinTech Website Update"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Description</label>

            <textarea
              rows={6}
              defaultValue="Update the landing page design and improve responsiveness for mobile devices."
              className="w-full border rounded-lg p-3"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              sit in aliquam pretium. Diam consectetur at tincidunt sed non
              tempus faucibus posuere eu. Nisi, luctus turpis pharetra quis nunc
              nulla. At lectus faucibus mattis ante eleifend ac arcu. Nibh morbi
              adipiscing leo tempus non dolor viverra cras. Sapien in nulla cum
              fermentum auctor lectus orci. Felis tincidunt lacus, fermentum
              laoreet sit sit. Lacus, orci pretium, etiam justo lacus. Amet,
              ultrices eget auctor euismod vitae diam.
            </p>
          </div>

          <div>
            <label className="block mb-2 font-medium">Category</label>

            <select
              defaultValue="Work"
              className="w-full border rounded-lg p-3"
            >
              <option>Work</option>
              <option>Personal</option>
              <option>Urgent</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#974fd0] text-white py-3 rounded-lg"
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}

export default EditTask;
