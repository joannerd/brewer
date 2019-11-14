import * as GuideAPIUtil from '../util/guide_api_util';

export const RECEIVE_ALL_GUIDES = "RECEIVE_ALL_GUIDES";
export const RECEIVE_GUIDE = "RECEIVE_GUIDE";
export const REMOVE_GUIDE = "REMOVE_GUIDE";

import { receiveErrors } from './session_actions';

const receiveGuides = (payload) => ({
  type: RECEIVE_ALL_GUIDES,
  payload
})
const receiveGuide = (payload) => ({
  type: RECEIVE_GUIDE,
  payload
})
const removeGuide = (guideId) => ({
  type: REMOVE_GUIDE,
  guideId
})

export const fetchGuides = () => dispatch => (
  GuideAPIUtil.fetchGuides()
    .then(payload => dispatch(receiveGuides(payload))
));

export const fetchGuide = (guideId) => dispatch => (
  GuideAPIUtil.fetchGuide(guideId)
    .then(payload => dispatch(receiveGuide(payload))
));

export const createGuide = (guide) => dispatch => (
  GuideAPIUtil.createGuide(guide)
    .then(payload => dispatch(receiveGuide(payload))
));

export const updateGuide = (guide) => dispatch => (
  GuideAPIUtil.updateGuide(guide)
    .then(payload => dispatch(receiveGuide(payload))
));

export const deleteGuide = (guideId) => dispatch => (
  GuideAPIUtil.deleteGuide(guideId)
    .then(res => dispatch(removeGuide(guideId))
));