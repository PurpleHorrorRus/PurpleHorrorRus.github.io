<template>
    <div id="information-bio">
        <span id="information-bio-name" v-text="'Имя: Максим'" />
        <span id="information-bio-lastname" v-text="'Фамилия: Никифоров'" />
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
const birthdayDay = birthday.getDate();
const birthdayMonth = birthday.getMonth() + 1;
const birthdayYear = birthday.getFullYear();

export default {
    computed: {
        age() {
            const date = new Date();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            return (
                date.getFullYear() -
                (month >= birthdayMonth && day >= birthdayDay
                    ? birthdayYear
                    : birthdayYear + 1)
            );
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
        color: #cecece;
        font-size: 14px;
    }
}
</style>