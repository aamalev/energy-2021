<template>
  <v-row class="text-center">
    <v-col cols="12">
      <div v-show="building == ''">
        <h1>Подбор счетчиков</h1>
        <h2>Выберите тип строения</h2>
        <p
          v-for="o, b in pus"
          :key="b"
        >
          <router-link
            :to="{ name: 'case-01', query: { building: b }}"
            v-text="b"
          ></router-link>
        </p>
      </div>

      <h1 v-show="building">Подбор счетчиков для типа строения: {{ building }}</h1>
      <article
        v-for="pu, tariff in (pus[building] || [])"
        :key="tariff"
      >
        <h2>Тип: {{ tariff }}</h2>
        <p
          v-for="b in pu"
          :key="b"
          v-text="b"
        ></p>
      </article>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';


@Options({
  components: {},
  watch: {
    '$route.query': 'update',
  },
})
export default class About extends Vue {
  public pus: any = {};
  public building: string = '';

  public async created() {
    let resp = await axios.get('/data/pu.json');
    this.pus = resp.data;
    this.update();
  }

  public async update() {
    const s = this.$route.query.building;
    this.building = s || '';
  }
}
</script>
