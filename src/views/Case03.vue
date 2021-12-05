<template>
  <v-row class="text-center">
    <v-col cols="12">
      <div style="text-align: center;">
        <h1>Подбор тарифов для потребителей НН</h1>
        <table
          style="display: inline-block;"
        >
          <thead>
              <th>Client ID</th>
              <th>Тарификация</th>
              <th>Лучшая тарификация</th>
          </thead>
          <tbody>
            <tr
              v-for="c in clients"
              :key="c.id"
            >
              <td v-text="c.id"></td>
              <td v-text="getTariff(c.tariff)"></td>
              <td v-text="getTariff(c.best_tariff)"></td>
            </tr>
          </tbody>
        </table>
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
  },
})
export default class About extends Vue {
  public clients: any = {};
  public client: string = '';

  public async created() {
    let resp = await axios.get('/data/case-03/rec_nn_tarif.json');
    this.clients = resp.data;
  }

  public getTariff(i: number) {
    if (i === 1) return 'однотарифная';
    else if (i === 2) return 'двухтарифная';
    else if (i === 3) return 'двухтарифная';
    else return '';
  }
}
</script>
