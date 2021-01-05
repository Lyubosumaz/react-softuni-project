export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function secondsToClock(time) {
    const hours = Math.floor(time / (60 * 60));

    const divisorMinutes = time % (60 * 60);
    const minutes = Math.floor(divisorMinutes / 60);

    const divisorSeconds = divisorMinutes % 60;
    const seconds = Math.ceil(divisorSeconds);

    const clock = `${hours}h ${minutes}m ${seconds}s`;

    return clock;
}

export function numberGenerator() {
    return Math.random().toString().substr(2, 6);
}

export function indexGenerator() {
    return `_id__${numberGenerator()}__${numberGenerator()}`;
}
