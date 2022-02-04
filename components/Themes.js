import { ThemeData } from "../Data/ThemeData";
import ThemesComponet from "./ThemesComponet";

function Themes() {
  return (
    <div className="mt-20 relative">
      <h4 className="subHeading text-center text-4xl text-green-900 md:text-7xl">
        Themed Packages
      </h4>
      <div className="mt-10 p-2 grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ThemeData.map((item, index) => (
          <div key={index}>
            <ThemesComponet title={item.title} img={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Themes;
