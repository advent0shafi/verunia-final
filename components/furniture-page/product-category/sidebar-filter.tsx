import { Check } from "lucide-react";

const filters = ["Office Chairs", "Excutive Chair", "Ergonomic Chair", "Visitor Table", "Gaming Chair"];

export default function SidebarFilter() {
    return (
       <aside className="w-64 text-sm text-gray-300">
  <h4 className="mb-4 text-white">Chairs</h4>

  {filters.map(f => (
    <label key={f} className="flex items-center gap-3 mb-2">
      <input type="checkbox" className="bg-black-900 text-black" />
      {f}
      <span className="w-4 h-4 border border-white rounded flex items-center justify-center">
        <Check className="w-3 h-3 text-white" />
      </span>
    </label>
  ))}
</aside>

    );
}