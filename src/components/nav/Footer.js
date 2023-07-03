import { Typography } from "@material-tailwind/react";
function Footer() {
  return (
    <div className="flex flex-wrap h-10 bottom-0">
      <div className="w-full sticky bg-white mb-4">
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-y-2 bg-white text-center md:justify-between pb-4">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="text-lg font-bold text-red">
              Our office is located in Jacksonville but serves the entire state
              of Florida.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
