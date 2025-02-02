<template>
  <div class="bg-balance d-flex flex-column flex-nowrap justify-content-center justify-content-md-start align-items-center">
    <Header />
    <slot />
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');

/** set bootstrap font variable to merriweather */
body {
  --bs-font-sans-serif:  "Dancing Script", sans-serif;
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1.5rem;
}

html, body, #__nuxt{
  height: 100%;
  width: 100%;
}

.bg-balance {
  background: transparent;
  position: relative;
}

.ka-lampe {
  filter: brightness(1.1);
}

.text-yellow-gold-gradient {
  background: linear-gradient(90deg, rgba(255, 204, 5, 1), rgba(214, 133, 12, 1));
  background-clip: text;
  color: transparent;
}


</style> 
