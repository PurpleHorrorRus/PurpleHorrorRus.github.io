<template>
    <div class="category">
        <span class="category-label" v-text="label" />
        <slot class="category-slot" />
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss">
.category {
    height: max-content;

    margin: 10px;
    padding: 10px;

    background: #202020;
    border-radius: 4px;

    &-label, &-text {
        display: block;
    }

    &-label {
        width: max-content;

        padding: 5px 10px;
        
        color: #ffffff;
        font-size: 21px;
    
        border-bottom: 1px solid #3f3f3f;
    }

    &-text {
        display: inline-block;
    }
}
</style>