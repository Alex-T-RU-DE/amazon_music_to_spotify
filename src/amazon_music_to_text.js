var list = [];
// Select all elements that contain song information
var songs = document.querySelectorAll("music-image-row");
for (var i = 0; i < songs.length; i++) {
    try {
        // Extract the song title from the primary-text attribute
        var title = songs[i].getAttribute("primary-text");
        // Remove [Explicit] word in case it is in the title
        title = title.replace('[Explicit]', '').trim();
        // Extract the artist name from the secondary-text-1 attribute
        var artist = songs[i].getAttribute("secondary-text-1");
        // If both title and artist were found by code
        if (title && artist) {
            // Combine the title and artist into a single string
            list.push(`${artist} - ${title}`);
        }
    } catch (e) {
        console.error("Error processing song element:", songs[i], e);
    }
}
// Open a new window
var newWindow = window.open("", "_blank", "width=400,height=600");
// Check if the new window was created successfully
if (newWindow) {
    // Write the song information to the new window
    newWindow.document.write("<h1>Amazon Music Songs</h1>");
    newWindow.document.write(list.join("<br/>"));
    newWindow.document.write('<style>body { font-family: Arial, sans-serif; }</style>');
} else {
    console.error("Failed to open new window. Please check your browser's popup blocker settings.");
}