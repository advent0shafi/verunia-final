import { Check } from "lucide-react";

const filters = ["Office Chairs", "Excutive Chair", "Ergonomic Chair", "Visitor Table", "Gaming Chair"];

export default function SidebarFilter() {
    return (
        <div className="w-[272px] text-sm text-gray-300">
            <h4 className="mb-4 font-instrument font-normal not-italic text-[#1C1917] text-[20px] leading-[24px] tracking-normal">Chairs</h4>

            {filters.map(f => (
                <label key={f} className="flex items-center justify-between gap-3 mb-2 ">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="bg-black-900 text-black size-[20px]" />
                        <span className="font-instrument font-normal not-italic text-[#1C1917] text-[16px] leading-[24px] tracking-normal">
                            {f}
                        </span>

                    </div>
                    <div>
                        22
                    </div>

                </label>
            ))}
        </div>

    );
}