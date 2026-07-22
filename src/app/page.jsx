export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-900">

      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Tasks Manager</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
          + Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">To Do</h2>
          <div className="bg-gray-50 p-3 rounded border border-gray-200 mb-3 hover:shadow-md transition">
            <h3 className="font-semibold">{}</h3>
            <p className="text-sm text-gray-600 mt-1">{}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">In Progress</h2>
          <div className="bg-gray-50 p-3 rounded border border-gray-200 mb-3 hover:shadow-md transition">
            <h3 className="font-semibold">{}</h3>
            <p className="text-sm text-gray-600 mt-1">{}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Done</h2>

          <p className="text-sm text-gray-400 text-center mt-4">No tasks yet</p>
        </div>

      </div>

    </div>
  );
}