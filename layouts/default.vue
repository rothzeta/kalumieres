<template>
  <div
    class="bg-balance d-flex flex-column flex-nowrap justify-content-center justify-content-md-start align-items-center">
    <slot />
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');

/** set bootstrap font variable to merriweather */
body {
  --bs-font-sans-serif:  Merriweather, sans-serif;
}

.bg-balance::before {
  content: "";

  position: fixed;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;

  z-index: -1;
  display: block;
  background: border-box no-repeat fixed;
  background-position: center;
  background-size: cover;
  background-image: image-set( 
        url('~/assets/img/ka-lumieres-bg-md.jpeg') 1x,
        url('~/assets/img/ka-lumieres-bg-lg.jpeg') 2x,
        url('~/assets/img/ka-lumieres-bg.jpeg') 3x,
        );
  filter:  blur(1px) brightness(0.8);
}

.bg-balance {
  height: 100vh;
  background: transparent;
  position: relative;
}

.text-yellow-gold-gradient {
  background: linear-gradient(90deg, rgba(255, 204, 5, 1), rgba(214, 133, 12, 1));
  background-clip: text;
  color: transparent;
}


</style> 
