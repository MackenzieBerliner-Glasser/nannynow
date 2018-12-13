import {
  FETCH_APPOINTMENTS,
  FETCH_APPOINTMENTS_LOAD_START,
  FETCH_APPOINTMENTS_LOAD_END,
  FETCH_APPOINTMENTS_ERROR,
  FETCH_APPOINTMENT,
  FETCH_APPOINTMENT_LOAD_START,
  FETCH_APPOINTMENT_LOAD_END,
  FETCH_APPOINTMENT_ERROR
} from '../actions/appointment';

import {
  FETCH_NANNY,
  FETCH_NANNY_LOAD_START,
  FETCH_NANNY_LOAD_END,
  FETCH_NANNY_ERROR
} from '../actions/nanny';

import {
  FETCH_FAMILY,
  FETCH_FAMILY_LOAD_START,
  FETCH_FAMILY_LOAD_END,
  FETCH_FAMILY_ERROR
} from '../actions/family';

const initialState = {
  appointments: [],
  detail: null,
  loading: false,
  error: null,
  nanny: 'hi',
  family: 'hey'
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_APPOINTMENTS:
      return { appointments: payload };
    case FETCH_APPOINTMENTS_LOAD_START:
      return { ...state, loading: true };
    case FETCH_APPOINTMENTS_LOAD_END:
      return { ...state, loading: false };
    case FETCH_APPOINTMENTS_ERROR:
      return { ...state, error: payload };
    case FETCH_APPOINTMENT:
      return { detail: payload };
    case FETCH_APPOINTMENT_LOAD_START:
      return { ...state, loading: true };
    case FETCH_APPOINTMENT_LOAD_END:
      return { ...state, loading: false };
    case FETCH_APPOINTMENT_ERROR:
      return { ...state, error: payload };
    case FETCH_NANNY:
      return { detail: payload };
    case FETCH_NANNY_LOAD_START:
      return { ...state, loading: true };
    case FETCH_NANNY_LOAD_END:
      return { ...state, loading: false };
    case FETCH_NANNY_ERROR:
      return { ...state, error: payload };
    case FETCH_FAMILY:
      return { detail: payload };
    case FETCH_FAMILY_LOAD_START:
      return { ...state, loading: true };
    case FETCH_FAMILY_LOAD_END:
      return { ...state, loading: false };
    case FETCH_FAMILY_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}
