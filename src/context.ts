import { FilmAPI } from "./datasources/FilmAPI";
import { TrackAPI } from "./datasources/TrackAPI";

export type DataSourceContext = {
  dataSources: {
    trackAPI: TrackAPI;
    filmAPI: FilmAPI;
  };
};