import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import common from "./common";

export const reducers = combineReducers({ common, posts, auth });
