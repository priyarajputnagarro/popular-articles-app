import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { appSelector } from "../redux";
import { useParams } from "react-router-dom";
import { IArticle } from "../utils/interfaces";

const ArticleDetails = () => {
  const params = useParams();
  const articles = useSelector(appSelector.getArticleList());
  const error = useSelector(appSelector.getError());
  const loading = useSelector(appSelector.getLoading());
  const [article, setArticle] = useState<IArticle | undefined>();

  useEffect(() => {
    articles?.length && getArticle();
  }, [articles]);

  const getArticle = () => {
    const article = articles?.find(
      (article: IArticle) => article?.id?.toString() === params?.id
    );
    setArticle(article);
  };

  const openArticle = () => {
    window.open(article?.url, "_blank");
  };

  const infoText = (title: string | undefined) => {
    return (
      title && (
        <div className="text-slate-700 text-base md:text-lg font-bold">
          {title}
        </div>
      )
    );
  };

  if (loading) {
    return (
      <div className="mt-10 px-5">
        <div className="h-10 bg-gray-200 mb-10" />
        <div className="h-64 bg-gray-200 mb-10" />
        <div className="h-5 bg-gray-200 mb-2" />
        <div className="h-5 w-1/2 bg-gray-200 mb-10" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-2xl font-semibold text-center text-red-700 mt-10">
        {error}
      </div>
    );
  }

  return (
    <div className="w-[95vw] md:w-[85vw] m-auto py-10">
      <div className="font-bold text-3xl mb-8 block md:hidden">
        {article?.title}
      </div>

      {article ? (
        <div className="flex flex-col-reverse md:flex-row md:mt-10">
          <div className="mr-10 md:basis-3/5">
            <div className="font-bold text-4xl hidden md:block">
              {article?.title}
            </div>
            <div className="text-slate-700 text-2xl my-10">
              {article?.abstract}
            </div>

            {infoText(article?.byline)}
            {infoText(`Source: ${article?.source}`)}
            {infoText(`Published on: ${article?.published_date}`)}

            <button
              className="underline font-bold text-slate-800 text-base md:text-lg mt-5 cursor-pointer"
              onClick={openArticle}
            >
              READ FULL ARTICLE
            </button>
          </div>

          {article?.media?.[0]?.["media-metadata"]?.length > 0 && (
            <div className="md:basis-2/5">
              <img
                src={
                  article?.media?.[0]?.["media-metadata"]?.[
                    article?.media?.[0]?.["media-metadata"]?.length - 1
                  ]?.url
                }
                alt="article_img"
                className="w-full mb-3"
              />
              <div className="text-slate-700 text-xs md:text-base">
                {article?.media[0]?.caption}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-4xl text-center">Article Not Found</div>
      )}
    </div>
  );
};

export default ArticleDetails;
