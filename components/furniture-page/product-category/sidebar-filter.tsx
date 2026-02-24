'use client';

interface SidebarFilterProps {
    categoryName: string;
    labels: { name: string; count: number }[];
    selectedLabels: string[];
    onToggleLabel: (label: string) => void;
}

export default function SidebarFilter({ categoryName, labels, selectedLabels, onToggleLabel }: SidebarFilterProps) {
    if (!labels || labels.length === 0) return null;

    return (
        <div className="w-[272px] text-sm text-gray-300">
            <h4 className="mb-4 font-instrument font-normal not-italic text-[#1C1917] text-[20px] leading-[24px] tracking-normal capitalize">
                {categoryName}
            </h4>

            {labels.map(label => {
                const isSelected = selectedLabels.includes(label.name);
                return (
                    <label
                        key={label.name}
                        className="flex items-center justify-between gap-3 mb-2 cursor-pointer group"
                    >
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                className="bg-black-900 border-[#E5E1D6] text-black size-[20px] rounded accent-[#8B4513] cursor-pointer"
                                checked={isSelected}
                                onChange={() => onToggleLabel(label.name)}
                            />
                            <span className={`font-instrument font-normal not-italic text-[16px] leading-[24px] tracking-normal transition-colors
                                ${isSelected ? 'text-[#8B4513]' : 'text-[#1C1917] group-hover:text-[#8B4513]'}`}>
                                {label.name}
                            </span>
                        </div>
                        <div className="text-[#57534E] text-[14px]">
                            {label.count}
                        </div>
                    </label>
                );
            })}
        </div>
    );
}