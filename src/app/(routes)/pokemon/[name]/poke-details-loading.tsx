export function PokemonDetailsLoading() {
  return (
    <div className="p-12 flex flex-col items-center md:flex-row gap-20 justify-between  border dark:border-gray-700 rounded-xl mx-4 md:mx-0 ">
      {/* PICTURE */}
      <div className="w-80 h-80 p-4  flex justify-center items-center  object-contain">
        <div className="animate-pulse dark:text-blue-100 dark:bg-slate-700  bg-blue-50  text-blue-700 rounded-full h-64 w-64"></div>
      </div>
      <div className="max-w-lg w-full px-4 ">
        <div className="px-4 sm:px-0">
          <div className="flex gap-2 items-center">
            <h3 className="text-2xl font-semibold leading-7 text-gray-900 dark:text-white"></h3>
            <span className="bg-gray-300 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 h-fit rounded dark:bg-gray-700 dark:text-gray-300"></span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4"></div>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-300">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Height</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white"></dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
              <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">Weight</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white"></dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
