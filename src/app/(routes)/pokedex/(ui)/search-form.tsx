import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Label } from "../../../../components/ui/label";
import { useStore } from "@/store/store";

export const SearchForm = () => {
  const { search, setSearch, setType } = useStore();
  return (
    <>
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />

      <Input
        id="search"
        placeholder="Search "
        className="pl-8 pr-20"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setType("all");
        }}
      />
      {search !== "" && (
        <div
          className="inline-flex items-center justify-center text-[14px] gap-1 absolute top-1/2 right-2 -translate-y-1/2 opacity-50 select-none cursor-pointer px-1 bg-gray-100 text-gray-800 font-medium rounded-sm dark:bg-gray-900 dark:text-gray-400 border border-gray-400"
          onClick={() => setSearch("")}>
          Clear
        </div>
      )}
    </>
  );
};
