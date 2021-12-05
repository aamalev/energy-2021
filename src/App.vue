<template>
  <v-row class="text-center">
    <v-col cols="12">
      <router-link to="/">Главная</router-link> |
      <router-link :to="{name: 'case-01'}">Подбор счетчиков</router-link> |
      <router-link :to="{name: 'case-02'}">Рекомендация услуг</router-link> |
      <router-link to="/case-3">Подбор тарифа</router-link> |
      <router-link to="/case-4">Сегмент СН2</router-link> |
      <router-link to="/about">О сайте</router-link>
    </v-col>
  </v-row>
  <router-view/>
</template>
