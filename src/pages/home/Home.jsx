import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../dummyData";

import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" dataKey="Active User" grid />
      <div className="homeWidgets">
        <WidgetSm />
      </div>
    </div>
  );
}
