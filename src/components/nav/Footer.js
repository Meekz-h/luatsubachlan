import { Typography } from "@material-tailwind/react";
function Footer() {
  return (
    <div className="flex flex-wrap h-10">
      <div className="w-full sticky bg-white mb-4">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-y-2 bg-white text-center md:justify-between pb-4">
          <div className="w-full max-w-screen-xl mx-auto">
            <Typography
              color="black"
              className="mx-auto text-center text-[25px] md:justify-between font-light items-center mb-4"
            >
              &copy; 2023 Luật Sư Bach Lan
            </Typography>
          </div>

          <ul className="hidden md:flex flex-wrap items-center gap-y-2 gap-x-6 mr-4 mb-2">
            <li>
              <Typography
                as="a"
                href="/contact"
                color="black"
                className="font-light text-[25px]transition-colors  focus:text-orange-500 hover:text-orange-600"
              >
                Contact
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
