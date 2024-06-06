const video = document.getElementById('video');

document.getElementById('frontButton').addEventListener('click', async () => {
    const constraints = {
        video: {
            facingMode: 'user' // Request the front-facing camera
        }
    };

    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
    } catch (err) {
        console.error('Error accessing the front camera: ', err);
    }
});

document.getElementById('rearButton').addEventListener('click', async () => {
    const constraints = {
        video: {
            facingMode: { exact: 'environment' } // Request the rear-facing camera
        }
    };

    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
    } catch (err) {
        console.error('Error accessing the rear camera: ', err);
    }
});
