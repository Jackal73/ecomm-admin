import { loginStart, loginSuccess, loginFailure } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  addTicketFailure,
  addTicketStart,
  addTicketSuccess,
  deleteTicketFailure,
  deleteTicketStart,
  deleteTicketSuccess,
  getTicketFailure,
  getTicketStart,
  getTicketSuccess,
  updateTicketFailure,
  updateTicketStart,
  updateTicketSuccess,
} from "./ticketRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getTickets = async (dispatch) => {
  dispatch(getTicketStart());
  try {
    const res = await publicRequest.get("/tickets");
    dispatch(getTicketSuccess(res.data));
  } catch (err) {
    dispatch(getTicketFailure());
  }
};

export const deleteTicket = async (id, dispatch) => {
  dispatch(deleteTicketStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteTicketSuccess(id));
  } catch (err) {
    dispatch(deleteTicketFailure());
  }
};

export const updateTicket = async (id, ticket, dispatch) => {
  dispatch(updateTicketStart());
  try {
    // update
    dispatch(updateTicketSuccess({ id, ticket }));
  } catch (err) {
    dispatch(updateTicketFailure());
  }
};

export const addTicket = async (ticket, dispatch) => {
  dispatch(addTicketStart());
  try {
    const res = await userRequest.post(`/tickets`, ticket);
    dispatch(addTicketSuccess(res.data));
  } catch (err) {
    dispatch(addTicketFailure());
  }
};
