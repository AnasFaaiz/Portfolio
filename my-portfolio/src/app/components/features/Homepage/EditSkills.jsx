"use client"
import Image from 'next/image';

const EditSkillsOverlay = ({ isOpen, onClose, categories, onUpdate }) => {
    if (!isOpen) return null;

    const handleToggleSkill = (categoryIndex, skillIndex) => {
        const newCategories = categories.map((category, cIndex) => ({
            ...category,
            skills: category.skills.map((skill, sIndex) => ({
                ...skill,
                selected: categoryIndex === cIndex && skillIndex === sIndex 
                    ? !skill.selected 
                    : skill.selected
            }))
        }));
        onUpdate(newCategories);
    };

    const saveAndClose = () => {
        // Ensure at least one skill is selected in each category
        const validCategories = categories.map(category => ({
            ...category,
            skills: category.skills.map(skill => ({
                ...skill,
                selected: skill.selected || false
            }))
        }));
        onUpdate(validCategories);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-[#1A1F2A] rounded-xl border border-gray-800 p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white">Edit Skills</h3>
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={saveAndClose}
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors text-white"
                        >
                            Save Changes
                        </button>
                        <button 
                            onClick={onClose}
                            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                        >
                            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div className="space-y-6">
                    {categories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="border border-gray-800 rounded-lg p-4">
                            <h4 className="text-lg font-semibold text-white mb-4 flex items-center justify-between">
                                <span>{category.category}</span>
                                <span className="text-sm text-gray-400">
                                    {category.skills.filter(s => s.selected).length} selected
                                </span>
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div 
                                        key={skillIndex} 
                                        onClick={() => handleToggleSkill(categoryIndex, skillIndex)}
                                        className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors
                                            ${skill.selected ? 'bg-blue-500/20 hover:bg-blue-500/30' : 'hover:bg-gray-800/50'}`}
                                    >
                                        <div className="w-8 h-8 relative">
                                            <Image
                                                src={skill.image}
                                                alt={skill.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className={`${skill.selected ? 'text-blue-400' : 'text-gray-300'}`}>
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EditSkillsOverlay;