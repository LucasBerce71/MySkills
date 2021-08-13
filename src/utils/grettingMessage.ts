export function grettingMessage() {
    const currentHour = new Date().getHours();

    if (currentHour < 12) return "Good Morning!";

    if (currentHour >= 12 && currentHour < 18) return "Good Afternoon!";

    return "Good Night!";
}