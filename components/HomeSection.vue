<template>
  <section id="home">
    <div class="container shadow">
      <div class="vstack text-center">
        <div class="">
          <h1 class="fw-bolder text-white" style="font-size: xxx-large;">Bienvenue !</h1>
          <div class="d-flex align-items-lg-center justify-items-center flex-column flex-md-row">
            <div class="flex-shrink-1 flex-grow-0 d-flex justify-items-start align-items-center px-md-5 px-0"
              style="min-height:0; min-width: 96px; width: 100%; max-width: 360px;">
              <img src="~/assets/img/ka-lumieres-lampe-only.png" class="img-fluid d-none d-lg-block" alt="Ka lumières logo"
                style="height:auto; width:auto;">
            </div>
            <h3>Basée à Paris, l’entreprise Ka Lumières est le prestataire idéal pour assurer votre présence numérique en toute conformité.</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section#home {
  background: url('~/assets/img/ka-lumieres-home-bg.jpg') no-repeat center center;
  background-size: cover;
  padding: 50px 15px;
  color: white;
  padding: relative;
}

h3 {
  position: relative;
  z-index: +2;
}

h3::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Adjust opacity */
  z-index: -1;
} 

</style>