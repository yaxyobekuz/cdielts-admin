import api from "./api";

export const usersApi = {
  getById: async (id) => await api.get(`/api/users/${id}`),
  update: async (data) => await api.put(`/api/users/me`, data),
  updateUser: async (id, data) => await api.put(`/api/users/${id}`, data),
  get: async (params) => await api.get(`/api/users`, { params }),
  updateAvatar: async (file, config = {}) => {
    const formData = new FormData();
    formData.append("avatar", file);
    return await api.put("/api/users/me/avatar", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      ...config,
    });
  },
};
