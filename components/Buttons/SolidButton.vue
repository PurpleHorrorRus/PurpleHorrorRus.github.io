<template>
    <div class="solid-button" :class="{ clickable: !disabled }">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    }
};
</script>

<style lang="scss">
.solid-button {
    display: flex;
    justify-self: center;
    align-items: center;

    width: max-content;
    height: 40px;

    padding: 10px;

    background: var(--secondary);
    border-radius: 4px;

    .icon {
        width: 24px;
    }

    &.clickable {
        cursor: pointer;

        &:hover {
            .icon {
                fill: #ffffff;
            }
        }
    }
}
</style>