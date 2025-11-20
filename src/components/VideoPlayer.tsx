import { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  onClose: () => void;
}

const VideoPlayer = ({ videoId, title, onClose }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Mock video sources - in a real app, these would be actual video URLs
  const videoSources = {
    'prep-prelevement': '/videos/prep-prelevement.mp4',
    'comprendre-resultats': '/videos/comprendre-resultats.mp4',
    'bilan-annuel': '/videos/bilan-annuel.mp4',
    'depistage-diabete': '/videos/depistage-diabete.mp4',
    'bilan-thyroide': '/videos/bilan-thyroide.mp4',
    'sante-cardio': '/videos/sante-cardio.mp4',
    'analyses-grossesse': '/videos/analyses-grossesse.mp4',
    'fonction-renale': '/videos/fonction-renale.mp4',
    'vitamines-carences': '/videos/vitamines-carences.mp4',
    'systeme-immunitaire': '/videos/systeme-immunitaire.mp4',
  };

  const videoSource = videoSources[videoId as keyof typeof videoSources] || '/videos/default.mp4';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(100);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, [videoId]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    const video = videoRef.current;
    
    if (!video) return;
    
    video.volume = newVolume;
    setVolume(newVolume);
    
    if (newVolume === 0) {
      video.muted = true;
      setIsMuted(true);
    } else {
      video.muted = false;
      setIsMuted(false);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressRef.current;
    const video = videoRef.current;
    
    if (!progressBar || !video) return;
    
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    
    video.currentTime = pos * video.duration;
    setProgress(pos * 100);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      playerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div 
        ref={playerRef}
        className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
          aria-label="Fermer le lecteur vidéo"
        >
          <X size={28} />
        </button>

        {/* Video Element */}
        <div className="relative pt-[56.25%] w-full">
          <video
            ref={videoRef}
            src={videoSource}
            className="absolute inset-0 w-full h-full object-cover"
            onClick={togglePlay}
            poster=""
          >
            Votre navigateur ne prend pas en charge la lecture de vidéos.
          </video>

          {/* Play/Pause Overlay */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label={isPlaying ? 'Pause' : 'Lecture'}
            >
              <div className="w-20 h-20 bg-black/50 rounded-full flex items-center justify-center group-hover:bg-black/70 transition-colors">
                <Play size={32} className="text-white ml-1" />
              </div>
            </button>
          )}
        </div>

        {/* Video Controls */}
        <div className="bg-gradient-to-t from-black/90 to-transparent p-4 pt-8 -mt-16 relative">
          {/* Progress Bar */}
          <div 
            ref={progressRef}
            className="h-1.5 bg-gray-700 rounded-full mb-3 cursor-pointer overflow-hidden"
            onClick={handleProgressClick}
          >
            <div 
              className="h-full bg-primary rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -mt-1.5 w-3 h-3 bg-white rounded-full transform translate-x-1/2"></div>
            </div>
          </div>

          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-4">
              <button 
                onClick={togglePlay}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Lecture'}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
              </button>

              <div className="flex items-center space-x-1.5">
                <button 
                  onClick={toggleMute}
                  className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                  aria-label={isMuted ? 'Activer le son' : 'Désactiver le son'}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                
                <div className="w-20">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-full h-1.5 rounded-full appearance-none bg-gray-600 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                  />
                </div>
              </div>

              <div className="text-sm text-gray-300 ml-2">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button 
                onClick={toggleFullscreen}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                aria-label={isFullscreen ? 'Quitter le mode plein écran' : 'Plein écran'}
              >
                {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Video Title */}
        <div className="p-4 bg-black">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
