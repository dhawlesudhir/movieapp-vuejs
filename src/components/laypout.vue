<template>
  <div>
    <form action="/action_page.php">
      <fieldset class="flex flex-row space-x-5">
        <label for="fname">Movie Title</label><br />
        <input type="text" id="movieName" name="movieName" /><br /><br />
        <input type="submit" value="Search" @click.prevent="search" />
      </fieldset>
    </form>
  </div>
  <movielist></movielist>
</template>

<script setup>
import movielist from "./movielist.vue";
import store from '../store/store';

   function search(){
       store.state.search = movieName.value;
    store.dispatch('search', movieName.value)
                .then((res)=>{
                    //no work with resa
                })
}

</script>
