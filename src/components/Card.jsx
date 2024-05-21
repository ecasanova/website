import Link from 'next/link';

export function Card({ title, company, date, description, companyUrl='#', city }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400"><Link href={companyUrl} target="_blank">{company}</Link> | {date}</p>
            <p className="text-gray-500 dark:text-gray-400">{city}</p>
            <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
            <li><p>{description}</p></li>
            </ul>
        </div>
    )
}