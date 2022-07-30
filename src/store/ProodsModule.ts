export default {
  state: {
    proods_all: [] as any[],
  },
  mutations: {
  },
  actions: {
    getProods(state:any) {
      let keys = Object.keys(localStorage);
      keys = keys.filter((elem:any) => elem.includes('P_'));
      state.proods_all = keys.map((elem:any) => localStorage.getItem(elem));
      console.log(state.proods_all);
    },
    addProods(state:any, payload:any) {
      console.log(payload);
      let keys = Object.keys(localStorage);
      keys = keys.filter((elem:any) => elem.includes('P_'));
      const id = keys.length;
      const key = `P_${payload.name}${id}`;
      const prood = { ...payload, id };
      localStorage.setItem(key, prood);
      state.proods_all = [...state.proods_all, prood];
    },
  },
  modules: {
  },
  namespaced: true,
};
