<template>
  <div class="quotes">
    <h1>All Books Quotes</h1>
    <!-- <p>{{ quotesList }}</p> -->
    <!-- <p>{{ metadataList }}</p> -->
    <p>puchu</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import quotes_complete from "@/db/quotes_complete.json";
import books_metadata from "@/db/books_metadata.json";
import getDataFromJSON from "@/utils/getDataFromJSON";
import Quote from "@/types/Quote";
import Metadata from "@/types/Metadata";

export default defineComponent({
  name: "Quotes",
  data: function () {
    return {
      quotesList: [] as Quote[],
      metadataList: [] as Metadata[],
    };
  },
  mounted() {
    this.quotesList = getDataFromJSON<Quote>(quotes_complete);
    this.metadataList = getDataFromJSON<Metadata>(books_metadata);
  },
});
</script>