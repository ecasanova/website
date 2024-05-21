import { Card } from './Card';
import { Sidebar } from './Sidebar';
import { Skills } from './Skills';

export function Curriculum() {
  return (
    (<main className="bg-gray-100 dark:bg-gray-900;">
      <div className="fluid-container mx-auto px-4">
        <div className="grid md:grid-cols-[1fr_2fr]">
          <Sidebar />
          <div className="space-y-8 md:space-y-8 lg:space-y-8 md:overflow-scroll md:h-screen md:my-6 md:px-6 sm:pt-4">
            <div>
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                <Skills
                  title="DevOps"
                  skills={[ "AWS", "Docker", "Kubernetes", "Jenkins"]}
                />
              </div>
            </div>
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
                  title="Software Engineer"
                  company="Cheil Worldwide · Full-time"
                  date="Jul 2019 - Jul 2020 · 1 yr 1 mo"
                  description="Fullstack developer for Samsung sales force monitoring app
                  Colombia, Panama, and India.
                  Skills: Angular 8, Material UI, REST, React, React Native"
                ></Card>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <Card
                title="Electronic Engineer"
                company="Universidad Central de Venezuela"
                date="2008"
              />
            </div>
            <br /><br />
          </div>
        </div>
      </div>
    </main>)
  )
}