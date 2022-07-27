<template>
  <v-footer dark color="white">
    <v-card flat tile class="white white--text text-center">
      <v-card-text>
    <v-divider></v-divider>
        <v-btn v-for="icon in icons" :key="icon" class="mx-2" icon color="black">
          <v-icon size="30px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
        Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>
      <v-divider></v-divider>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-twitter", "mdi-instagram"],
  }),
};
</script>

<style></style>
