import * as GuideAPIUtil from '../util/guide_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ALL_GUIDES = 'RECEIVE_ALL_GUIDES';
export const RECEIVE_GUIDE = 'RECEIVE_GUIDE';
export const RECEIVE_NEW_GUIDE = 'RECEIVE_NEW_GUIDE';
export const REMOVE_GUIDE = 'REMOVE_GUIDE';
export const CLEAR_NEW_GUIDE = 'CLEAR_NEW_GUIDE';
export const CLEAR_GUIDE = 'CLEAR_GUIDE';

const receiveGuides = (payload) => ({
  type: RECEIVE_ALL_GUIDES,
  payload,
});

const receiveGuide = (payload) => ({
  type: RECEIVE_GUIDE,
  payload,
});

const receiveNewGuide = (payload) => ({
  type: RECEIVE_NEW_GUIDE,
  payload,
});

const removeGuide = (guideId) => ({
  type: REMOVE_GUIDE,
  guideId,
});

export const clearNewGuide = () => ({
  type: CLEAR_NEW_GUIDE,
});

export const clearGuide = () => ({
  type: CLEAR_GUIDE,
});

export const fetchGuides = () => dispatch => (
  GuideAPIUtil.fetchGuides()
    .then(payload => dispatch(receiveGuides(payload))));

export const fetchGuide = (guideId) => dispatch => (
  GuideAPIUtil.fetchGuide(guideId)
    .then(payload => dispatch(receiveGuide(payload))));

export const fetchNewGuide = () => dispatch => (
  GuideAPIUtil.fetchNewGuide()
    .then(payload => dispatch(receiveNewGuide(payload))));

export const createGuide = (guide) => dispatch => (
  GuideAPIUtil.createGuide(guide)
    .then(payload => dispatch(receiveGuide(payload)),
      errors => dispatch(receiveErrors(errors))));

export const updateGuide = (guide) => dispatch => (
  GuideAPIUtil.updateGuide(guide)
    .then(payload => dispatch(receiveGuide(payload),
      errors => dispatch(receiveErrors(errors)))));

export const deleteGuide = (guideId) => dispatch => (
  GuideAPIUtil.deleteGuide(guideId)
    .then(() => dispatch(removeGuide(guideId))));
