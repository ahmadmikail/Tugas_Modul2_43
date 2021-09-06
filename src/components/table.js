export default function Example(props) {
  const { data1, gambar, judultabel } = props;
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <p class="subpixel-antialiased text-2xl grid justify-items-center">{judultabel}</p>
            <table className="bg-red-200 border-2 border-red-500 min-w-full divide-y divide-gray-200"  >
              <thead className="bg-red-200 bg-gray-50 border-2 border-red-500">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                  >
                    NIM
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-red-300">
                {data1.map((item, index) => (
                  <tr key={item.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={gambar}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {item.nama}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.nim}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
