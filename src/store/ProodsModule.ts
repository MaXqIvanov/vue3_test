export default {
  state: {
    proods_all: [] as any[],
  },
  mutations: {
  },
  actions: {
    getProods({
      commit, state,
    }:any, payload:any) {
      let keys = Object.keys(localStorage);
      keys = keys.filter((elem:any) => elem.includes('P_'));
      state.proods_all = keys.map((elem:any) => JSON.parse(String(localStorage.getItem(elem))));
      console.log(state.proods_all);
    },
    addProods({
      commit, state,
    }:any, payload:any) {
      console.log(payload);
      let keys = Object.keys(localStorage);
      keys = keys.filter((elem:any) => elem.includes('P_'));
      let id: number;
      if (state.proods_all.length > 0) {
        const currentId = state.proods_all.reduce((p:any, v:any) => {
          console.log(p.id);
          console.log(v.id);
          if (p.id > v.id) {
            return p;
          }
          return v;
        });
        console.log('this is currentId');
        console.log(currentId);
        id = Number(currentId.id + 1);
        console.log(id);
      } else {
        id = 1;
      }
      console.log(id);
      const key = `P_${id}`;
      const prood = { ...payload, id };
      localStorage.setItem(key, JSON.stringify(prood));
      state.proods_all = [...state.proods_all, prood];
    },
    deleteProod({
      commit, state,
    }:any, payload:any) {
      console.log(payload);
      localStorage.removeItem(`P_${payload}`);
      state.proods_all = state.proods_all.filter((elem:any) => elem.id !== payload);
    },
  },
  modules: {
  },
  namespaced: true,
};
