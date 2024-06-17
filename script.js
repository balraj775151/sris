document.addEventListener("DOMContentLoaded", function() {
    const panicButton = document.getElementById('panic-button');
    const fakeConsole = document.getElementById('fake-console');
    const consoleOutput = document.getElementById('console-output');

    panicButton.addEventListener('click', function() {
        document.getElementById('hacked-message').style.display = 'none';
        fakeConsole.style.display = 'block';

        let messages = [
            "Connecting to server...",
            "Accessing personal data...",
            "Downloading contacts...",
            "Downloading messages...",
            "Camera access granted...",
            "Microphone access granted...",
            "Uploading data...",
            "Data upload complete. Your phone is now fully compromised."
        ];

        let delay = 1000;
        messages.forEach((message, index) => {
            setTimeout(() => {
                consoleOutput.textContent += message + "\n";
                fakeConsole.scrollTop = fakeConsole.scrollHeight;
            }, delay * (index + 1));
        });

        setTimeout(() => {
            consoleOutput.textContent += "Just kidding! Your phone is safe. :-)\n";
            fakeConsole.scrollTop = fakeConsole.scrollHeight;
        }, delay * (messages.length + 1));
    });
});
