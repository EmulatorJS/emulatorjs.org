<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: null
  },
  id: {
    type: String,
    default: null
  }
})

onMounted(() => {
  const script = document.createElement('script');
  script.src = props.src;
  if(props.id){
    script.id = props.id;
  }
  document.body.appendChild(script);
})
</script>
