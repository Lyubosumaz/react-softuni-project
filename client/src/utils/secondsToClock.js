export default function secondsToClock(time) {
    const hours = Math.floor(time / (60 * 60));

    const divisorMinutes = time % (60 * 60);
    const minutes = Math.floor(divisorMinutes / 60);

    const divisorSeconds = divisorMinutes % 60;
    const seconds = Math.ceil(divisorSeconds);

    const clock = `${hours}h ${minutes}m ${seconds}s`;
    return clock;
}
