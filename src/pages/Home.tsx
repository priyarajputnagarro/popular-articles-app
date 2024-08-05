import Article from "../components/Article";
import { useSelector } from "react-redux";
import { appSelector } from "../redux";
import Shimmer from "../components/Shimmer";
import { IArticle } from "../utils/interfaces";

const Home = () => {
  const articles = useSelector(appSelector.getArticleList());
  const loading = useSelector(appSelector.getLoading());
  const error = useSelector(appSelector.getError());

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return (
      <div className="text-2xl font-semibold text-center text-red-700 mt-10">
        {error}
      </div>
    );
  }

  return (
    <div className="w-[90vw] md:w-[60vw] mt-12 m-auto">
      {articles?.length ? (
        articles?.map((article: IArticle) => (
          <Article key={article?.id} article={article} />
        ))
      ) : (
        <div className="text-4xl text-center">No Articles Found</div>
      )}
    </div>
  );
};

export default Home;
