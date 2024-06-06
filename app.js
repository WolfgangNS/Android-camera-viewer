document.getElementById('startButton').addEventListener('click', async () => {
    const video = document.getElementById('video');

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        console.error('Error accessing the camera: ', err);
    }
});
