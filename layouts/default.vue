<template>
  <div class="bg-balance d-flex flex-column flex-nowrap justify-content-center justify-content-md-start align-items-center">
    <RGdprConsent />
    <slot />
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

/** set bootstrap font variable to merriweather */
body {
  --bs-font-sans-serif:  Caveat, sans-serif;
  --bs-body-font-family: var(--bs-font-sans-serif);
}

html, body, #__nuxt, .bg-balance::before, .bg-balance{
  height: 100%;
  width: 100%;
}
.bg-balance::before {
  content: "";

  position: fixed;
  left: 0;
  right: 0;

  z-index: -1;
  display: block;
  background: border-box no-repeat fixed;
  background-position: center;
  background-size: cover;
  background-image: url('~/assets/img/ka-lumieres-bg-min.jpeg');
  filter: brightness(0.7);
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
