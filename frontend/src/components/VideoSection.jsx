import React from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, Fullscreen } from "lucide-react";
import Video from "../assets/video.mp4";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false); //here Sound ON by default
  const videoRef = React.useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="video" className="py-20 relative bg-slate-50">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            Why I’m a Great Hire
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            A short video explaining my experience, mindset, and why I can be a valuable addition to your team.
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
            
            {/* Video */}
            <div className="aspect-video bg-black relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted={isMuted}
                onClick={togglePlay}
              >
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Center Play Overlay */}
              <button
                onClick={togglePlay}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isPlaying ? "opacity-0 hover:opacity-100 bg-black/20" : "bg-black/40"
                }`}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
                    isPlaying ? "scale-90" : "scale-100"
                  }`}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </div>
              </button>

              {/* Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 text-white"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 text-white"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={toggleFullscreen}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 text-white"
                >
                  <Fullscreen className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-2">About This Video</h3>
              <p className="text-gray-600 text-sm">
                A quick introduction showing who I am, what I do, and why I’d be a strong fit for the job.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
