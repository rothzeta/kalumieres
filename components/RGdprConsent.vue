<template>
    <!-- gdpr banner uses bootstrap-->
    <div class="container-fluid text-light bg-dark shadow text-center custom-margin">
        <div class="row h-100 justify-content-center">
            <div class="col-12">
                <div class="alert mb-0" role="alert">
                    <p class="mb-0 smaller">Ce site n'utilise que des cookies nécessaires à son bon fonctionnement</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bg-dark {
    --bs-bg-opacity: 0.50;
}

.custom-margin {
    margin-top: 90px;
}

/** on mobile the header is not fixed so no margin */
@media (max-width: 768px) {
    .custom-margin {
        margin-top: 0px;
    }
}
</style>