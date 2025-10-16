'use client';
import React, { useState, useEffect, useRef } from 'react';
import PlayIcon from '@/components/icons/play-2.svg';
import StopIcon from '@/components/icons/stop.svg';
import SpotifyLogo from '@/components/icons/spotify.svg';

const ELearningPodcastPlayer = () => {
    const totalSec = 324;
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const progressRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const toggleIsPlaying = () => {
        setIsPlaying((prev) => {
            if (!prev) {
                if (currentTime >= totalSec) {
                    setCurrentTime(0);
                    return true;
                }
            }
            return !prev;
        });
    };

    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentTime((prevTime) => {
                    if (prevTime >= totalSec) {
                        clearInterval(intervalRef.current!);
                        setIsPlaying(false);
                        return totalSec;
                    }
                    return prevTime + 1;
                });
            }, 1000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current!);
    }, [isPlaying]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (progressRef.current) {
            const rect = progressRef.current.getBoundingClientRect();
            const clickPosition = e.clientX - rect.left;
            const clickPercentage = clickPosition / rect.width;
            setCurrentTime(Math.floor(totalSec * clickPercentage));
        }
    };

    return (
        <div className="mt-8 flex items-center gap-3.5">
            <button onClick={toggleIsPlaying}>{isPlaying ? <StopIcon className="fill-surface-950 dark:fill-surface-0" /> : <PlayIcon className="fill-surface-950 dark:fill-surface-0" />}</button>
            <div ref={progressRef} className="flex-1 relative h-2 rounded-full bg-surface-200 dark:bg-surface-700 cursor-pointer" onClick={handleProgressClick}>
                <div className="absolute h-full bg-main-gradient rounded-full pointer-events-none" style={{ width: `${(currentTime / totalSec) * 100}%` }}>
                    <div className="absolute left-full -translate-x-2 cursor-pointer top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-surface-950 dark:bg-surface-0 border border-surface-0 dark:border-surface-950 transition-all duration-75 ease-linear"></div>
                </div>
            </div>
            <span className="font-semibold text-surface-950 dark:text-surface-0 w-12">{formatTime(currentTime)}</span>
            <SpotifyLogo />
        </div>
    );
};

export default ELearningPodcastPlayer;
