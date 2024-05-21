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
                  <h1 className="text-2xl font-bold">John Doe</h1>
                  <p className="text-gray-500 dark:text-gray-400">Web Developer</p>
                </div>
              </div>
              <div className="space-y-2">
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
                  <span>+1 (555) 123-4567</span>
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
                  <span>john.doe@example.com</span>
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
                  <span>New York, USA</span>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-md">
                  <h3 className="text-lg font-bold">Front-End Developer</h3>
                  <p className="text-gray-500 dark:text-gray-400">Acme Inc. | 2019 - Present</p>
                  <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Developed and maintained responsive web applications using React, Redux, and Tailwind CSS.</li>
                    <li>
                      Collaborated with designers and backend developers to implement new features and improvements.
                    </li>
                    <li>
                      Participated in code reviews and pair programming to ensure code quality and best practices.
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-md">
                  <h3 className="text-lg font-bold">Web Developer Intern</h3>
                  <p className="text-gray-500 dark:text-gray-400">Startup X | 2018 - 2019</p>
                  <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>
                      Assisted in the development and maintenance of the companys website using HTML, CSS, and
                      JavaScript.
                    </li>
                    <li>
                      Participated in daily stand-up meetings and collaborated with the team to identify and resolve
                      issues.
                    </li>
                    <li>Gained experience in version control, project management, and deployment processes.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 shadow-md">
                  <h3 className="text-lg font-bold">Bachelor of Science in Computer Science</h3>
                  <p className="text-gray-500 dark:text-gray-400">University of Example | 2014 - 2018</p>
                  <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Graduated with a GPA of 3.8 out of 4.0.</li>
                    <li>Participated in various hackathons and coding competitions.</li>
                    <li>Served as a teaching assistant for the Introduction to Programming course.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-md">
                  <h3 className="text-lg font-bold">Frontend</h3>
                  <ul className="mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-md">
                  <h3 className="text-lg font-bold">Backend</h3>
                  <ul className="mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-md">
                  <h3 className="text-lg font-bold">Tools</h3>
                  <ul className="mt-2 space-y-1 text-gray-500 dark:text-gray-400">
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Visual Studio Code</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>)
  );
}
