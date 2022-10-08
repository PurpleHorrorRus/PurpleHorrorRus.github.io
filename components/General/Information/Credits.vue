<template>
    <div id="information-bio">
        <span id="information-bio-fullname" v-text="'ФИО: Никифоров Максим Игоревич'" />
        <span
            id="information-bio-ages"
            v-text="`Возраст: ${age} ${agesString}`"
        />
        <span
            id="information-bio-location"
            v-text="'Место проживания: Россия, Иркутская Область, Иркутск'"
        />
    </div>
</template>

<script>
const birthday = new Date("March 20, 1998");
const ageDifMs = Date.now() - birthday.getTime();
const ageDate = new Date(ageDifMs);

export default {
    computed: {
        age() {
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },

        agesString() {
            const agesDigits = String(this.age).split("");
            const lastDigit = Number(agesDigits[agesDigits.length - 1]);

            if (lastDigit === 0) return "лет";
            else if (lastDigit === 1) return "год";
            else if (lastDigit < 5) return "года";
            else return "лет";
        }
    }
};
</script>

<style lang="scss">
#information-bio {
    grid-area: bio;

    display: flex;
    flex-direction: column;
    row-gap: 5px;

    height: max-content;

    span {
        color: var(--text);
        font-size: 14px;
    }
}
</style>