import { useEffect, useState } from "react";
import "./home.css";
import Loader from "./loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
        // Set showNavbar to true with a delay of 500ms
        setTimeout(() => {
          setShowNavbar(true);
        }, 50);
      }, 4000);
    };
    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="bg-[#1E1F22] fixed inset-0 bg-cover bg-center scrollable-container">
      {/* <header className="bg-discord fixed top-0 w-full  h-[70px] shadow-lg">
      <a className="navbar-brand relative" href="?"><img className="h-auto w-auto max-h-[34px] max-w-124" src="/src/assets/Revendo-icon.png" /></a>
      </header> */}
      <nav
        className={`bg-[#5865F2] fixed top-0 w-full h-[85px] shadow-lg rounded-b-3xl z-10 ${
          showNavbar ? "slideDown" : "hidden-nav"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 mt-1">
          <a href="#" className="flex items-center">
            <img
              src="/src/assets/Revendo-icon.png"
              className="h-auto w-auto max-h-[56px] max-w-[56px] pr-2"
            />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              ReVendo
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg burger:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-white dark:text-white dark:hover:bg-white dark:focus:ring-white"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full burger:block burger:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 burger:flex-row burger:space-x-8 burger:mt-0 burger:border-0 burger:bg-transparent dark:bg-gray-800 burger:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#team"
                  className="block py-2 pl-3 pr-4 text-white  font-extrabold"
                >
                  Meet the team
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 pl-3 pr-4 text-white font-extrabold"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="block py-2 pl-3 pr-4 text-white font-extrabold"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="block py-2 pl-3 pr-4 text-white font-extrabold"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="text-black bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm pl-2.5 py-2 text-center mr-3 burger:mr-1 flex items-center w-40"
                >
                  <img
                    src="/src/assets/dlbtn.ico"
                    alt=""
                    className="mr-2 w-6 h-6"
                  />
                  <span className="flex-shrink-0">Download App</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex flex-col justify-start items-center">
        <Section id="home" className="pt-[120px]">
          <VerticalColumns>
            <HorizontalColumns>
              <Column className="text-center flex flex-col justify-center">
                <Box className="text-7xl text-white NotoSansJP font-semibold pb-10 tabletH:text-left">
                  Re:Vendo
                </Box>
                <Box className="text-2xl text-white text-left font-bold leading-10 font-outline-2 tracking-3 py-10 tabletH:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  quam velit, vulputate eu pharetra nec, mattis ac neque.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
                  velit, vulputate eu pharetra nec, mattis ac neque.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nulla quam velit,
                  vulputate eu pharetra nec, mattis ac neque.
                </Box>
                <VerticalColumns className="">
                  <HorizontalColumns className="md:flex-row items-center py-10 text-center">
                    <Column>
                      <Box className="rounded-3xl bg-discord border-discord border-4 py-5 w-72 text-center text-white font-black hover:bg-white hover:text-discord hover:border-none">
                        GET STARTED
                      </Box>
                    </Column>
                    <Column>
                      <Box className="rounded-3xl bg-discord border-discord border-4 py-5 w-72 text-center text-white font-black hover:bg-white hover:text-discord hover:border-none">
                        LEARN MORE
                      </Box>
                    </Column>
                  </HorizontalColumns>
                </VerticalColumns>
              </Column>
              <Column className="flex items-center justify-center">
                <Box>
                  <img
                    className="border-[13px] rounded-[85px] border-discord max-w-full max-h-[1200px]  imgH:max-w-[600px]  imgH:max-h-[700]"
                    src="https://i.pinimg.com/736x/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
                    alt=""
                  />
                </Box>
              </Column>
            </HorizontalColumns>
          </VerticalColumns>
        </Section>

        <Section id="about">
          <VerticalColumns>
            <HorizontalColumns>
              <Column className="bg-white border-[9px] h-[450px]  rounded-[85px] border-discord text-center flex flex-col p-6 mx-5 px-5  items-center m:w-1/2">
               <img className="w-[123px] h-[118px]" src="/src/assets/checkico.png" alt="" />
                <Box className="NotoSansJP font-black text-discord text-[36px] py-3">Feature One</Box>
                <Box className=" NotoSansJP font-black text-discord text-[20px] leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis felis convallis, rhoncus leo id, scelerisque purus. Ut auctor gravida nulla.</Box>
              </Column>
              <Column className="bg-white border-[9px] h-[450px]  rounded-[85px] border-discord text-center flex flex-col p-6 mx-5 px-5   items-center m:w-1/2">
              <img className="w-[123px] h-[118px]" src="/src/assets/flagico.png" alt="" />
                <Box className="NotoSansJP font-black text-discord text-[36px] py-3">Feature Two</Box>
                <Box className=" NotoSansJP font-black text-discord text-[20px] leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis felis convallis, rhoncus leo id, scelerisque purus. Ut auctor gravida nulla.</Box>
              </Column>
              <Column className="bg-white border-[9px] h-[450px]  rounded-[85px] border-discord text-center flex flex-col p-6 mx-5 px-5  items-center m:w-1/2">
              <img className="w-[123px] h-[118px]" src="/src/assets/starico.png" alt="" />
                <Box className="NotoSansJP font-black text-discord text-[36px] py-3">Feature Three</Box>
                <Box className=" NotoSansJP font-black text-discord text-[20px] leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis felis convallis, rhoncus leo id, scelerisque purus. Ut auctor gravida nulla.</Box>
              </Column>
            </HorizontalColumns>
                <HorizontalColumns>
                  <Column className="imgH:bg-white imgH:border-[9px] imgH:h-[420px]  imgH:rounded-[85px] imgH:border-discord imgH:flex imgH:mx-5 hidden ">
                  <Column className="text-center w-2/3  rounded-[85px] mx-16 my-5">
                    <Box className="mt-2 NotoSansJP font-black text-black text-[36px] py-3 text-left bigH:py-5 bigH:mt-5 ">Heading explaining the main benefit of ReVendo</Box>
                    <Box className="NotoSansJP font-black text-discord text-[20px] leading-[30px] text-left pt-3 bigH:pt-5">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatiis.
                    </Box>
                    <br></br>
                    <Box className="NotoSansJP font-black text-discord text-[20px] leading-[30px] text-left">
                    Ut auctor gravida nulla. Nam id erat elementum, accumsan dui non, porttitor lorem.
                    </Box>
                  </Column> 
                  <Column className="w-1/2">
                      <img className="w-[525px] h-[400px] rounded-[85px] bigH:w-[570px]"
                        src="https://i.pinimg.com/736x/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
                        alt=""
                      />
                  </Column>
                  </Column>
                </HorizontalColumns>
          </VerticalColumns>
        </Section>

        <Section id="blog">
          <VerticalColumns>
            <Column>
              <Box>TEXTTEXTTEXT</Box>
            </Column>
            <Column>
              <Box>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
              </Box>
            </Column>
            <HorizontalColumns>
              <Column>
                <Box>
                  <img
                    src="https://i.pinimg.com/736x/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
                    alt=""
                  />
                </Box>
              </Column>
              <Column>
                <Box>
                  <img
                    src="https://i.pinimg.com/736x/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
                    alt=""
                  />
                </Box>
              </Column>
              <Column>
                <Box>
                  <img
                    src="https://i.pinimg.com/736x/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
                    alt=""
                  />
                </Box>
              </Column>
            </HorizontalColumns>
            <Column>
              <Box>
                <img className="mx-auto" src="/src/assets/dlimg.png" alt="" />
              </Box>
            </Column>
          </VerticalColumns>
        </Section>

        <Section id="team">
          <VerticalColumns>
            <HorizontalColumns>
              <Column>
                <Box>Andriel Geomer . Gabriel</Box>
              </Column>
              <Column>
                <Box>Jasper Macaraeg </Box>
              </Column>
            </HorizontalColumns>
            <HorizontalColumns>
              <Column>
                <Box>John Kenneth Adriano</Box>
              </Column>
              <Column>
                <Box>John Maverick Clemente</Box>
              </Column>
            </HorizontalColumns>
            <HorizontalColumns>
              <Column>
                <Box>Daniel Custodio</Box>
              </Column>
              <Column>
                <Box>Daniel Sigue</Box>
              </Column>
            </HorizontalColumns>
            <HorizontalColumns>
              <Column>
                <Box>Ma Loelaida Clave</Box>
              </Column>
              <Column>
                <Box>May Pearl Rivera</Box>
              </Column>
            </HorizontalColumns>
          </VerticalColumns>
        </Section>
      </div>
    </div>
  );
}
type CommonProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

// FIRST DIV
const Section = ({ children, className, id }: CommonProps) => (
  <div
    className={
      "relative m-5 p-5 tabletH:mx-15 laptopH:mx-20 items-center " + className
    }
    id={id}
  >
    {children}
  </div>
);

//Second Div  CONTROL BELOW
const VerticalColumns = ({ children, className }: CommonProps) => (
  <div className={"flex flex-col gap-4 items-center " + className}> 
    {children}
  </div>
);

// Third Div  CONTROL ALL COLUMN/BOX DIV
const HorizontalColumns = ({ children, className }: CommonProps) => (
  <div className={"flex flex-col imgH:flex-row gap-4 " + className}>
    {children}
  </div>
);

//Fourth Div FOR CONTROL UNDER BOX DIV

const Column = ({ children, className }: CommonProps) => (
  <div className={" " + className}>{children}</div>
);

//Fifth Div
const Box = ({ children, className }: CommonProps) => (
  <div className={" " + className}>{children}</div>
);
