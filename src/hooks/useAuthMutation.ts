import { useMutation } from '@tanstack/react-query';

import { queryKeys } from '~/config/queryKeys';
import axios from '~/tools/axios';
export const useAuthMutation = () => {
  const mRegisterUser = useMutation({
    mutationKey: [queryKeys.userRegister],
    mutationFn: async (params: any) => {
      const res = await axios.post('/v1/auth/pages/sign-up', params);

      return res;
    },
  });

  const mUserLogin = useMutation({
    mutationKey: [queryKeys.userLogin],
    mutationFn: async (params: any) => {
      const res = await axios.post('/v1/auth/pages/sign-in', params);

      return res;
    },
  });

  const mUserLogout = useMutation({
    mutationKey: [queryKeys.userLogout],
    mutationFn: async (params: any) => {
      const res = await axios.post('/v1/auth/logout', params);

      return res;
    },
  });

  const mUserForgetPassword = useMutation({
    mutationKey: [queryKeys.userSendForgetPassword],
    mutationFn: async (params: any) => {
      const res = await axios.post('/v1/auth/pages/forgot-password', params);

      return res;
    },
  });

  const mUserResetPassword = useMutation({
    mutationKey: [queryKeys.userResetPassword],
    mutationFn: async (params: any) => {
      const res = await axios.post('/v1/auth/pages/reset-password', params);

      return res;
    },
  });

  return { mRegisterUser, mUserLogin, mUserLogout, mUserForgetPassword, mUserResetPassword };
};
