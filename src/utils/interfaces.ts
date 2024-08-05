import { PayloadAction } from "@reduxjs/toolkit";

export interface IRootState {
  appState: IAppState;
}

export interface IAppState {
  articleList: Array<IArticle>;
  dateRange: string;
  loading: boolean;
  error: string | null;
}

export interface IFetchArticlesResponse {
  copyright: string;
  num_results: number;
  results: Array<IArticle>;
  status: string;
}

export interface FetchArticleListAction extends PayloadAction<string> {}

export interface IMediaMetadata {
  url: string;
  format: string;
  height: number;
  width: number;
}

export interface IMedia {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": IMediaMetadata[];
}

export interface IArticle {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: string | null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: IMedia[];
  eta_id: number;
}
