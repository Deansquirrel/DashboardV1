import { IResponseMessage } from './message';

export interface ILoginInfo {
  username: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export const checkToken = async (
  token: string,
): Promise<IResponseMessage<ILoginResponse>> => {
  try {
    const response = fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      }),
    });
    const data = (await response).json();
    return data;
  } catch (e) {
    console.log('request failed', e);
    return {
      code: -1,
      msg: 'request failed' + e,
      data: undefined,
    };
  }
};

export const checkLogin = async (
  username: string,
  password: string,
): Promise<IResponseMessage<ILoginResponse>> => {
  try {
    const response = fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = (await response).json();
    return data;
  } catch (e) {
    console.log('request failed', e);
    return {
      code: -1,
      msg: e.message,
      data: undefined,
    };
  }
};
