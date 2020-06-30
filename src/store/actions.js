const actions = {
  addInformations: (context, payload) => {
    context.commit('appendInformations', payload);
  },
};

export { actions };
