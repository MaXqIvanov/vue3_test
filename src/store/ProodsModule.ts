export default {
  state: {
    proods_all: [] as any[],
  },
  mutations: {
    sortingProod(state:any, payload:any) {
      console.log(payload);
      if (payload === 'По цене max') {
        state.proods_all.sort((a:any, b:any) => parseFloat(b.price.replace(/\s/g, '')) - parseFloat(a.price.replace(/\s/g, '')));
      }
      if (payload === 'По цене min') {
        state.proods_all.sort((a:any, b:any) => parseFloat(a.price.replace(/\s/g, '')) - parseFloat(b.price.replace(/\s/g, '')));
      }
      if (payload === 'По наименованию') {
        state.proods_all.sort((a:any, b:any) => {
          if (a.name < b.name) { return -1; }
          if (b.name > a.name) { return 1; }
          return 0;
        });
      }
    },
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
          if (p.id > v.id) {
            return p;
          }
          return v;
        });
        id = Number(currentId.id + 1);
      } else {
        id = 1;
      }
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
