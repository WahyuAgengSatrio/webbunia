document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("Download");

    downloadButton.addEventListener("click", function() {
        const cvPath = "th (1).jpg";

        const link = document.createElement("a");
        link.href = cvPath;
        link.download = "th (1).jpg";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
