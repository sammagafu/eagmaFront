<template>
<Toast />
  <form @submit.prevent="voteForArtist">
    <button type="submit" class="text-white bg-primary hover:bg-primary/50 focus:outline-none focus:ring-4 font-semibold text-sm px-4 py-4 text-center w-full uppercase">Vote Now</button>
  </form>
</template>

<script setup>
import Toast from 'primevue/toast';
import instance from "@/service";
import { useRouter } from 'vue-router';
import { useToast } from "primevue/usetoast";
import { ref,defineProps } from 'vue'

  // Router
const router = useRouter();
const toast = useToast();


const props = defineProps({
  category: Object,
  artist: Object,
  award : Number
})



const voteForArtist = () => {
  const awardCategory = props.category.id
  const artist = props.category.id
  instance.post("nominees/votes/", {
          'award': awardCategory,
          'category': awardCategory,
          'voted_nominee': artist,
      }).then(response => {
          toast.add({ severity: 'success', summary: 'Thank you for voting', detail: 'Your vote is successfully submitted', life: 3000 });
          
      }).catch(error => {
        toast.add({ severity: 'error', summary: 'Voting Error', detail: 'You can vote only once in this category and award.', life: 3000 });
          if (error.response.status === 401) {
              router.push({ name: 'login' });
          }
          
      });
}

</script>
