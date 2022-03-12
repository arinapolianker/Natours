import axios from 'axios';
import { showAlert } from './alert';

// Type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/users/update-my-password'
        : '/api/users/update-me';
    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
      // Refreshing user photo automatically
      // window.setTimeout(() => {
      //   location.reload();
      // }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
