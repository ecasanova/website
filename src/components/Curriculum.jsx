import { Card } from './Card';
import { Sidebar } from './Sidebar';
import { Skills } from './Skills';

export function Curriculum() {
  return (
    (
    <main className="bg-gray-100 dark:bg-gray-900;">
      <div className="fluid-container mx-auto px-4">
        <div className="grid md:grid-cols-[1fr_2fr]">
          <Sidebar />
          <div className="space-y-8 md:space-y-8 lg:space-y-8 md:overflow-scroll md:h-screen md:my-6 md:px-6 pt-4">
            <div>
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Skills
                  title="Frontend"
                  skills={["React / NextJs", "JavaScript / Typescript", "HTML/CSS", "Tailwind CSS", "Playwright / Jest"]}
                />
                 <Skills
                  title="Backend"
                  skills={["Node.js", "Express / NestJs", "MongoDB", "PostgreSQL / MySQL", "Prisma / TypeORM / Sequelize"]}
                />
                 <Skills
                  title="Tools"
                  skills={[ "Git / GitHub / GH Actions", "ChatGPT / Copilot", "Visual Studio Code", "Figma", "Jira / Confluence"]}
                />
                <Skills
                  title="DevOps"
                  skills={[ "AWS / Amplify / Cognito", "Docker / ECS", "EC2 / RDS / Serverless", "Lambda / S3 / CloudFront", "Vercel / Netlify / Cloudflare"]}
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
              <div className="space-y-6">
                <Card
                  title="Lead Software Engineer"
                  company="Stellar Elements an Amdocs Company"
                  companyUrl='https://www.stellarelements.com/'
                  date="Dec 2023 - Present - 6 mos"
                  city="Medellín, Colombia"
                  description="Promoted to Lead Software Engineer at Stellar Elements, an Amdocs company. Working on the development platform using React, Typescript, Serverless and Postgres. Manager of 4 engineers"
                />
                <Card
                  title="Senior Software Engineer, Manager"
                  company="Stellar Elements an Amdocs Company"
                  companyUrl='https://www.stellarelements.com/'
                  date="Jun 2023 - Dec 2023 - 6 mos"
                  city="Medellín, Colombia"
                  description="Working on headless websites using contentful and React, Promoted to Senior Software Engineer and Manager. Company Rebranded to Stellar Elements. Manager of 5 engineers."
                />
                 <Card
                  title="Senior Software Engineer, Manager"
                  company="projekt202 (Acquired by Amdocs)"
                  companyUrl='https://www.linkedin.com/company/projekt202/?originalSubdomain=co'
                  date="Sep 2022 - Jun 2023 - 10 mos"
                  city="Medellín, Colombia"
                  description="Promoted to Senior Software Engineer and Manager at ADK Group, a projekt202 company. Manager of 5 engineers."
                />
                 <Card
                  title="Senior Software Engineer"
                  company="ADK Group (Acquired by projekt202)"
                  companyUrl='https://www.adkgroup.com/'
                  date="Jul 2022 - Sep 2022 - 3 mos"
                  city="Medellín, Colombia"
                  description="Promoted to Senior Software Engineer at ADK Group, a projekt202 company."
                />
                <Card
                  title="Software Engineer"
                  company="projekt202 (Acquired by Amdocs)"
                  companyUrl='https://www.adkgroup.com/'
                  date="Jan 2022 - Jul 2022 - 7 mos"
                  city="Medellín, Colombia"
                  description="Software Developer at ADK Group, a projekt202 company.
                  Skills: React, NextJs, Headless CMS Contentful / Strapi, NodeJS, Wordpress, AWS, Vercel, Netlify, Hasura"
                />
                <Card
                  title="Full Stack Developer - Team Lead"
                  company="RV Dev"
                  companyUrl='https://www.rvdev.com/'
                  date="Jul 2020 - Jan 2022 - 1 yr 7 mos"
                  city="Medellín, Colombia"
                  description="Work in telehealth & ecommerce project in Shopify and Wordpress
                  Using custom app in react and integration with others systems (Payment Gateway, Identity Validation, EHR System, Customer Service Software)
                  Stack: React, Typescript, Node, Shopify, Wordpress, AWS
                  Tools: Klaviyo, Recharge, Georgias, Amazon Rekognition, Stripe Identity
                  Team leader of 4 engineers"
                />
                <Card
                  title="Software Engineer"
                  company="Cheil Worldwide - Samsung Colombia"
                  city="Bogotá, Colombia"
                  companyUrl='https://www.cheil.com.co/'
                  date="Jul 2019 - Jul 2020 · 1 yr 1 mo"
                  description="Fullstack developer for Samsung sales force monitoring app
                  Colombia, Panama, and India.
                  Skills: Angular 8, Material UI, REST, React, React Native"
                />
                <Card
                  title="Senior Full Stack Lead Developer"
                  company="Wikot"
                  companyUrl='https://wikot.com/'
                  city="Bogotá, Colombia"
                  date="Apr 2015 - Jun 2019 · 4 yrs 3 mos"
                  description="Management of digital technological development projects for clients of the
                  agency: Samsung / Cheil, Pernod Ricard, Volkswagen, Alcatel, Totto, Benotto, IDB,
                  seats
                  Cloud platform administration (Linode and AWS)
                  Development and integration of websites with Salesforce Marketing Cloud for the BID client
                  Wikot is a pioneering integrated creativity agency in the experience of combining traditional advertising with new communication technologies. The company's headquarters are in Caracas and it has a presence in Chile, Mexico, Peru, Ecuador, Miami, Panama, Spain and Colombia.
                  Skills: Angular, NodeJs, PHP, Wordpress, Apache, AWS
                  Manager of 4 personsManagement of digital technological development projects for clients of the agency: Samsung / Cheil, Pernod Ricard, Volkswagen, Alcatel, Totto, Benotto, IDB, seats Cloud platform administration (Linode and AWS) Development and integration of websites with Salesforce Marketing Cloud for the BID client Wikot is a pioneering integrated creativity agency in the experience of combining traditional advertising with new communication technologies. The company's headquarters are in Caracas and it has a presence in Chile, Mexico, Peru, Ecuador, Miami, Panama, Spain and Colombia. Skills: Angular, NodeJs, PHP, Wordpress, Apache, AWS Manager of 4 persons
                  Skills: AngularJS · Node.js · JavaScript"
                />
                <Card
                  title="Wordpress Developer - Freelancer"
                  company="Inspirulina"
                  companyUrl='https://www.inspirulina.com/'
                  date="Sep 2011 - Jun 2019 · 7 yrs 10 mos"
                  city="Miami, Florida"
                  description="Development, maintenance and support web portal www.inspirulina.com and www.elibravo.com
                  Administration and development of web platform based on Wordpress.
                  Cloud Server Administration: Rackspace, DigitalOcean.
                  Google Suite administration for email management.
                  AddServer installation and maintenance: OpenX, Revive, Google Adsense.
                  Skills: Wordpress, MySQL, PHP, DigitalOcean"
                />
                <Card
                  title="Web & Mobile Application Developer"
                  company="Ciencuadras.com"
                  companyUrl='https://www.ciencuadras.com/'
                  city="Bogotá, Colombia"
                  date="Nov 2014 - Apr 2015 · 6 mos"
                  description="Web portal development for the real estate sector
                  Skills: PHP, HTML, CSS, YII2, AWS, Google MapsWeb portal development for the real estate sector Skills: PHP, HTML, CSS, YII2, AWS, Google Maps"
                />
                <Card
                  title="Web Development Manager"
                  company="CINEX"
                  companyUrl='https://www.cinex.com.ve/'
                  date="Nov 2013 - Oct 2014 · 1 yr"
                  city="Caracas, Venezuela"
                  description="Direct multidisciplinary team for the Management of Innovation Projects and Adaptation of the
                  Cinex's technological and transactional sales platform.
                  Management of content projects and digital solutions in support of the different Managements of the Evenpro Group - Cinex.
                  Skills: PHP, MySQL, RestApi, Vista Cinema, Soap, Online payments.
                  Manager of 4 personsDirect multidisciplinary team for the Management of Innovation Projects and Adaptation of the Cinex's technological and transactional sales platform. Management of content projects and digital solutions in support of the different Managements of the Evenpro Group - Cinex. 
                  Skills: PHP, MySQL, RestApi, Vista Cinema, Soap, Online payments. Manager of 4 persons"/>
                <Card
                  title="Web Development Manager"
                  company="Evenpro"
                  companyUrl='https://www.evenpro.com/'
                  date="Feb 2012 - Nov 2013 · 1 yr 10 mos"
                  city="Caracas, Venezuela"
                  description="Lead the team in charge of the analysis, planning, design, development and
                  implementation of digital marketing campaigns in the web area, and social networks of
                  the company. Manager of 6 personsLead the team in charge of the analysis, planning, design,
                  development and implementation of digital marketing campaigns in the web area, and social networks of the company.
                  Manager of 6 persons"
                />
                <Card
                   title="Senior Web Developer"
                   company="Evenpro"
                   companyUrl='https://www.evenpro.com/'
                   city="Caracas, Venezuela"
                   date="Jun 2010 - Jan 2012 · 1 yr 8 mos"
                   description="Development of a content management system, applications and functionalities for the
                  construction of the new website of the company. Integration of plugins and widgets for
                  add functionalities within the web page, to share content with the
                  Facebook and Twitter communities."
                />
                <Card
                  title="Senior PHP Developer - Freelancer"
                  company="Hotel Shelter Suites"
                  companyUrl='https://www.hotel-shelter.com/'
                  city="Caracas, Venezuela"
                  date="Aug 2011 - Oct 2011 · 3 mos"
                  description="Development of a new web platform, with an online payment module for room reservations and hotel services. 
                  Management of room availability and reservations.
                  Skills: PHP, HTML, CSS, ecoomerce. Online payments"
                />
                 <Card
                  title="Senior PHP Developer - Freelancer"
                  company="Hotel Primera Avenida"
                  companyUrl='https://primeravenida.com/'
                  city="Caracas, Venezuela"
                  date="Aug 2011 - Oct 2011 · 3 mos"
                  description="Development of a new web platform, with an online payment module for room reservations and hotel services. 
                  Management of room availability and reservations.
                  Skills: PHP, HTML, CSS, ecoomerce. Online payments"
                />
                <Card
                  title="Senior Web Developer"
                  company="Otusnet"
                  city="Caracas, Venezuela"
                  date="Apr 2010 - May 2010 · 2 mos"
                  description="Development of a Marketplace platform for the exchange of goods and services, for a client Ministry of Technology of Venezuela
                  Skills: PHP, HTML, CSS, Symfony, JQuery, Boostrap, ecommerce."
                />
                <Card
                  title="Senior Web Developer PHP"
                  company="Divux Systems"
                  city="Caracas, Venezuela"
                  date="Apr 2009 - Mar 2010 · 1 yr"
                  description="Social network development based on symfony - www.divux.com
                  Skills: PHP, HTML, CSS, Symfony, JQuery, Boostrap"
                />
                <Card
                  title="Frontend Developer - Freelancer"
                  company="Flight Access Inc."
                  city="Panama City, Panama"
                  date="Jan 2009 - Dec 2009 · 1 yr"
                  description="Web development and integration with MasterCard payment gateway.
                  Creation of a system to collect information related to private air operations. (Request for company services such as Fligth Plans).
                  Skills: HTML, CSS, PHP, Javascript, Jquery."
                />
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
    </main>
    )
  )
}