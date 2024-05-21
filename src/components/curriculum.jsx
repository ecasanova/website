import { Card } from './Card';
import { Skills } from './Skills';
import { TextIcon } from './TextIcon';
export function Curriculum() {
  return (
    (<main className="bg-gray-100 dark:bg-gray-900 py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] lg:gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-md">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
                <div>
                  <h1 className="text-2xl font-bold">Enrique Casanova</h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lead Engineer
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <TextIcon type='phone' text='+57 (310) 349-3540'></TextIcon>
                <TextIcon type='email' text='contact@enriquecasanova.com'></TextIcon>
                <TextIcon type='location' text='Medellín, Colombia'></TextIcon>
                <p className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+57 (310) 3493540</span>
                </p>
                <p className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>contact@enriquecasanova.com</span>
                </p>
                <p className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Medellín, Colombia</span>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
              <div className="space-y-6">
                <Card
                  title="Lead Software Engineer"
                  company="Stellar Elements an Amdocs Company"
                  date="Dec 2023 - Present - 6 mos"
                  description="Lead the development of a new e-commerce platform using React, Node.js, and MongoDB."
                ></Card>
                <Card
                  title="Senior Software Engineer"
                  company="Stellar Elements an Amdocs Company"
                  date="Jun 2023 - Dec 2023 - 6 mos"
                  description="Led a team of developers to build and launch a new e-commerce platform using React, Node.js, and MongoDB."
                ></Card>
                 <Card
                  title="Senior Software Engineer, Manager"
                  company="projekt202 (Acquired by Amdocs)"
                  date="Sep 2022 - Jun 2023 - 10 mos"
                  description="Led a team of developers to build and launch a new e-commerce platform using React, Node.js, and MongoDB."
                ></Card>
                 <Card
                  title="Senior Software Engineer"
                  company="projekt202 (Acquired by Amdocs)"
                  date="Jul 2022 - Sep 2022 - 3 mos"
                  description="Led a team of developers to build and launch a new e-commerce platform using React, Node.js, and MongoDB."
                ></Card>
                <Card
                  title="Software Engineer"
                  company="projekt202 (Acquired by Amdocs)"
                  date="Jan 2022 - Jul 2022 - 7 mos"
                  description="Led a team of developers to build and launch a new e-commerce platform using React, Node.js, and MongoDB."
                ></Card>
                <Card
                  title="Full Stack Developer - Team Lead"
                  company="RV Dev"
                  date="Jul 2020 - Jan 2022 - 1 yr 7 mos"
                  description="Full Stack Developer / Team leader.
                  Work in telehealth & ecommerce project in Shopify and Wordpress
                  Using custom app in react and integration with others systems (Payment Gateway, Identity Validation, EHR System, Customer Service Software)
                  Stack: React, Typescript, Node, Shopify, Wordpress, AWS
                  Tools: Klaviyo, Recharge, Georgias, Amazon Rekognition, Stripe Identity
                  Team leader of 4 engineers"
                ></Card>
                <Card
                  title="Mobile Application Developer"
                  company="G7 Pay"
                  date="Jan 2019 - Jul 2020 - 1 yr 7 mos"
                  description="Led a team of developers to build and launch a new e-commerce platform using React, Node.js, and MongoDB."
                ></Card>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <Card
                  title="Lead Engineer"
                  company="Company Y"
                  date="2020 - Present"
                  description="Led a team of developers to build and launch a new e-commerce platform using React, Node.js, and MongoDB."
                ></Card>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Skills
                  title="Frontend"
                  skills={["React", "JavaScript", "HTML/CSS", "Tailwind CSS"]}
                />
                 <Skills
                  title="Backend"
                  skills={["Node.js", "Express", "MongoDB", "PostgreSQL"]}
                />
                 <Skills
                  title="Tools"
                  skills={[ "Git", "GitHub", "Visual Studio Code", "Figma"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>)
  );
}