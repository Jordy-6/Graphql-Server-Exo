import { PrismaClient } from "@prisma/client";
import { FilmAPI } from "./datasources/FilmAPI";
import TrackAPI from "./datasources/TrackAPI";
import { AuthenticatedUser } from "./modules/auth";

export type DataSourceContext = {
    dataSources: {
      trackAPI: TrackAPI,
      filmAPI: FilmAPI,
      db: PrismaClient
    };
    user: AuthenticatedUser | null
  };
