import { Linkedin, Mail } from 'lucide-react';
import Layout from '../components/Layout';
import image from "../assets/avatar.jpg"
import Image from "../components/Image"
import GoogleScholar from "../assets/google-scholar.png"

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="bg-sidebar rounded-xl shadow-sm border border-muted overflow-hidden">
        <div className="md:flex">
          <div className="h-[25rem] sm:h-[40rem] md:h-auto w-full md:w-1/3">
            <Image
              className='w-full h-full object-cover object-top md:object-center'
              src={image}
              blurSrc={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAIAAAC5TEmyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFUlEQVR4nJ2UfWwTZRzHH+UdGXTrrXe73q3Xe+nLtet7e9f1fYONspW9wEa2dTCmIqCOMIOJcwamQoQxIpMSdEKyzCgGJwbFmGBkIUQEomFTmUnDgJGgiyiMhVFZ25nulrINJsiT54977nmez32/v5cDo48a8Xg8Hos98hj4b0YsGhUeY7HYaDz+hCBByNDg4I2BAUHak4ES997fu6fAZvQbNO3790UFddPgHg4SHB3vPOJJn7fVTrd4lCtI6FDrnnGPjw8SXGypXrXbz/e8s+V8Q82R54s3B3LvDN+dzuO01u6NxOqKl35Q5j2z7YWuV8o+Xle6rcR7pa8vGbvHBUWjsfa6YKjI2lnpOr7W92ntkvYKV3/3uf8HEsSfO7D95Lrco5XezmBO1/q8rqYNkaHbwvZjgcYKMPHNG/2X2oq5T2qLu5rqDxZaujs7RkdHR0ZGEiX6AGsqKB6Lj46dEfR/0dx0aKWvqz74YdD/+6Vw8v2DrEkgYfvu8N3BwaFb16/++uVHB2tLQn7rezlsqIg/3dYy/NdAOHx5cPDWg7m7DxLsnD51bomr1GUPFPHeGj1baTCscXrWOt31PtezesajzoLTSc7k3rm9NRL5Z2K4xkECPhKJBJauhp5R0jJbBmxEMyyYlEdRTk76YNiIwMYZAAVAJJqNp6eoWnaGJtbnOEhYn/zuDCnlGZmdlmfTOE/AOhzWKQgHhdkwWIcj+gwJm5gwK0dNTr7w5s3BpIhxUDSaAO1oapVlcErKReF2hnRSOJe4DGlRiU4utWGwnsI5CuclYrWc4NSM+4fvf0yKABN9VpZtpDEHLeMxWK8gnYzcQWI2ArVQOE/hHC2zqxkvIeUoROEx5SoIR0f7Z2MioklQgnTjz79znGU04YVhiySNVVNOYWoYl0bhVTMurdKnY/0ZkHpHwHn4paCJNDc27Eq6AUltF3v7Anz+a/68Cs6TOpdGEJsU46VSDsezZYRDTmQrGS8MGwoUmWcbg40riinUuqaqLpmr+6Ce8xdezfOdbqg+sbHgLXdWlVZVqDWUGrmVRusy1uQkNVaZVgqpq+y+5/zlbvMyFZ0TyA/ei9y7DxKKtf+nsw0+S8fG8nDzhit7Xh44sOmPfet/27rqYmNFzxtVZ7aUn9pcUu0roZUBVpFv1gXUtLe64sWHKAr3hotsvk25zk0F/nfXr+moq67mDTUaaXux9Wht7qnNpb1v1uwuWaxn86xaP2cqxGHzru17J8VICPad4cjqwGpkoTJNbILFukzEjCC213Mch8s9ocXsNjPytpuuZyEe15h1y/UqX9ny2mtXrk2tI0HUV8dO5LhWGdk8lvLQdC5HWZp9quY8/VotkQkSQwSAZBbCKh3ffP1tPDbWt1NaJAkeuj3k4AoRcRbLLBE/DQMA0lMUKbPplLmUJE0FidmFMxPM7gs/Jyvo4U3b2xvGkKy0OaRkET0PIOIFDI3bSamNxGy0jEclGmgRCQBo2RWaFiTErG1/ewqQoxKdJFUpWajEYAMjd1A4T8uyaZk9Q6zCITUATwWWlk/5KyW7fxxXkF8lmkVJUhlJqgIWqwnUpqTcYy3Ck5gNmi9DxUoC1rKE5XLf1TEfk0HC+lr/dY3CmZ6qSptPLwDoHADDYrWCdClIJyXjccQwC0DQApKAs7A01bHPj090NylrPd2/ZMJZKKSFFilEM2UzgBiAuQCIUucTcswmhfUAiNJFDC01wylMqLVtIuhfXgaD8is3xlkAAAAASUVORK5CYII='}
              alt="Doris Edmund Macha"
            />
          </div>
          <div className="md:w-2/3 p-4 sm:p-8 md:p-12 flex flex-col">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Doris Edmund Macha
            </h1>
            <div className="flex-grow max-w-none text-gray-700 dark:text-gray-300 flex flex-col gap-2 text-justify md:text-start">
              <p className='indent-10'>
                I hold a M.A in Economics and B.A (Hon) in Economics and Statistics from the
                University of Dar es Salaam. I am currently a PhD candidate in Economics and
                Public policy at Tufts University and Fletcher School of Law &amp; Diplomacy.
              </p>
              <p className='indent-10'>
                Before starting grad school, I was an Assistant Lecturer at Department of Applied
                Economics at the University of Dar es Salaam. Where I gained professional
                experience in research and teaching on projects related to Agricultural &amp; Food,
                Environment and Development Economics.
              </p>
              <p>
                My research areas of interest include:
              </p>
              <ul className='ml-12'>
                <li>Agricultural &amp; Food Economics</li>
                <li>Behavioral Economics</li>
                <li>Development Economics</li>
                <li>Environmental Economics</li>
              </ul>
            </div>
            <div className="flex h-fit justify-between md:justify-start flex-wrap gap-2 md:gap-4 mt-8">
              <a
                href="mailto:dorisma15@hotmail.com"
                className="flex items-center space-x-1 md:space-x-2 px-2 md:px-4 py-2 bg-accent hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-lg transition-colors"
              >
                <Mail className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
              </a>
              <a
                href="https://scholar.google.com/citations?user=_wMl4iQAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 md:space-x-2 px-2 md:px-4 py-2 bg-accent hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-lg transition-colors"
              >
                <img
                  src={GoogleScholar}
                  alt="Google Scholar"
                  className="h-4 w-4 bg-zinc-700 rounded-full"
                />
                <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">Google Scholar</span>
              </a>
              <a
                href="https://www.linkedin.com/in/doris-macha-8b758618b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 md:space-x-2 px-2 md:px-4 py-2 bg-accent hover:bg-gray-200 dark:hover:bg-zinc-700 rounded-lg transition-colors"
              >
                <Linkedin className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;