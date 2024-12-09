<template>
  <section id="services">
    <div class="container">
      <div class="">
        <h2 class="mb-5">Nos services</h2>

        <div class="d-none col-12 col-md-6">
          <ul>
            <li><a href="#website-services">Services pour sites web</a></li>
            <li><a href="#contract-services">Contrats électroniques ou papiers</a></li>
            <li><a href="#compliance-services">Conformité légale et sécurité juridique</a></li>
            <li><a href="#admin-services">Formalités administratives de l’entreprise</a></li>
            <li><a href="#writing-services">Rédaction de texte de tout type</a></li>
          </ul>
        </div>
        <div class="col-12 row gap-2 row-cols-1 row-cols-md-3 row-cols-lg-1 m-0">
          <ServiceCard link="#website-services" title="Services complets pour sites web" class="text-center">
            <template #image >
              <img src="~/assets/logo/ka-lumieres-logo-1.jpg" alt="ka-lampe" class="ka-lampe" width="100" height="100">
            </template>
            <ul class="list-group list-group-flush h-100 justify-content-center text-start">
            <li class="list-group-item">Conception du site web</li>
            <li class="list-group-item">Hébergement et maintenance du site web</li>
            <li class="list-group-item">Rédaction des mentions légales obligatoires</li>
            <li class="list-group-item">Création du contenu (texte)</li>
          </ul>
          </ServiceCard>
          <ServiceCard link="contract-services" title="Contrats électroniques ou papiers" class="text-center" reversed>
            <template #image>
              <img src="~/assets/logo/ka-lumieres-logo-2.jpg" alt="ka-lampe" class="ka-lampe" width="100" height="100">
            </template>
            <ul class="list-group list-group-flush h-100 justify-content-center text-start">
            <li class="list-group-item">Fourniture de modèles de contrats (templates) adaptés à votre activité</li>
            <li class="list-group-item">Revue de contrats (partenaires, prestataires, clients…)</li>
          </ul>
            </ServiceCard>
          <ServiceCard link="compliance-services" title="Conformité légale et sécurité juridique" class="text-center">
            <template #image>
              <img src="~/assets/logo/ka-lumieres-logo-3.jpg" alt="ka-lampe" class="ka-lampe" width="100" height="100">
              </template>
            <ul class="list-group list-group-flush h-100 justify-content-center text-start">
            <li class="list-group-item">Site internet conforme à toutes les lois</li>
            <li class="list-group-item">Entreprise conforme à la législation</li>
            <li class="list-group-item">Relations d’affaires et business sécurisés</li>
          </ul>
          </ServiceCard>
          <ServiceCard link="admin-services" title="Formalités administratives de l’entreprise" class="text-center" reversed>
            <template #image>
              <img src="~/assets/logo/ka-lumieres-logo-4.jpg" alt="ka-lampe" class="ka-lampe" width="100" height="100">
            </template>
            <ul class="list-group list-group-flush h-100 justify-content-center text-start">
            <li class="list-group-item">Dépôt de marque</li>
            <li class="list-group-item">Création d’entreprise</li>
            <li class="list-group-item">Autres formalités selon votre secteur d’activité</li>
          </ul>
          </ServiceCard>
          <ServiceCard link="writing-services" title="Rédaction de texte de tout type" class="text-center">
            <template #image>
              <img src="~/assets/logo/ka-lumieres-logo-5.jpg" alt="ka-lampe" class="ka-lampe" width="100" height="100">
            </template>
            <ul class="list-group list-group-flush h-100 justify-content-center text-start">
            <li class="list-group-item">Contenu du site web</li>
            <li class="list-group-item">Slogans</li>
            <li class="list-group-item">Articles</li>
            <li class="list-group-item">Etc.</li>
          </ul>
          </ServiceCard>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section#services {
  border-color: var(--light-gray);
}
</style>