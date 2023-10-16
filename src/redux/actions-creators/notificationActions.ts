
export const SUCCESS = 'SUCCESS';
export const FAILED = 'FAILED';
export const LOADING = "LOADING";
export const RESET = "RESET"
export const success = ({message}:{message:string}) => ({
  type: SUCCESS,
  message:message
});
export const failure = ({message}:{message:string}) => ({
  type: FAILED,
  message:message
});
export const loading = ({message}:{message:string}) => ({
  type: LOADING,
  message:message
});

export const reset = () => ({
    type: RESET,
  });



