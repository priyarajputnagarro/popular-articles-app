import { useDispatch, useSelector } from "react-redux";
import {
  appSelector,
  appStateActions,
  fetchArticleListCreator,
} from "../redux";
import { ChangeEvent, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const dateRange = useSelector(appSelector.getDateRange());

  useEffect(() => {
    dispatch(fetchArticleListCreator(dateRange));
  }, [dateRange]);

  const handleDropdown = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(appStateActions.setArticleList([]));
    dispatch(appStateActions.setDateRange(event.target.value));
  };

  return (
    <div className="py-6 px-3 md:px-24 bg-slate-700 text-white flex items-center">
      <h1 className="text-2xl md:text-4xl font-light">Most Popular Articles</h1>
      {location.pathname === "/" && (
        <div className="ml-auto">
          <select
            className="w-24 md:w-36 bg-transparent text-sm md:text-lg outline-none"
            onChange={handleDropdown}
          >
            <option className="text-slate-700" value="1">
              Today
            </option>
            <option className="text-slate-700" value="7">
              This Week
            </option>
            <option className="text-slate-700" value="30">
              This Month
            </option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Header;
