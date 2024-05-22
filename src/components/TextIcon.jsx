import { Icon } from './Icon';
import Link from 'next/link';

export function TextIcon({ type, text, href="#" }) {
    return (
        <p className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-xs">
            <Icon type={type} href={href}/><span><Link href={href} className={ (href === "#") ? "hover:initial" : "hover:underline" } target={(href === "#") ? "_self": "_blank" }>{text}</Link></span>
        </p>
    )
}