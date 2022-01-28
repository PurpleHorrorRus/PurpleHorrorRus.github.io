<template>
    <div class="solid-button">
        <span class="solid-button-label" v-text="label" />
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
.solid-button {
    display: block;
    min-width: 60px;
    width: max-content;
    max-width: 400px;
    height: 30px;

    margin-top: 10px;
    padding: 8px;

    background: #9c3536;
    border-radius: 5px;

    font-size: 9pt;
    text-align: center;

    transition: all 0.5s ease;

    span {
        cursor: pointer;
    }

    &:hover {
        cursor: pointer;
        background: #9c353680;
    }

    &-label {
        color: #fff;
    }
}
</style>
