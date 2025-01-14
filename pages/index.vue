<template>
    <div class="vstack justify-content-center align-items-center w-100">
        <HomeSection />
        <ServicesSection />
        <HeroSection  />
        <AboutSection />
        <ContactSection no-mentions />
        <LogoSection class="d-flex d-lg-none" />
        <ContactSection mentions-only />
    </div>
</template>
<style lang="scss">
@import '~/assets/sass/app.scss';
</style>