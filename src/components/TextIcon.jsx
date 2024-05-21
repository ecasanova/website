import { Icon } from './Icon';

export function TextIcon({ type, text}) {
    return (
        <p className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <Icon type={type}/><span>{text}</span>
        </p>
    )
}