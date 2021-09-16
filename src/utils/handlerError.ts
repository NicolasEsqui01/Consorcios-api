import { ResponseStatus } from "../interfaces/responses.interface";

const handlerError = (err: ResponseStatus): Object => {
  if (err.message) return err;
  return {
    status: 500,
    message: "We have internal problems, please try again",
  };
};

export default handlerError;
