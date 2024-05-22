import Link from 'next/link';

export function Card({ title, company, date, description, companyUrl='#', city }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs"><Link href={companyUrl} target={ (companyUrl === "#") ? "_self" : "_blank" } className={ (companyUrl === "#") ? "hover:initial" : "hover:underline" }>{company}</Link> | {date}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">{city}</p>
            <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400 text-xs">
            <li><p>{description}</p></li>
            </ul>
        </div>
    )
}