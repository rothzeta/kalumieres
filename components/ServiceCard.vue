<template>
    <!--Card for indivudal service-->
    <div class="card shadow rounded">
        <div class="card-body p-2">
            <div class="d-flex flex-column service-card justify-content-between" :class="reversed ? 'flex-md-row-reverse' : 'flex-md-row'">
                <div class="col-12 col-md-4">
                    <div class="d-flex justify-content-center align-content-center">
                        <slot name="image">
                            <img src="~/assets/img/ka-lumieres-lampe-only.png" alt="ka-lampe" class="ka-lampe" width="100" height="100">
                        </slot>
                    </div>
                    <h3 :id="link" class="card-title text-center fw-bolder">{{ title }}</h3>
                    <hr class="d-block d-md-none">
                </div>
                <div class="col-12 col-md-6  col-lg-5">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    reversed: {
        type: Boolean,
        default: false
    },
})
</script>

<style lang="scss" scoped>
.card {
    border: 1px solid var(--gold);
    /*background: linear-gradient(90deg, rgba(255, 204, 5, 1), rgba(214, 133, 12, 1));*/

    .card-body {
        background: transparent;
    }
}
</style>