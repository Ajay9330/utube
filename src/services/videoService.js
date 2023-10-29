// Function to create an iframe for a YouTube video
export const createYouTubeVideoIframe = (videoId) => {
    const iframe = document.createElement('iframe');
    iframe.width = '560';
    iframe.height = '315';
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    return iframe;
  };
  