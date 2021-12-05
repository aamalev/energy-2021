<template>
  <v-row class="text-center">
    <v-col cols="12">
      <div v-show="building == ''">
        <h1>Подбор услуг</h1>
        <h2>Выберите тип строения</h2>
        <p
          v-for="o, b in uslugi"
          :key="b"
        >
          <router-link
            :to="{ name: 'case-02', query: { building: b }}"
            v-text="b"
          ></router-link>
        </p>
      </div>
      <div v-show="uslugi[building]">
        <h1 v-show="building">Подбор услуг для типа строения: {{ building }}</h1>
        <h2>Основные услуги</h2>
        <p
          v-for="b in (uslugi[building] || [])"
          :key="b"
          v-text="b"
        ></p>
      </div>
      <div v-show="uslugi_new[building]">
        <h2>Дополнительные услуги</h2>
        <p
          v-for="b in (uslugi_new[building] || [])"
          :key="b"
          v-text="b"
        ></p>
      </div>
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
  public uslugi: any = {};
  public uslugi_new: any = {};
  public building: string = '';

  public async created() {
    let resp = await axios.get('/data/case-02/uslugi.json');
    this.uslugi = resp.data;
    resp = await axios.get('/data/case-02/uslugi_new.json');
    this.uslugi_new = resp.data;
    this.update();
  }

  public async update() {
    const s = this.$route.query.building;
    this.building = s || '';
  }
}
</script>
