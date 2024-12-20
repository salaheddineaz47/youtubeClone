function Video({ selectedVideoId }) {
  return (
    <div className="video-player flex items-center justify-center mb-16">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${selectedVideoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
