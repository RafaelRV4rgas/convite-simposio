"use client";

import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideo() {
    const heroRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (!video || !canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        let animationFrame: number;

        const render = () => {
            if (video.readyState >= 2) {
                if (
                    canvas.width !== video.videoWidth ||
                    canvas.height !== video.videoHeight
                ) {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                }

                ctx.drawImage(
                    video,
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );
            }

            animationFrame = requestAnimationFrame(render);
        };

        const onCanPlay = () => {
            render();

            gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                },
            }).to(video, {
                currentTime: video.duration,
                ease: "none",
            });
        };

        video.addEventListener("canplay", onCanPlay);

        // Safari/iOS may not start buffering aggressively when the
        // video is only scrubbed through currentTime.
        // Force loading so canplay/canplaythrough are reached.
        video.load();

        return () => {
            cancelAnimationFrame(animationFrame);
            video.removeEventListener("canplay", onCanPlay);
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="video-scroll-container"
        >
            <video
                ref={videoRef}
                muted
                playsInline
                preload="none"
            >
                <source
                    src={`${import.meta.env.BASE_URL}assets/Brain_transformation_scroll.mp4`}
                    type="video/mp4"
                />
            </video>

            <canvas
                ref={canvasRef}
            />
        </section>
    );
}