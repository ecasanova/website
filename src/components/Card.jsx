import Link from 'next/link';

export function Card({ title, company, date, description, companyUrl='#', city, childs }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md my-4">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-xs"><Link href={companyUrl} aria-label={company + ' website'} target={ (companyUrl === "#") ? "_self" : "_blank" } className={ (companyUrl === "#") ? "hover:initial" : "hover:underline" }>{company}</Link> | {date}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">{city}</p>
            {description && (
                <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400 text-xs">
                    <li><p className='whitespace-pre-line'>{description}</p></li>
                </ul>
            )}
            {childs && childs.length > 0 && (
                <div className="mt-4 space-y-2 text-xs">
                    <p className="text-gray-500 dark:text-gray-400 text-xs my-4">Promotions or title changes in the same company:</p>
                    <ul className='ml-4'>
                        {childs.map((child, index) => (
                            <li className={`relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1 before:bg-gray-500 dark:before:bg-white before:w-2.5 before:h-2.5 before:rounded-full ${index !== childs.length - 1 ? 'after:content-[""] after:absolute after:left-[4px] after:top-2.5 after:w-0.5 after:h-full after:bg-gray-500 dark:after:bg-white' : ''}`} key={index}>
                                <Child {...child}  />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export function Child({ title, company, date, description, companyUrl='#', city }) {
    return (
        <div className="pb-4">
            <h4 className="text-sm font-bold">{title}</h4>
            <p className="text-gray-500 dark:text-gray-400 text-xs"><Link href={companyUrl} aria-label={company + ' website'} target={ (companyUrl === "#") ? "_self" : "_blank" } className={ (companyUrl === "#") ? "hover:initial" : "hover:underline" }>{company}</Link> | {date}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">{city}</p>
            {description && (
                <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400 text-xs ">
                    <li><p className='whitespace-pre-line'>{description}</p></li>
                </ul>
            )}
        </div>
    )
}