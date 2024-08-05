import { IArticle } from "../utils/interfaces";
import { useNavigate } from "react-router-dom";

const Article = ({ article }: { article: IArticle }) => {
  const imgUrl =
    article?.media?.[0]?.["media-metadata"]?.[
      article?.media?.[0]?.["media-metadata"]?.length - 1
    ]?.url;
  const navigate = useNavigate();

  const showArticleDetails = () => {
    navigate(`/article/${article?.id}`);
  };

  return (
    <div className="md:flex pb-5 mb-8 border-b border-slate-700 items-start">
      <div className="flex-1 mr-5 flex flex-col">
        <div className="font-bold text-xl md:text-2xl mb-3">
          {article.title}
        </div>
        <div className="text-slate-700 text-sm">{article?.byline}</div>
        <div className="text-slate-700 text-sm">
          Published on: {article?.published_date}
        </div>
        <button
          className="text-slate-700 underline cursor-pointer mt-3 text-sm"
          onClick={() => showArticleDetails()}
        >
          READ MORE
        </button>
      </div>
      {imgUrl ? (
        <img src={imgUrl} alt="article_img" className="w-full md:w-[210px]" />
      ) : (
        <div
          className="w-52 h-32 hidden md:block bg-gray-300"
          data-testid="placeholder_img"
        />
      )}
    </div>
  );
};

export default Article;
