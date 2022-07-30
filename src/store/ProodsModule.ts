export default {
  state: {
    proods_all: [] as any[],
  },
  mutations: {
    changeIsCreateProodModal(state:any) {
      state.isCreateProodModal = !state.isCreateProodModal;
    },
  },
  actions: {
  },
  modules: {
  },
  namespaced: true,
};
