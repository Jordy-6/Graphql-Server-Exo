import { GraphQLResolveInfo } from 'graphql';
import { TrackModel, AuthorModel, FilmModel, PeopleModel } from './models';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photo: Scalars['String']['output'];
};

export type CreateUserReponse = {
  __typename?: 'CreateUserReponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type Doctor = {
  __typename?: 'Doctor';
  name?: Maybe<Scalars['String']['output']>;
  speciality?: Maybe<Speciality>;
};

export type Film = {
  __typename?: 'Film';
  id?: Maybe<Scalars['ID']['output']>;
  people: Array<Maybe<People>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type IncrementNumberOfLikesReponse = {
  __typename?: 'IncrementNumberOfLikesReponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  track?: Maybe<Track>;
};

export type IncrementTrackViewReponse = {
  __typename?: 'IncrementTrackViewReponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  track?: Maybe<Track>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<CreateUserReponse>;
  incrementNumberOfLikes: IncrementNumberOfLikesReponse;
  incrementTrackView: IncrementTrackViewReponse;
};


export type MutationCreateUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationIncrementNumberOfLikesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationIncrementTrackViewArgs = {
  id: Scalars['ID']['input'];
};

export type People = {
  __typename?: 'People';
  eyeColor?: Maybe<Scalars['String']['output']>;
  films: Array<Maybe<Film>>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  add: Scalars['Float']['output'];
  closestColor?: Maybe<Scalars['String']['output']>;
  divide?: Maybe<Scalars['Float']['output']>;
  doctors?: Maybe<Array<Maybe<Doctor>>>;
  getFilms: Array<Maybe<Film>>;
  getPeople: Array<Maybe<People>>;
  getTracks: Array<Track>;
  multiply: Scalars['Float']['output'];
  substract: Scalars['Float']['output'];
};


export type QueryAddArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};


export type QueryClosestColorArgs = {
  hexa: Scalars['String']['input'];
};


export type QueryDivideArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};


export type QueryDoctorsArgs = {
  specialities?: InputMaybe<Array<Speciality>>;
};


export type QueryMultiplyArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};


export type QuerySubstractArgs = {
  number1: Scalars['Float']['input'];
  number2: Scalars['Float']['input'];
};

export enum Speciality {
  Ophtalmologist = 'OPHTALMOLOGIST',
  Psychologist = 'PSYCHOLOGIST'
}

export type Track = {
  __typename?: 'Track';
  author?: Maybe<Author>;
  id: Scalars['ID']['output'];
  numberOfViews?: Maybe<Scalars['Int']['output']>;
  thumbnail: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Author: ResolverTypeWrapper<AuthorModel>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateUserReponse: ResolverTypeWrapper<CreateUserReponse>;
  Doctor: ResolverTypeWrapper<Doctor>;
  Film: ResolverTypeWrapper<FilmModel>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IncrementNumberOfLikesReponse: ResolverTypeWrapper<Omit<IncrementNumberOfLikesReponse, 'track'> & { track?: Maybe<ResolversTypes['Track']> }>;
  IncrementTrackViewReponse: ResolverTypeWrapper<Omit<IncrementTrackViewReponse, 'track'> & { track?: Maybe<ResolversTypes['Track']> }>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  People: ResolverTypeWrapper<PeopleModel>;
  Query: ResolverTypeWrapper<{}>;
  Speciality: Speciality;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Track: ResolverTypeWrapper<Omit<Track, 'author'> & { author?: Maybe<ResolversTypes['Author']> }>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Author: AuthorModel;
  Boolean: Scalars['Boolean']['output'];
  CreateUserReponse: CreateUserReponse;
  Doctor: Doctor;
  Film: FilmModel;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  IncrementNumberOfLikesReponse: Omit<IncrementNumberOfLikesReponse, 'track'> & { track?: Maybe<ResolversParentTypes['Track']> };
  IncrementTrackViewReponse: Omit<IncrementTrackViewReponse, 'track'> & { track?: Maybe<ResolversParentTypes['Track']> };
  Int: Scalars['Int']['output'];
  Mutation: {};
  People: PeopleModel;
  Query: {};
  String: Scalars['String']['output'];
  Track: Omit<Track, 'author'> & { author?: Maybe<ResolversParentTypes['Author']> };
  User: User;
};

export type AuthorResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  photo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserReponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateUserReponse'] = ResolversParentTypes['CreateUserReponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DoctorResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Doctor'] = ResolversParentTypes['Doctor']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  speciality?: Resolver<Maybe<ResolversTypes['Speciality']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilmResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Film'] = ResolversParentTypes['Film']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  people?: Resolver<Array<Maybe<ResolversTypes['People']>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncrementNumberOfLikesReponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['IncrementNumberOfLikesReponse'] = ResolversParentTypes['IncrementNumberOfLikesReponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  track?: Resolver<Maybe<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncrementTrackViewReponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['IncrementTrackViewReponse'] = ResolversParentTypes['IncrementTrackViewReponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  track?: Resolver<Maybe<ResolversTypes['Track']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserReponse']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'password' | 'username'>>;
  incrementNumberOfLikes?: Resolver<ResolversTypes['IncrementNumberOfLikesReponse'], ParentType, ContextType, RequireFields<MutationIncrementNumberOfLikesArgs, 'id'>>;
  incrementTrackView?: Resolver<ResolversTypes['IncrementTrackViewReponse'], ParentType, ContextType, RequireFields<MutationIncrementTrackViewArgs, 'id'>>;
};

export type PeopleResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['People'] = ResolversParentTypes['People']> = {
  eyeColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  films?: Resolver<Array<Maybe<ResolversTypes['Film']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  add?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<QueryAddArgs, 'number1' | 'number2'>>;
  closestColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryClosestColorArgs, 'hexa'>>;
  divide?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<QueryDivideArgs, 'number1' | 'number2'>>;
  doctors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Doctor']>>>, ParentType, ContextType, Partial<QueryDoctorsArgs>>;
  getFilms?: Resolver<Array<Maybe<ResolversTypes['Film']>>, ParentType, ContextType>;
  getPeople?: Resolver<Array<Maybe<ResolversTypes['People']>>, ParentType, ContextType>;
  getTracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  multiply?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<QueryMultiplyArgs, 'number1' | 'number2'>>;
  substract?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<QuerySubstractArgs, 'number1' | 'number2'>>;
};

export type TrackResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numberOfViews?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Author?: AuthorResolvers<ContextType>;
  CreateUserReponse?: CreateUserReponseResolvers<ContextType>;
  Doctor?: DoctorResolvers<ContextType>;
  Film?: FilmResolvers<ContextType>;
  IncrementNumberOfLikesReponse?: IncrementNumberOfLikesReponseResolvers<ContextType>;
  IncrementTrackViewReponse?: IncrementTrackViewReponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  People?: PeopleResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

