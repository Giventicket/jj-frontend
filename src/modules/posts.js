import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

const GET_POSTS = "posts/GET_POSTS";
const GET_POSTS_SUCCESS = "posts/GET_POSTS_SUCCESS";
const GET_POSTS_FAILURE = "posts/GET_POSTS_FAILURE";

const GET_POST = "posts/GET_POST";
const GET_POST_SUCCESS = "posts/GET_POST_SUCCESS";
const GET_POST_FAILURE = "posts/GET_POST_FAILURE";

export const getPosts = () => ({ type: GET_POSTS });
const getPostsSuccess = data => ({ type: GET_POSTS_SUCCESS, payload: data });
const getPostsFailure = error => ({
  type: GET_POSTS_FAILURE,
  error: true,
  payload: error,
});

export const getPost = id => ({ type: GET_POST, payload: id });
const getPostSuccess = data => ({ type: GET_POST_SUCCESS, payload: data });
const getPostFailure = error => ({
  type: GET_POST_FAILURE,
  payload: error,
  error: true,
});

const getAllPosts = () => axios.get(`/api/posts`);

function* getPostsSaga(action) {
  try {
    const response = yield call(getAllPosts);
    yield put(getPostsSuccess(response.data));
  } catch (e) {
    yield put(getPostsFailure(e));
  }
}

const getPostById = id => {
  console.log("wtf");
  return axios.get(`/api/posts/${id}`);
};

function* getPostSaga(action) {
  try {
    const response = yield call(getPostById, action.payload);
    yield put(getPostSuccess(response.data));
  } catch (e) {
    yield put(getPostFailure(e));
  }
}

export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
}

const initialState = {
  posts: null,
  post: null,
  loading: {
    posts: false,
    post: false,
  },
  error: {
    posts: null,
    post: null,
  },
};

const dummyState = {
  posts: [
    {
      _id: "6010a22cb579c11aaccc4fe1",
      title: "포스트 #39",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu...",
      publishedDate: "2021-01-26T23:13:48.795Z",
      __v: 0,
    },
    {
      _id: "6010a22cb579c11aaccc4fe0",
      title: "포스트 #38",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu...",
      publishedDate: "2021-01-26T23:13:48.794Z",
      __v: 0,
    },
    {
      _id: "6010a22cb579c11aaccc4fdf",
      title: "포스트 #37",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu...",
      publishedDate: "2021-01-26T23:13:48.794Z",
      __v: 0,
    },
    {
      _id: "6010a22cb579c11aaccc4fde",
      title: "포스트 #36",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu...",
      publishedDate: "2021-01-26T23:13:48.794Z",
      __v: 0,
    },
    {
      _id: "6010a22cb579c11aaccc4fdd",
      title: "포스트 #35",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu...",
      publishedDate: "2021-01-26T23:13:48.794Z",
      __v: 0,
    },
  ],
  post: {
    _id: "6010a22cb579c11aaccc4fe1",
    title: "포스트 #39",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu...",
    publishedDate: "2021-01-26T23:13:48.795Z",
    __v: 0,
  },
  loading: {
    posts: false,
    post: false,
  },
  error: {
    posts: null,
    post: null,
  },
};

function posts(state = dummyState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: { ...state.loading, posts: true },
        error: { ...state.error, posts: null },
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, posts: false },
        posts: action.payload,
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, posts: false },
        error: { ...state.error, posts: action.payload },
      };
    case GET_POST:
      return {
        ...state,
        loading: { ...state.loading, post: true },
        error: { ...state.error, post: null },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, post: false },
        post: action.payload,
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        loading: { ...state.loading, post: false },
        error: { ...state.error, post: action.payload },
      };
    default:
      return state;
  }
}

export default posts;
