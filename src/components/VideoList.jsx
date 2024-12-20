const VideoList = ({ videos, onVideoClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {videos.map((video) => (
        <div
          key={video.id.videoId}
          onClick={() => onVideoClick(video.id.videoId)}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform cursor-pointer"
        >
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-sm font-bold mb-2 truncate">
              {video.snippet.title}
            </h3>
            <p className="text-xs text-gray-600 truncate">
              {video.snippet.channelTitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
