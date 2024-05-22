export function Skills({ skills, title }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-bold">{title}</h3>
            <ul className="mt-2 space-y-1 text-gray-500 dark:text-gray-400 text-xs">
                {skills.map((skill, index) => (
                    <li key={index}>
                        <p>{skill}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}