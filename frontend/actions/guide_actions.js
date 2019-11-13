import * as GuideAPIUtil from '../util/guide_api_util';

export const RECEIVE_ALL_GUIDES = "RECEIVE_ALL_GUIDES";
export const RECEIVE_GUIDE = "RECEIVE_GUIDE";
export const REMOVE_GUIDE = "REMOVE_GUIDE";

const receiveGuides = (guides) => ({
  type: RECEIVE_ALL_GUIDES,
  guides
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
    .then(guides => dispatch(receiveGuides(guides)))
)
export const fetchGuide = (guideId) => dispatch => (
  GuideAPIUtil.fetchGuide(guideId)
    .then(payload => dispatch(receiveGuide(payload)))
)
export const createGuide = (guide) => dispatch => (
  GuideAPIUtil.createGuide(guide)
    .then(payload => dispatch(receiveGuide(payload)))
)
export const updateGuide = (guide) => dispatch => (
  GuideAPIUtil.updateGuide(guide)
    .then(payload => dispatch(receiveGuide(payload)))
)
export const deleteGuide = (guideId) => dispatch => (
  GuideAPIUtil.deleteGuide(guideId)
    .then(res => dispatch(removeGuide(guideId)))
)