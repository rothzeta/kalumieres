<template>
  <section id="home">
    <div class="consent-wrapper">
      <RGdprConsent />
    </div>
    <div class="vstack home-content text-center justify-content-around">
      <h1 class="fw-bolder home-title">Bienvenue !</h1>
      <div class="d-flex align-items-center flex-column flex-md-row home-section">
        <div class="home-logo-container">
          <img 
            src="~/assets/img/ka-lumieres-lampe-only.png" 
            class="img-fluid d-none d-lg-block home-logo" 
            alt="Ka Lumières logo"
          >
        </div>
        <h3 class="home-text p-lg-3">
          Basée à Paris, l’entreprise Ka Lumières est le prestataire idéal pour assurer votre présence numérique en toute conformité.
        </h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
section#home {
  position: relative;
  background: url('~/assets/img/ka-lumieres-home-bg.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 0;
  margin-top: 90px;
}

section#home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.home-content {
  position: relative;
  z-index: 2;
  padding: 50px 15px;
  min-height: 450px;
}

.consent-wrapper {
  position: relative;
  z-index: 3;
}

.home-title {
  font-size: xxx-large;
  color: white;
}

.home-logo-container {
  min-width: 96px;
  width: 100%;
  max-width: 360px;
  flex-shrink: 1;
  flex-grow: 0;
  padding: 0 1rem;
}

.home-logo {
  height: auto;
  width: auto;
}

@media (max-width: 768px) {
  section#home {
    margin-top: 0;
  }
}
</style>
