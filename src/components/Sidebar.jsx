import { TextIcon } from './TextIcon'
import { Icon } from './Icon'
import Image from 'next/image'

import profilePic from '/public/me.jpg'

const years_of_experience = (new Date().getFullYear() - 2008) // 2008 is the year I graduated from college

export function Sidebar() {
    return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-md mt-6 sm:mt-6 md:mb-auto pt-6">
        <div className="space-y-4">
            <div className="flex items-center space-x-4">
            <Image src={profilePic} alt="Avatar" className="w-24 h-24 rounded-full object-cover shadow-lg"/>
            <div>
                <h1 className="text-2xl font-bold">Enrique Casanova</h1>
                <p className="text-gray-500 dark:text-gray-400">
                 Lead Engineer - Full Stack Developer
                </p>
            </div>
            </div>
            <div className="space-y-2">
            <TextIcon type='phone' text='+57 (310) 349-3540' href="tel:+573103493540"></TextIcon>
            <TextIcon type='mail' text='contact@enriquecasanova.com' href="mailto:contact@enriquecasanova.com"></TextIcon>
            <TextIcon type='location' text='Medellín, Colombia'></TextIcon>
            </div>
        </div>
        <div className="space-y-20 mt-4">
            <p className="text-gray-500 dark:text-gray-400 text-xs">
            Fullstack Developer (Frontend and Backend) with +{years_of_experience} years of experience in web & mobile development
            <br /> <br />
            As a seasoned Full Stack Web Developer, I specialize in building robust web applications using React and TypeScript. I have extensive experience in integrating both RESTful APIs and GraphQL, enabling efficient data interactions in complex software environments. 
            <br /> <br />
            My expertise extends to managing database systems, including RDS SQL databases and NoSQL solutions, ensuring data integrity and performance. I am adept at translating business requirements into technical solutions that are scalable, maintainable, and user-centric.
            </p>
        </div>
        <div className="space-y-4 mt-4">
            <Icon type='github' href="https://github.com/ecasanova" />
            <Icon type='linkedin' href="https://www.linkedin.com/in/ecasanovave/" />
            </div>
        </div>
    )
}