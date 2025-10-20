export const navItems = [
  // { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "self-motivated engineering professional with strong leadership qualities and a proven abilityto work across teams and organizations ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently Learning Devops and Cloud , Enthusiastic about continuous learning and adapting to emerging technologies to drive innovation and progress",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "DevOverflow",
    descOne:
      "full-stack web application to enhance knowledge sharing and collaboration.",
    descTwo:
      "The platform includes features such as a recommendation system for posts, AI-generated answers, and more.",
    descThree:
      " webhook-enabled database synchronization, it is optimized for SEO",
    img: "/devoverflow.PNG",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/MongoDB.svg", "/c.svg"],
    link: "https://stack-overflow-nextjs14-b980xmx2i-ahmed-heikals-projects.vercel.app",
  },
  {
    id: 2,
    title: "Microservices Blog Application",
    descOne:
      "scalable microservices-based blog system using an event-driven architecture.",
    descTwo:
      "Containerized services with Docker and orchestrated them using Kubernetes.",
    descThree:
      "ensure reliability, fault tolerance, and efficient data consistency across the system.",
    img: "/ms.PNG",
    iconLists: [
      "/docker-svgrepo-com.svg",
      "/kubernetes-svgrepo-com.svg",
      "/nodejs-logo-svgrepo-com.svg",
      "/express-svgrepo-com.svg",
    ],
    link: "https://github.com/AhmedHeikall/mini-microservices-app",
  },
  {
    id: 3,
    title: "AWS CI/CD Infrastructure Automation",
    descOne:
      "Automated AWS infrastructure and CI/CD pipelines using AWS CLI, Bash, and AWS CodePipeline suite",
    descTwo:
      "(CodeCommit, CodeBuild, CodeDeploy) for seamless multi-environment deployments.",
    descThree: "Provisioned infrastructure as code.",
    img: "/aws.PNG",
    iconLists: [
      "/aws-svgrepo-com.svg",
      "/aws-ec2-svgrepo-com.svg",
      "/aws-iam-svgrepo-com.svg",
    ],
    link: "https://github.com/AhmedHeikall/CI-CD-Project",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Bachelor's Degree in Computer Engineering",
    descOne:
      " strong foundation in software development, system design, cloud computing, and DevOps practices.",
    descTwo: "Experienced in data structures and algorithms.",
    descThree:
      "strong problem-solving, debugging, and teamwork skills, with a commitment to continuous learning and delivering efficient, high-quality software solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full-Stack Engineer",
    descOne:
      "proficient in React.js, Next.js, and Node.js/Express.js, with hands-on experience in both SQL and NoSQL databases.",
    descTwo:
      "Hands-on experience designing and implementing microservices and event-driven architectures.",
    descThree:
      "automated API testing using Postman, and frontend test automation using Selenium.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Proficient in programming languages",
    descOne: "Proficient in C, C++, Java, JavaScript, TypeScript, and Python.",
    descTwo:
      "solid experience in Object-Oriented Programming (OOP), Object-Oriented Design (OOD), and networking (IP/TCP).",
    descThree: "",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Cloud and DevOps",
    descOne:
      "Skilled in deploying and managing infrastructure using Docker, Kubernetes (K8s), and CI/CD pipelines.",
    descTwo:
      "Strong background in AWS cloud services, Linux automation, and CI/CD pipelines.",
    descThree:
      "applying industry best practices for scalability and reliability.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/AhmedHeikall",
  },

  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ahmed-heikal-875175236/",
  },
];
