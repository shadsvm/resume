import { Github, Globe, Linkedin, LucideIcon, Mail, Phone, Printer } from "lucide-solid";
import { experience } from "~/constant/experience";

const Experience = ({
  company,
  position,
  timeline,
  tech,
  desc,
  remote,
}: {
  company: string;
  position: string;
  timeline: string;
  tech: string;
  desc: string;
  remote: boolean;
}) => {
  return (
    <div class="">
      <div class="flex text-gray-900 dark:text-gray-100 justify-between items-center">
        <h3 class="text-lg font-semibold">{company}</h3>
        <h3 class="text-sm font-semibold">{timeline}</h3>
      </div>
      <div class="flex justify-between items-center text-gray-800 dark:text-gray-200 mb-3">
        <h3 class="">{position}</h3>
        <p class="">
          {remote ? "remote" : "on-site"}
        </p>
      </div>
      <p class="text-xs">{desc}</p>
      <p class="text-sm my-2">Tech: {tech}</p>
    </div>
  );
};



export default function Home() {
  return (
    <main class="p-5 py-20 mx-auto w-full max-w-2xl flex flex-col gap-16">
      <section class="flex text-sm">
        <div class="flex flex-col gap-4 basis-2/3">
          <div>
            <h1>Samuel Kamiński</h1>

            <p class="flex gap-1 justify-start items-center">
              <Globe size={16} />
              Poznan, Poland, CET
            </p>

          </div>
          <p>
            I’m a Full Stack Developer driven by a passion for technology and a love for bringing ideas to life.
            I guide products from concept to launch with a thoughtful, hands-on approach.
          </p>
          <div class="flex flex-col gap-1 mt-5">


            <a class="btn-link" href="mailto:contact@svm.codes">
              <Mail size={16} />
              contact@svm.codes
            </a>
            <a class="btn-link" href="tel:+48530643361">
              <Phone size={16} />
              +48 530-643-361
            </a>

          </div>
        </div>
        <div class="flex flex-col basis-1/3 gap-4 p-5">
          <img src="/images/me.jpeg" class="object-contain w-auto rounded-lg" alt="" />
          <div class="flex flex-col items-end gap-1">

            <button class="btn-link" onClick={() => window.print()}>
              <Printer size={16} />
              Print my resume
            </button>

            <a class="btn-link" href="https://github.com/shadsvm">
              <Github size={16} />
              shadsvm
            </a>

            <a class="btn-link" href="https://linkedin.com/u/sam-kmn">
              <Linkedin size={16} />
              sam-kmn
            </a>
          </div>
        </div>
      </section>

      <section class="">
        <h1>Experience</h1>
        <p>

          I bring concepts to life by guiding products from the initial idea to a successful launch.
          I start by working closely with stakeholders to define the project’s goals and vision.
          Through years of working on different products, I’ve learned how to deliver a final product that not only meets business needs but also provides a great user experience.
          My experience, combined with a dedication to continuous learning, makes me a reliable engineer who gets the job done efficiently.
        </p>
      </section>

      <section class="space-y-16">
        {experience.map((data) => (
          <Experience {...data} />
        ))}
      </section>
    </main>
  );
}
