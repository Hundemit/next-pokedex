import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

interface SearchFormProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchForm({ value, onChange }: SearchFormProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(inputValue);
  };

  return (
    <div className="relative">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input id="search" placeholder="Search the Pokedex..." className="pl-8 md:w-56 w-full" value={inputValue} onChange={handleInputChange} />
      <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
    </div>
  );
}
