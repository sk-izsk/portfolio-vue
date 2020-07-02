<template>
  <div id="myOffer">
    <h1>My Offer</h1>
    <div class="offering-container">
      <OfferingContainer class="frontend" :title="frontEnd.name" :offerings="frontEnd.offerings" />
      <OfferingContainer class="backend" :title="backEnd.name" :offerings="backEnd.offerings" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { OfferingContainer } from '../components/';
export default {
  name: 'MyOffer',
  components: {
    OfferingContainer,
  },
  data() {
    return {
      backEnd: {},
      frontEnd: {},
    };
  },
  computed: {
    ...mapState(['informations']),
  },
  beforeMount() {
    const { myOffers } = this.informations;
    if (myOffers) {
      this.backEnd = myOffers.backEnd;
      this.frontEnd = myOffers.frontEnd;
    }
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 20px 0px;
}

.offering-container {
  display: flex;
  flex-direction: row;
  padding: 0 20px;
}

.frontend {
  flex: 1;
  margin-right: 10px;
}

.backend {
  flex: 1;
  margin-left: 10px;
}

@media screen and (max-width: 784px) {
  .offering-container {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }
  .frontend {
    margin-right: 0px;
  }
  .backend {
    margin-left: 0px;
    margin-top: 10px;
  }
}
</style>
