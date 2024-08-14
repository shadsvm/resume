import {
  Github,
  Globe,
  Linkedin,
  LucideIcon,
  Mail,
  Phone,
  Printer,
} from "lucide-solid";
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
      <div class="flex text-black dark:text-white justify-between items-center">
        <h2 class="font-semibold">{company}</h2>
        <h3 class="font-semibold">{timeline}</h3>
      </div>
      <div class="flex justify-between items-center text-gray-800 dark:text-gray-300 mb-3">
        <h3>{position}</h3>
        <h4>{remote ? "remote" : "on-site"}</h4>
      </div>
      <p class="font-thin">{desc}</p>
      <h3 class=" text-gray-700 dark:text-gray-400 my-2">
        {tech && "Tech: " + tech}
      </h3>
    </div>
  );
};

export default function Home() {
  return (
    <main class="p-5 sm:py-20 mx-auto w-full max-w-2xl flex flex-col gap-16">
      <section class="flex flex-col-reverse sm:flex-row justify-between gap-20 sm:gap-10 text-sm">
        <div class="flex flex-col gap-4 max-w-xs">
          <div>
            <h1>Samuel Kaminski</h1>

            <p class="flex gap-1 justify-start items-center">
              <Globe size={16} />
              Poznan, Poland, CET
            </p>
          </div>
          <p>
            I’m a Full Stack Developer driven by a passion for technology and a
            love for bringing ideas to life. I guide products from concept to
            launch with a thoughtful, hands-on approach.
          </p>
          <div class="flex flex-col gap-1 mt-5">
            <button class="btn-link" onClick={() => window.print()}>
              <Printer size={16} />
              Print my resume
            </button>

            <a class="btn-link" href="mailto:contact@svm.engineer">
              <Mail size={16} />
              contact@svm.engineer
            </a>
            <a class="btn-link" href="tel:+48530643361">
              <Phone size={16} />
              +48 530-643-361
            </a>
          </div>
        </div>

        <div class="flex flex-row-reverse sm:flex-col items-center gap-4 p-5">
          <div class="w-16 h-16 sm:w-full sm:h-auto sm:max-w-40 rounded  overflow-hidden">
            <img
              src="/images/alsome.jpeg"
              class="aspect-square object-cover scale-150  "
              alt=""
            />
          </div>
          <div class="flex flex-col items-end gap-1">
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
          I bring concepts to life by guiding products from the initial idea to
          a successful launch. I start by working closely with stakeholders to
          define the project’s goals and vision. Through years of working on
          different products, I’ve learned how to deliver a final product that
          not only meets business needs but also provides a great user
          experience. My experience, combined with a dedication to continuous
          learning, makes me a reliable engineer who gets the job done
          efficiently.
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
