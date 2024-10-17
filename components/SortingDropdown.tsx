interface SortingDropdownProps {
  onSortChange: (option: string) => void;
}

export default function SortingDropdown({ onSortChange }: SortingDropdownProps) {
  return (
    <select
      onChange={(e) => onSortChange(e.target.value)}
      className="border rounded-md p-2"
    >
      <option value="">Sort by</option>
      <option value="price-low-high">Price: Low to High</option>
      <option value="price-high-low">Price: High to Low</option>
      <option value="title">Title</option>
    </select>
  );
}